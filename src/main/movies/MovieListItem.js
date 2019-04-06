import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import LineEllipsis from 'react-lines-ellipsis';
import { Card, Grid, Icon, Image, Rating, Label } from 'semantic-ui-react';
import { LazyLoad, Rating as MovieRatings } from '../../components';
import "./MovieListItem.css";

const CardExampleCardProps = ({title, poster_path, overview, release_date}) => (
    <Card
      header={title}
      meta={release_date}
      description={overview}
    />
);

const MovieListItem = ({ movie={} }) => {
    const {
        id,
        title,
        poster_path,
        release_date,
        overview,
        vote_average,
    } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const year = release_date && release_date.substring(0, 4);

    return (
        <li className="movie-poster">
            <Link to={`/movies/${id}`} className="thumbnail">
                <LazyLoad className={"movie-poster-img"} url={imgUrl}/>
                <div className="second-layer">
                    <div className={"title"}>
                      <LineEllipsis
                        text={title}
                        maxLine={3}
                        ellipsis={`...`}
                        trimRight
                        basedOn={'letters'}
                      />
                    </div>
                    <div className="movie-details">
                        <MovieRatings title={title} vote_average={vote_average} />
                        <div className="year">{year}</div>
                    </div>
                    <div className="more-details">
                        <LineEllipsis
                            text={overview}
                            maxLine={4}
                            ellipsis={`...`}
                            trimRight
                            basedOn={'letters'}
                        />
                    </div>
                </div>
            </Link>
        </li>

    );
};


const SemanticItem = ({ movie={} }) => {
    const {
        id,
        title,
        poster_path,
        release_date,
        overview,
        vote_average,
    } = movie;

    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
            <Card fluid>
                <Card.Content>
                    <Image size="medium" wrapped>
                        <img alt={title} />
                    </Image>
                </Card.Content>
                <Card.Header>
                    { title }
                </Card.Header>
                <Card.Description>
                <LineEllipsis
                        text={overview}
                        maxLine={3}
                        ellipsis={`...`}
                        trimRight
                        basedOn={'letters'}
                      />
                </Card.Description>
            </Card>
    )
};

export default (props) => {
    const {
        id,
        title,
        poster_path,
        release_date,
        overview,
        vote_average,
    } = props.movie;

    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const year = release_date && release_date.substring(0, 4);
    const linkTo = `/movies/${id}`;

    return (
        <Card
            href={linkTo}
            article
            role="article"    
        >
            <Image size="medium" wrapped>
                <img src={imgUrl} alt={title} />
            </Image>
            <Card.Content>
            <Card.Header>
                <LineEllipsis
                    text={title}
                    maxLine={2}
                    ellipsis={`...`}
                    trimRight
                    basedOn={'letters'}
                />
            </Card.Header>
            <Card.Description>
                    <LineEllipsis
                        text={overview}
                        maxLine={3}
                        ellipsis={` ...`}
                        trimRight={false}
                        basedOn={'words'}
                    />
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid columns={3} divided>
                    <Grid.Row>
                        <Grid.Column width={6} className="average">
                            <MovieRatings title={title} vote_average={vote_average} />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Label basic> {year} </Label>
                        </Grid.Column>
                        <Grid.Column width={2} className={"view-page"} floated="right">
                            <Icon name="angle right" primary role="navigation"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    )
}

