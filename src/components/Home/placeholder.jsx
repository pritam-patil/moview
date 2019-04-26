import _ from 'lodash'
import React from 'react'
import {
    Card,
    Menu
} from 'semantic-ui-react';
import { ITEMS_PER_ROW } from "../../constants";
import MoviePlaceHolder from "./alt-placeholder";

const MAX_PLACEHOLDERS = 2 * ITEMS_PER_ROW;

export const ListPlaceHolder = () => (
    <Card.Group doubling itemsPerRow={ITEMS_PER_ROW}>
    {
        _.times(MAX_PLACEHOLDERS, num => <MoviePlaceHolder key={`ph-${num}`} />)
    }
    </Card.Group>
);

export default () => {
    return (
        <>
            <Menu tabular attached="top">
                <Menu.Item
                    active
                    name='Now playing'
                />
            </Menu>
            <ListPlaceHolder />
        </>
    )
}
