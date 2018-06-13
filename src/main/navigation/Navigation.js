import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from './Slider';
import SearchButton from './SearchButton'

class Navigation extends React.Component {
    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.props.setGenres(data.genres))
            .catch(error => console.log(error));
    }

    render() {
        const { genre, genres, onGenreChange, onChange, year, rating, runtime, onClose, onSearchButtonClick } = this.props;
        return (
            <section className="navigation">
                <Selection
                    genre={genre}
                    genres={genres}
                    onGenreChange={onGenreChange}
                />

                <Slider label="Select Year:" data={year} onChange={onChange} />
                <Slider label="Select rating:" data={rating} onChange={onChange} />
                <Slider label="Select movie length:" data={runtime} onChange={onChange} />

                <SearchButton onClick={onSearchButtonClick}/>
            </section>
        )
    }
}

export default Navigation;
