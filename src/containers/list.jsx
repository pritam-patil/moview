import React, { Component } from 'react'
import {
    Divider,
    Label,
    List
} from 'semantic-ui-react';
import PropTypes from 'prop-types'
import { ListItem } from "../components";

const LazyList = props => {
    const imageBase = 'https://image.tmdb.org/t/p/w300';
    const { data, title } = props;
    return (
    <List relaxed>
        <Label basic color="grey"> { title } </Label>
        {
            data && data.slice(0,9).map((item, index) => {
                const { character, name, profile_path } = item;
                const src = 'http://via.placeholder.com/300x450'; 
                return (
                    <ListItem
                        character={character}
                        name={name}
                        key={index}
                        src={src}
                    />
                );
            })
        }
    </List>
  )
};

class componentName extends Component {

}


LazyList.propTypes = {
    data: PropTypes.shape(),
    title: PropTypes.string,
};

LazyList.defaultProps = {
    title: 'Items',
}

export default LazyList;

