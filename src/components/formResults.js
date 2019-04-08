import React from 'react';
import {Link} from 'react-router-dom';
import './formResults.css';

export class FormResults extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById('results').className = 'noDisplay';
    document.getElementById('searchInput').value = '';
  }

  render() {
    const link = 'https://image.tmdb.org/t/p/w300';
    const { results } = this.props;

    // basic UI
    return(
      <ul id="results" onClick={this.handleClick}>
        {results.map((element, index) => {
          return(
            <li key={index} onClick={this.handleClick}>
              <Link to={`/movies/${element.id}`} >
                <img src={element.poster_path === null ? 'http://via.placeholder.com/300x450' : `${link}${element.poster_path}`} alt={`${element.title} poster`} className="resultPoster" />
                <div>
                  <p>{element.title}</p>
                  <p>{element.release_date}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}
