import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Image, Label, Icon } from 'semantic-ui-react';
import { Credits as People, MovieDetailsHolder } from "../../containers";
import './Movie.css';

const MovieDetails = (props) => {
    const { genres, time } = props;
    
    return (
        <Grid columns={2} divided className="movie-card">
            <Grid.Row className="movie-details">
                <Grid.Column className="movie-genres">
                    { false && <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> }
                    <section>
                        {
                            genres && genres.map((genre, index) => (
                                    <Label color="blue" style={{margin: '4px'}}>{genre.name}</Label>
                            ))
                        }
                        
                    </section>
                </Grid.Column>
                <Grid.Column>
                    <Label image color="orange">
                        <Icon name="clock outline"/>                            
                        {time} min
                    </Label>
                </Grid.Column>
            </Grid.Row>
        </Grid>
  );
}

const MovieTile = props => {
    const {
        genres,
        people,
        title: movieName,
        year: releaseYear,
        time: runtime,
        details: overview
    } = props;

    return (
        <Card active fluid article role="article">
            <Image src={props.imgUrl} />
            <Card.Content>
                <Card.Header className="phm-title-tile"> {movieName} ({releaseYear}) </Card.Header>
                <Card.Header extra>  </Card.Header>
                <Card.Meta>
                    <MovieDetails genres={genres} time={runtime} />
                </Card.Meta>
                <Card.Description className="phm-description">
                    {overview}
                </Card.Description>
                <Card.Content extra>
                    <People cast={people.cast} crew={people.crew} />
                </Card.Content>
            </Card.Content>
        </Card>
    );
};

const MemoTile = React.memo(MovieTile);

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movie: {}
        }
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?` +
        `api_key=651925d45022d1ae658063b443c99784` +
        `&language=en-US` +
        '&append_to_response=credits';
        fetch(movieUrl)
            .then(response => response.json())
            .then(data => this.setState({ movie: data, isLoading: false }))
            .catch(err => console.log("error:", err));
    }

    render() {
        const { isLoading, movie } = this.state;
        let renderComponent = <MovieDetailsHolder />;
        const {
            backdrop_path,
            credits,
            genres,
            overview,
            release_date,
            runtime,
            title,
        } = movie;

        const releaseYear = release_date ? release_date.substring(0 ,4) : null;
        const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
        
        if (!isLoading) {
            renderComponent =  <MemoTile
                                    title={title}
                                    year={releaseYear}
                                    genres={genres}
                                    people={credits}
                                    time={runtime}
                                    details={overview}
                                    imgUrl={imgUrl}
                                />;
        }

        return (
            <div className="movie-page">
                { renderComponent }
                <Link to={`/`} className="go-back">
                    <i class="fas fa-arrow-circle-left fa-2x"></i>
                </Link>
            </div>
        );
    }
}

export default Movie;