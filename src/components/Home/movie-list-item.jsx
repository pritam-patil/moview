import React from "react";
import { Card, Grid, Icon, Image, Label } from "semantic-ui-react";
import { Rating as MovieRatings } from "../common";
import { ROUTES } from "../../constants";
import "./styles.css";

export default (props) => {
  const { id, title, poster_path, release_date, overview, vote_average } =
    props.movie;

  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  const year = release_date && release_date.substring(0, 4);
  const linkTo = ROUTES.DETAILS.replace(":id", id);

  return (
    <Card href={linkTo} article="true" role="article">
      <Image centered size="large" src={imgUrl} alt={title} />
      <Card.Content>
        <Card.Header content={title} />
        <Card.Description>{`${overview.slice(0, 60)}...`}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="extra-details">
          <MovieRatings title={title} vote_average={vote_average} />
          <Label basic> {year} </Label>
        </div>
      </Card.Content>
    </Card>
  );
};
