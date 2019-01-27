import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Grid, Label } from 'semantic-ui-react';

const Test = () => (
  <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
        <Label>24</Label>
      </Grid.Column>
      <Grid.Column>
        <Label>25</Label>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
