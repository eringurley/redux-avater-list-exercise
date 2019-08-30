import React from 'react';
import AllCharacters from '../containers/AllCharacters';
import { Provider } from 'react-redux';
import store from '../Store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterById from '../containers/CharacterById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={AllCharacters} />
          <Route path="/characters/:_id" component={CharacterById} />
        </Provider> 
      </Switch>
    </Router>
  );
}
