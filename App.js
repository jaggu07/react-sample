import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Profile from './screens/Profile';
import tabNav from './screens/tabNav';
import Signup from './screens/Signup';

const Route = createStackNavigator({
  Login: { screen: Login },
  Profile: { screen: Profile },
  tabNav: { screen: tabNav},
  Signup: { screen: Signup}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

export default class App extends Component {
  render() {
    return (
      <Route />
    );
  }
}
