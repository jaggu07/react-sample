import { createStackNavigator } from 'react-navigation'

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import OTPScreen from '../screens/OTPScreen';
import Signup from '../screens/Signup';

const LoggedOutNavigator = createStackNavigator({
  Login: { screen: Login },
  ForgotPassword: { screen: ForgotPassword},
  ResetPassword: { screen: ResetPassword},
  OTPScreen:{ screen: OTPScreen},
  Signup: { screen: Signup}
},
{
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
  initialRouteName:'Login'
 });



export default LoggedOutNavigator