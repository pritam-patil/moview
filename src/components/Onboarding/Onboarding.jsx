import React from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../../constants";
import { Button, Header } from "semantic-ui-react";
import { ROUTES } from "../../constants";
import LocalStorageManager from "../../store/localStorage";
import "./onboarding.css";

const { HOME } = ROUTES;

const Onboarding = () => {
  const preferences = new LocalStorageManager("preferences");
  const [genres, setGenres] = React.useState([]);
  const [saveGenres, setSaveGenres] = React.useState([]);
  const [selectedGenres, setSelectedGenres] = React.useState(
    preferences.get() || []
  );
  const allGenres = new LocalStorageManager("allGenres");
  const navigate = useNavigate();
  const hasGenre = (genreId) => {
    if (selectedGenres.length !== 0) {
      return selectedGenres.includes(genreId);
    }
  };

  React.useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
      options
    )
      .then((response) => {
        return response.json().then((res) => {
          const results = res.genres;
          setGenres(results);
          allGenres.set(results);
        });
      })
      .catch(() => {
        console.log(`>> Error fetching genres`);
      });
  }, []);

  const onGenreClick = (id) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres((prevGenres) =>
        prevGenres.filter((genreId) => genreId !== id)
      );

      return true;
    }

    setSelectedGenres((prevGenres) => [...prevGenres, id]);
  };

  const onSaveGenres = () => {
    preferences.set(selectedGenres);
    navigate(HOME);
  };

  const onSkip = () => {
    navigate(HOME);
  };

  return (
    <section className="wrapper">
      <Header as="h3" className="onboarding-header">
        Select your favorite genres
      </Header>
      <section className="genres">
        {genres.map((genre) => {
          return (
            <Button
              secondary={hasGenre(genre.id)}
              key={genre.id}
              onClick={onGenreClick.bind(this, genre.id)}
            >
              {genre.name}
            </Button>
          );
        })}
      </section>
      <div className="button-container">
        <Button
          disabled={selectedGenres.length === 0}
          positive
          onClick={onSaveGenres}
        >
          Next
        </Button>
        <Button basic onClick={onSkip}>
          Skip
        </Button>
      </div>
    </section>
  );
};

export default Onboarding;
