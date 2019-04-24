import React from "react";
import { KEY_CODES, MOVIE_GENRES } from '../../constants';
import Selection from "./Selection";
import Slider from './Slider';
import SearchButton from './SearchButton'
import "./Navigation.css";

class Navigation extends React.Component {
    focusSearch(e) {
        const { ENTER } = KEY_CODES;

        // Focus control using action keys
        if ([ENTER].includes(e.keyCode)) {
            e.preventDefault();
            selectGenre.click();
        }
    }

    componentDidMount() {
        const selectGenre = document.getElementById("custom-search-button");
        selectGenre.focus();

        // listener for Enter/Space key
        document.addEventListener('keyup', this.focusSearch, false);

        // fetch(this.props.url)
        //     .then(response => response.json())
        //     .then(data => this.props.setGenres(data.genres))
        //     .catch(error => console.log(error));
    }

    componentWillUnmount() {
        // remove the listener added for select-genre
        document.removeEventListener('keyup', this.focusSearch, false);
    }

    render() {
        const { genre, onModalClose, onGenreChange, onChange, year, rating, runtime, onSearchButtonClick } = this.props;
        return (
            <section className="navigation" search role="search">
                <Selection
                    genre={genre}
                    genres={MOVIE_GENRES}
                    onGenreChange={onGenreChange}
                />

                <Slider sliderId="select-year" label="Select Year:" data={year} onChange={onChange} />
                <Slider sliderId="select-rating" label="Select rating:" data={rating} onChange={onChange} />
                <Slider sliderId="select-len" label="Select movie length:" data={runtime} onChange={onChange} />
                <SearchButton onClick={onSearchButtonClick} onClose={onModalClose}/>
            </section>
        )
    }
}

export default Navigation;

