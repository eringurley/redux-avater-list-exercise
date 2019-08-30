import React from 'react';
import AllCharacters from '../containers/AllCharacters';
import { Provider } from 'react-redux';
import store from '../Store';

export default function App() {
  return (
    <Provider store={store}>
      <AllCharacters />
    </Provider> 
  );
}
