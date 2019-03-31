import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Image, Label, Icon } from 'semantic-ui-react';
import { Loader } from 'semantic-ui-react';
import { List, MovieListLoader } from "../../containers";
import './Movie.css';

const People = (props) => {
    return (
        <Fragment>
            <List title="Cast" data={props.cast} />
            <List title="Crew" data={props.crew} />
        </Fragment>
    );
};

const GridExampleDividedNumber = (props) => {
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
    const length = `${runtime} mins`;

    return (
        <Card active fluid>
            <Image src={props.imgUrl} />
            <Card.Content>
                <Card.Header className="phm-title-tile"> {movieName} ({releaseYear}) </Card.Header>
                <Card.Header extra>  </Card.Header>
                <Card.Meta>
                    <GridExampleDividedNumber genres={genres} time={runtime} />
                    { false && <Grid columns={2}>
                        <Grid.Row width={12}>
                            <Grid.Column width={8}>
                            <section className="genres">
                                {
                                    genres && genres.map((genre, index) => (
                                            <Label color="blue" style={{margin: '4px'}}>{genre.name}</Label>
                                    ))
                                }
                                
                            </section>
                            </Grid.Column>
                            <Grid.Column width={4} floated="right">
                                    <Icon name="clock outline" bordered/>
                                    {runtime} min
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    }
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

    return (
        <div className="phm-details">
            <div className="phm-details-tile">
                <div className="phm-header">
                    <div className="phm-title-tile">
                        <h1>{`${movieName} (${releaseYear})`}</h1> 
                        <section className="genres">
                                {
                                    genres && genres.map((genre, index) => (
                                        <div key={genre.id}>
                                            <Label color="blue">{genre.name}</Label>
                                        </div>
                                    ))
                                }
                            </section>
                    </div>
                    <Label image color="blue">
                        <Icon name="clock outline" />
                        {length}
                    </Label>
                </div>
                <span>{overview}</span>
            </div>
        </div>
    );
};
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
        console.log(">> credits: ", JSON.stringify(credits));

        return (
            <div className="movie-page">
            {
                isLoading
                    ? <MovieListLoader />
                    : <div className="movie-page">
                        <MovieTile
                            title={title}
                            year={releaseYear}
                            genres={genres}
                            people={credits}
                            time={runtime}
                            details={overview}
                            imgUrl={imgUrl}
                        />
                      </div>
            }
                <Link to={`/`} className="go-back">
                    <i class="fas fa-arrow-circle-left fa-2x"></i>
                </Link>
            </div>
        );
    }
}

export default Movie;