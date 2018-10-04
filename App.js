import React, { Component } from 'react';

import {
  createStackNavigator,
} from 'react-navigation';

import Login from './screens/Login';
import Profile from './screens/Profile';

const Route = createStackNavigator({
  Login: { screen: Login },
  Profile: { screen: Profile },
});

export default class App extends Component {
  render() {
    return (
      <Route />
       
    );
  }
}
