import React from "react";
import { Link } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';
import "./header.css";

const TopBar = () => (
    <Menu>
        <Menu.Item>
            <Link to={"/"}>
                <i class="fas fa-film fa-3x"></i>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Header as="h2">
                <Header.Content>
                    Moview
                    <Header.Subheader>
                        Find the right movie!
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Menu.Item>
    </Menu>
)

export default TopBar;