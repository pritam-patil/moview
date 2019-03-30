import React from 'react'
import {
    Image,
    List
} from 'semantic-ui-react';
import PropTypes from 'prop-types'

const { string } = PropTypes;

const ListItem = ({character, key, name, src}) => {
  return (
    <List.Item key={key}>
        <Image bordered size="tiny" src={src} />
        <List.Content>
            <List.Header as='a'> {name} </List.Header>
            <List.Description>
                {character}
            </List.Description>
        </List.Content>
    </List.Item>
  )
}

ListItem.propTypes = {
    character: string,
    name: string,
    src: string,
}

export default ListItem;
