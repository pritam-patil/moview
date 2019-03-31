import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import LineEllipsis from 'react-lines-ellipsis';
import { Card, Grid, Icon, Image } from 'semantic-ui-react';
import { LazyLoad } from '../../components';
import "./MovieListItem.css";

const DEFAULT_RATING = 3;
const MAX_INPUT_RATING = 10;
const OUTPUT_RATING = 5;

const getRatingKey = (title, rating) => `${title}-${rating}`;

const MovieRatings = ({ title, vote_average = DEFAULT_RATING }) => {
    const fiveStars = vote_average * OUTPUT_RATING / MAX_INPUT_RATING;
    const fraction = OUTPUT_RATING - fiveStars;
    let fullStars = [];

    for (let i=0; i < Math.floor(fiveStars); i++) {
        let key = getRatingKey(title, fiveStars + i);
        fullStars.push(<i key={key} class="fas fa-star fa-xs"></i>);
    }

    if (fraction) {
        fullStars.push(<i key={getRatingKey(title, 2*fiveStars)} class="fas fa-star-half fa-xs"></i>)
    }

    return (
        fullStars
    )
};

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
                        <div className="average">
                            <MovieRatings title={title} vote_average={vote_average} />
                        </div>
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
        <Card className="default-container" href={linkTo}>
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
                        <Grid.Column>
                            {vote_average}
                        </Grid.Column>
                        <Grid.Column>
                            {
                                year
                            }
                        </Grid.Column>
                        <Grid.Column floated="right" width={4} className={"view-page"}>
                            <Icon name="angle right" role="main"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    )
}

// componentName.propTypes = {

// }


// SemanticItem.propTypes = {
//     movie: PropTypes.
//     id: PropTypes.string,
//     title: PropTypes.string,
//     overview: PropTypes.string,
// };


// export default SemanticItem;
