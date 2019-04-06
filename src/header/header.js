import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import {
    Divider,
    Grid,
    Header,
} from 'semantic-ui-react';
import { Form } from '../components/form';
import "./header.css";

const TopbarGrid = () => (
        <Grid columns={2} doubling divided className="header">
            <Grid.Row>
                <Grid.Column className="app-details">
                    <Grid columns={2}>
                        <Grid.Row className="grid-row">
                            <Grid.Column width={2}>
                                <Link to={"/"}>
                                    <i class="fas fa-film fa-3x"></i>
                                </Link>
                            </Grid.Column>
                            <Grid.Column width={10} className="app-title">
                                <Header as="h2" role="title">
                                    <Header.Content>
                                        Moview
                                        <Header.Subheader className="app-sub">
                                            Find the right movie!
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column className="reset-space"> 
                    <Form />
                </Grid.Column>
            </Grid.Row>
        </Grid>
);

export default TopbarGrid;