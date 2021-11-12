/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';

import {App} from './app/index';
import {store} from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};

export default Root;
