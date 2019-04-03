import React from "react";
import Modal from 'react-responsive-modal';
import { Menu, Segment, Loader } from 'semantic-ui-react';
import AirbrakeClient from 'airbrake-js';
import { ErrorPage } from '../containers';
import { DEFAULT_FILTERS, TAB_DEFAULT_NAME } from '../constants';
import Navigation from "./navigation/Navigation";

import { moviesLocation, hasDefaultPreferences } from '../components/selectors/movies-url';
import Movies from "./movies/Movies";
import "./Main.css"

const DEFAULT_GENRE = 'Comedy';
const {
 GENRE,
 MIN_YEAR,
 MAX_YEAR,
 MIN_RATING,
 MAX_RATING,
 MIN_TIME_MINS,
 MAX_TIME_MINS
} = DEFAULT_FILTERS;

const yearSelector = state => {
    const { year: { value: { min: minYear, max: maxYear } } } = state;
    if (
      minYear.toString().substring(0, 1) === maxYear.toString().substring(0,1)
    ) {
        return `
             '${minYear.toString()[2]}${minYear.toString()[3]} - '${maxYear.toString()[2]}${maxYear.toString()[3]}
        `;
    }

    return `${minYear}-${maxYear}`;
};

class Main extends React.Component {
    state = {
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=651925d45022d1ae658063b443c99784&language=en-US`,
        moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        genre: null,
        genres: [],
        year: {
            label: "year",
            min: 1970,
            max: 2018,
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

    componentDidMount() {
        console.log(moviesLocation(this.state));
    }

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
    };

    setGenres = genres => {
        this.setState({genres});
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

    getDefaultURL = () => {
      const {genres, year, rating, runtime } = this.state;
      const selectedGenre = genres.find( genre => genre.name === DEFAULT_GENRE);
      const genreId = selectedGenre.id;

      return `https://api.themoviedb.org/3/discover/movie?` +
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
    };

    generateUrl = () => {
        const {genres, year, rating, runtime } = this.state;
        const selectedGenre = genres.find( genre => genre.name === (this.state.genre || 'Action'));
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

        // const moviesUrl = moviesLocation(this.state);

        this.setState({ moviesUrl });
    };

    onSearchButtonClick = () => {
        this.toggleModal();
        this.generateUrl();
    };

    resetFilter = () => {
        this.setState({moviesUrl: moviesLocation(this.state)});
    };

    render() {
        const { hasError, isFetching, isOpen } = this.state;
        
        if (hasError) {
            return <ErrorPage />;
        }
        
        const { genre, runtime, rating } = this.state;
        const defaults = hasDefaultPreferences(this.state);
        const tabName =  genre || TAB_DEFAULT_NAME;
        return (
            <div className="main">
                <Modal 
                  classNames={{modal: "modal-custom"}}
                  open={isOpen}
                  onClose={this.onCloseModal}
                  showCloseIcon={false}
                  little>
                    {!isFetching &&
                        <Navigation
                            onChange={this.onChange}
                            onGenreChange={this.onGenreChange}
                            onModalClose={this.onCloseModal}
                            setGenres={this.setGenres}
                            onSearchButtonClick={this.onSearchButtonClick}
                            onClose={this.toggleModal}
                            {...this.state}
                        />
                    }
                </Modal>
                { isFetching && !this.state.open && <Loader active={isFetching} />}
                {
                    <div>
                        <Menu tabular attached="top">
                            <Menu.Item
                                active
                                color={tabName === TAB_DEFAULT_NAME ? 'inherit' : 'blue'}
                                name={tabName}
                            />
                        </Menu>
                        <Segment attached="bottom">
                                <Movies genre={this.state.genre} url={this.state.moviesUrl} onClick={this.toggleModal}/>
                        </Segment>
                    </div>
                }
            </div>
        )
    }
}

export default Main;