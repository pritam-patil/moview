import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Icon, Image, Placeholder, Grid } from 'semantic-ui-react';
import MoviePlaceHolder from "../components/home-movie-placeholder";

const MAX_PLACEHOLDERS = 6;

export default () => {
    return (
        <Card.Group doubling itemsPerRow={4}>
          {
              _.times(MAX_PLACEHOLDERS, num => <MoviePlaceHolder key={`ph-${num}`} />)
          }
        </Card.Group>
    )
}
