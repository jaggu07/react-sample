import React, { Component } from 'react';

import { 
  View,
  TextInput,
  StyleSheet,
  Button
} from "react-native";

  class Login extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
    }
    static navigationOptions = {
      title: 'Login',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <TextInput
            placeholder="Username"
            style={styles.textBox}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TextInput
            placeholder="Password"
            style={styles.textBox}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            style={styles.loginButton}
            title="Login"
            onPress={() =>
              navigate('Profile', { name: 'Jane' })
            }
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      margin:'10%'
    },
    textBox:{
      height: 40, 
      borderColor: 'gray', 
      borderBottomWidth: 1,
      margin:'5%'
    },
    loginButton:{
      borderColor:'blue'
    }
  })

  export default Login;