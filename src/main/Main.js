import React from "react";
import Modal from 'react-responsive-modal';
import CircleSpinner from '../components/CircleSpinner';
import "./Main.css"
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
    state = {
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=651925d45022d1ae658063b443c99784&language=en-US`,
        moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        genre: "Comedy",
        genres: [],
        year: {
            label: "year",
            min: 1970,
            max: 2018,
            step: 1,
            value: { min: 2000, max: 2018 }
        },
        rating: {
            label: "rating",
            min: 0,
            max: 10,
            step: 1,
            value: { min: 8, max: 10 }
        },
        runtime: {
            label: "runtime",
            min: 0,
            max: 300,
            step: 15,
            value: { min: 60, max: 120 }
        },
        isOpen: false
    };

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

    generateUrl = () => {
        const {genres, year, rating, runtime } = this.state;
        const selectedGenre = genres.find( genre => genre.name === this.state.genre);
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
        const { isFetching, isOpen } = this.state;

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
                { isFetching && !this.state.open && <CircleSpinner isFetching={isFetching} />}
                <Movies url={this.state.moviesUrl} onClick={this.toggleModal}/>
            </div>
        )
    }
}

export default Main;