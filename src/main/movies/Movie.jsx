import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Image, Label, Icon } from 'semantic-ui-react';
import { Loader } from 'semantic-ui-react';
import './Movie.css';

const MovieTile = props => {
    const {
        genres,
        title: movieName,
        year: releaseYear,
        time: runtime,
        details: overview
    } = props;
    const length = `${runtime} mins`;

    return (
        <Card fluid>
            <Image src={props.imgUrl} />
            <Card.Content>
                <Card.Header className="phm-title-tile"> {movieName} ({releaseYear}) </Card.Header>
                <Card.Header extra>  </Card.Header>
                <Card.Meta>
                    <Grid columns={2}>
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
                            <Grid.Column width={8}>
                                <Label style={{borderRadius: '16px', marginLeft: '4px'}} margin={4} image color="orange">
                                    <Icon name="clock outline"/>                            
                                    {runtime} min
                                </Label>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Meta>
                <Card.Description className="phm-description">
                    {overview}
                </Card.Description>
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
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=651925d45022d1ae658063b443c99784&language=en-US`;
        fetch(movieUrl)
            .then(response => response.json())
            .then(data => this.setState({ movie: data, isLoading: false }))
            .catch(err => console.log("error:", err));
    }

    render() {
        const { isLoading, movie } = this.state;
        const {
            title,
            backdrop_path,
            release_date,
            genres,
            overview,
            runtime
        } = movie;

        const releaseYear = release_date ? release_date.substring(0 ,4) : null;
        const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;

        return (
            <div className="movie-page">
            {
                isLoading
                    ? <Loader active inline='centered' />
                    : <div className="movie-page">
                        <MovieTile
                            title={title}
                            year={releaseYear}
                            genres={genres}
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