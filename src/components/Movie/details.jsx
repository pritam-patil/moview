import React from 'react';
import {
    Grid,
    Icon,
    Label
} from 'semantic-ui-react';
import { Rating } from '../common';

const MovieDetails = (props) => {
    const { genres, time, title, rating } = props;

    return (
        <Grid columns={3} divided className="movie-card">
            <Grid.Row className="movie-details">
                <Grid.Column className="movie-genres">
                    <section>
                    {
                        genres && genres.map((genre, index) => (
                                <Label color="blue" style={{margin: '4px'}}>{genre.name}</Label>
                        ))
                    }
                    </section>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Rating title={title} vote_average={rating} />
                </Grid.Column>
                <Grid.Column width={5}>
                    <Label image color="orange">
                        <Icon name="clock outline"/>
                        {` ${time} min`}
                    </Label>
                </Grid.Column>
            </Grid.Row>
        </Grid>
  );
}

export default MovieDetails;
