import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Profile from './screens/Profile';
import tabNav from './screens/tabNav';

const Route = createStackNavigator({
  Login: { screen: Login },
  Profile: { screen: Profile },
  tabNav: { screen: tabNav}
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
