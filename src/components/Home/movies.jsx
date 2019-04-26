import React from "react";
import AirbrakeClient from 'airbrake-js';
import {
    Icon,
    Menu,
    Modal,
    Segment,
} from 'semantic-ui-react';
import { DEFAULT_FILTERS, MOVIE_GENRES, TAB_DEFAULT_NAME } from '../../constants';
import Navigation from "./navigation/Navigation";
import {
    ErrorPage,
    NoConnection,
} from '../common';
import MovieList from './movies/Movies';
import "./styles.css"

const {
 MIN_YEAR,
 MAX_YEAR,
 MIN_RATING,
 MAX_RATING,
 MIN_TIME_MINS,
 MAX_TIME_MINS
} = DEFAULT_FILTERS;

class Main extends React.Component {
    state = {
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=651925d45022d1ae658063b443c99784&language=en-US`,
        moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`,
        genre: null,
        year: {
            label: "year",
            min: 1970,
            max: 2019,
            step: 1,
            value: { min: MIN_YEAR , max: MAX_YEAR }
        },
        rating: {
            label: "rating",
            min: 0,
            max: 10,
            step: 1,
            value: { min: MIN_RATING, max: MAX_RATING }
        },
        runtime: {
            label: "runtime",
            min: 0,
            max: 300,
            step: 15,
            value: { min: MIN_TIME_MINS, max: MAX_TIME_MINS }
        },
        isOpen: false,
        hasError: false,
    };

    airbrake = new AirbrakeClient({
        projectId: 219983,
        projectKey: '7881b9af5510c9794ba34bb4d525eecd',
    });

    componentDidCatch(error, info) {
        this.setState({ hasError: true });

        // Send error to airBrake
        this.airbrake.notify({
            error,
            params: { info },
        });
    }

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
    };

    onChange = data => {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value
            }
        });
    };

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    onCloseModal = () => {
        this.setState({ isOpen: false });
    };

    generateUrl = () => {
        const { year, rating, runtime } = this.state;
        const selectedGenre = MOVIE_GENRES.find( genre => genre.name === (this.state.genre || 'Action'));
        const genreId = selectedGenre.id;

        const moviesUrl = `https://api.themoviedb.org/3/discover/movie?` +
            `api_key=651925d45022d1ae658063b443c99784&` +
            `language=en-US&sort_by=popularity.desc&` +
            `with_genres=${genreId}&` +
            `primary_release_date.gte=${year.value.min}-01-01&` +
            `primary_release_date.lte=${year.value.max}-12-31&` +
            `vote_average.gte=${rating.value.min}&` +
            `vote_average.lte=${rating.value.max}&` +
            `with_runtime.gte=${runtime.value.min}&` +
            `with_runtime.lte=${runtime.value.max}&` +
            `page=1&`;

        this.setState({ moviesUrl });
    };

    onSearchButtonClick = () => {
        this.toggleModal();
        this.generateUrl();
    };

    render() {
        const { genre, hasError, isOpen } = this.state;
        const { offline } = this.props;
        const tabName =  genre || TAB_DEFAULT_NAME;

        if (hasError) {
            return <ErrorPage />
        }

        return (
            <div className="main">
                <Icon
                    disabled={offline}
                    circular
                    id="custom-search"
                    name="filter"
                    size="big"
                    tabIndex={2}
                    onClick={this.toggleModal}
                    className="filter"
                />
                <Modal 
                  classNames={{modal: "modal-custom"}}
                  open={isOpen}
                  onClose={this.onCloseModal}
                  size="mini"
                >
                    <Navigation
                        onChange={this.onChange}
                        onGenreChange={this.onGenreChange}
                        onModalClose={this.onCloseModal}
                        onSearchButtonClick={this.onSearchButtonClick}
                        onClose={this.toggleModal}
                        {...this.state}
                    />
                </Modal>
                {
                    offline
                    ? <NoConnection />
                    : <div onOnline={(e) => this.updateConnection(false)} onOffline={(e) => this.updateConnection(true)}>
                        <Menu tabular attached="top">
                            <Menu.Item
                                active
                                color={tabName === TAB_DEFAULT_NAME ? 'inherit' : 'blue'}
                                name={tabName}
                            />
                        </Menu>
                        <Segment attached="bottom">
                            <MovieList genre={this.state.genre} url={this.state.moviesUrl} onClick={this.toggleModal}/>
                        </Segment>
                    </div>
                }
            </div>
        )
    }
}

export default Main;
