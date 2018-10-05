import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Profile from './screens/Profile';
import tabNav from './screens/tabNav';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import OTPScreen from './screens/OTPScreen';
import Signup from './screens/Signup';

const Route = createStackNavigator({
  Login: { screen: Login },
  Profile: { screen: Profile },
  ForgotPassword: { screen: ForgotPassword},
  ResetPassword: { screen: ResetPassword},
  OTPScreen:{ screen: OTPScreen},
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
