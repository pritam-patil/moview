import { useState, useEffect } from "react";
import AirbrakeClient from "airbrake-js";
import { Icon, Menu, Modal, Segment, Tab, TabPane } from "semantic-ui-react";
import {
  API_KEY,
  DEFAULT_FILTERS,
  MOVIE_GENRES,
  TAB_DEFAULT_NAME,
} from "../../constants";
import Navigation from "./navigation/Navigation";
import { ErrorPage, NoConnection } from "../common";
import MovieList from "./movies/Movies";
import LocalStorageManager from "../../store/localStorage";
import "./styles.css";

const {
  MIN_YEAR,
  MAX_YEAR,
  MIN_RATING,
  MAX_RATING,
  MIN_TIME_MINS,
  MAX_TIME_MINS,
} = DEFAULT_FILTERS;

const Main = (props) => {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=651925d45022d1ae658063b443c99784&language=en-US`
  );
  const [moviesUrl, setMoviesUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`
  );
  const [genre, setGenre] = useState(null);
  const [year, setYear] = useState({
    label: "year",
    min: 1970,
    max: new Date().getFullYear(),
    step: 1,
    value: { min: MIN_YEAR, max: MAX_YEAR },
  });
  const [rating, setRating] = useState({
    label: "rating",
    min: 0,
    max: 10,
    step: 1,
    value: { min: MIN_RATING, max: MAX_RATING },
  });
  const [runtime, setRuntime] = useState({
    label: "runtime",
    min: 0,
    max: 300,
    step: 15,
    value: { min: MIN_TIME_MINS, max: MAX_TIME_MINS },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const airbrake = new AirbrakeClient({
    projectId: 219983,
    projectKey: "7881b9af5510c9794ba34bb4d525eecd",
  });

  useEffect(() => {
    const preferences = new LocalStorageManager("preferences");
    const allGenres = new LocalStorageManager("allGenres");
    const selectedTabsStore = new LocalStorageManager("selectedTabs");

    const selectedTabs =
      (preferences.get() &&
        preferences.get().map((tab) => {
          return allGenres.get().find((genre) => genre.id === tab);
        })) ||
      [];

    setTabs(selectedTabs);

    if (!selectedTabsStore) {
      onTabChange(null, { activeIndex: 0 });
    } else {
      // restore last active tab
      const data = selectedTabsStore && selectedTabsStore.get();
      setSelectedTab((data && data.selectedTab) || 0);
    }
  }, []);

  const onGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const onTabChange = (e, { activeIndex }) => {
    const selectedTabsStore = new LocalStorageManager("selectedTabs");

    setSelectedTab(activeIndex);
    selectedTabsStore.set({
      selectedTab: activeIndex,
      lastUpdated: new Date().toISOString(),
    });
  };

  const onChange = (data) => {
    // TODO: check this
    // this.setState({
    //   [data.type]: {
    //     ...this.state[data.type],
    //     value: data.value,
    //   },
    // });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const generateUrl = () => {
    const selectedGenre = MOVIE_GENRES.find(
      (genre) => genre.name === (genre || "Action")
    );
    const genreId = selectedGenre.id;

    const moviesUrl =
      `https://api.themoviedb.org/3/discover/movie?` +
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

    setMoviesUrl(moviesUrl);
  };

  const onSearchButtonClick = () => {
    toggleModal();
    generateUrl();
  };


  const { offline } = props;
  const tabName = genre || TAB_DEFAULT_NAME;

  if (hasError) {
    return <ErrorPage />;
  }

  if (tabs.length) {
    const panes = tabs.map((tab) => {
      return {
        menuItem: tab.name,
        render: () => {
          const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${tab.id}&api_key=${API_KEY}`;
          return (
            <TabPane>
              <MovieList url={url} />
            </TabPane>
          );
        },
      };
    });
    return (
      <Tab
        className="sticky-menu"
        panes={panes}
        activeIndex={selectedTab}
        onTabChange={onTabChange}
      />
    );
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
        onClick={toggleModal}
        className="filter"
      />
      <Modal
        classNames={{ modal: "modal-custom" }}
        open={isOpen}
        onClose={onCloseModal}
        size="mini"
      >
        <Navigation
          onChange={onChange}
          onGenreChange={onGenreChange}
          onModalClose={onCloseModal}
          onSearchButtonClick={onSearchButtonClick}
          onClose={toggleModal}
          genre={genre}
          year={year}
          rating={rating}
          runtime={runtime}
        />
      </Modal>
      {offline ? (
        <NoConnection />
      ) : (
        <div
          onOnline={(e) => updateConnection(false)}
          onOffline={(e) => updateConnection(true)}
        >
          <Menu tabular attached="top" className="sticky-menu">
            <Menu.Item
              active
              color={tabName === TAB_DEFAULT_NAME ? "inherit" : "blue"}
              name={tabName}
            />
          </Menu>
          <Segment attached="bottom">
            <MovieList
              genre={genre}
              url={moviesUrl}
              onClick={toggleModal}
            />
          </Segment>
        </div>
      )}
    </div>
  );
}


export default Main;
