import React from 'react'
import { Grid, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import { ListItem } from "../components";

const LazyList = props => {
    const imageBase = 'https://image.tmdb.org/t/p/w300';
    const { data } = props;

    if (0 === data.length) {
        return <span> Sorry, details are not available. </span>
    }

    return (
        <Grid columns={3}>
        {
            data && data.slice(0,9).map((item, index) => {
                const { character, name, profile_path } = item;
                const role = character || item.job;
                const src = profile_path 
                            ? (imageBase + profile_path)
                            : 'http://via.placeholder.com/300x450';
                return (
                    <ListItem
                        character={role}
                        name={name}
                        key={index}
                        src={src}
                    />
                );
            })
        }
        </Grid>
  )
};

LazyList.propTypes = {
    data: PropTypes.shape(),
};

export default LazyList;

