import React from 'react';
import { Form as SForm, Input, } from 'semantic-ui-react';
import {FormResults} from './formResults';
import './form.css';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp = (e) => {
    if (!e.target.value) {
      document.getElementById('results').className = 'noDisplay';
    } else {
      document.getElementById('results').className = 'formResults';
    }

    const val = e.target.value;

    const key = '651925d45022d1ae658063b443c99784';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log('Fetch Error :-S', err);
      })
  }

  handleKeyUpOrig() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }

    const key = '651925d45022d1ae658063b443c99784';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log('Fetch Error :-S', err);
      })
  }

  render() {

    return (
      <SForm onSubmit={this.handleSubmit} id="form">
        <SForm.Field className="searchField">
          <Input
            id="searchInput"
            className="searchIcon"
            placeholder="Search"
            icon="search"
            onChange={this.handleKeyUp}
            style={{width: '100% !important'}}
          />
          </SForm.Field>
        <SForm.Field>
          <FormResults results={this.state.results} />
        </SForm.Field>
      </SForm>
    );

    // return(
    //   <form onSubmit={this.handleSubmit} id="form">
    //       <img src={search} alt="search icon" className="searchIcon" />
    //       <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
    //       <FormResults results={this.state.results} />
    //   </form>
    // );
  }
}
