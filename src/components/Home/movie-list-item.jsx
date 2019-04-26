import React from "react";
import LineEllipsis from 'react-lines-ellipsis';
import {
    Card,
    Grid,
    Icon,
    Image,
    Label
} from 'semantic-ui-react';
import { Rating as MovieRatings } from '../common';
import "./styles.css";

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
            article="true"
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

