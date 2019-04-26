import React from 'react'
import {
    Grid,
    Image,
    List,
    Label
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.css';


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

const GridItem = ({ character, name, src}) => {
    let charEle = null;
    if (character) {
        charEle = <Label basic className="credits-label-sec">{ character }</Label>;
    }

    return(
        <Grid.Row>
            <Grid.Column>
                <Image rounded size="small" wrapped>
                    <img src={src} alt={`people-${name}`} />
                </Image>
            </Grid.Column>
            <Grid.Column>
                { charEle }
            </Grid.Column>
            <Grid.Column>
                <Label basic className="credits-label">{ name }</Label>
            </Grid.Column>
        </Grid.Row>
    )
}

ListItem.propTypes = {
    character: string,
    name: string,
    src: string,
}

export default GridItem;
