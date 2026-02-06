import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import { ITEMS_PER_ROW } from "../../constants";
import MovieListItem from "./movie-list-item";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(">> error : ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const ErrorFallback = () => <div> Something went wrong </div>;

const MoviesGrid = ({ movies }) => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Card.Group itemsPerRow={ITEMS_PER_ROW} doubling>
        {!!movies &&
          movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
      </Card.Group>
    </ErrorBoundary>
  );
};

MoviesGrid.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MoviesGrid;
