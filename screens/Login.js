import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, Platform, StatusBar, Text } from "react-native";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''};
  }
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <FormLabel>Name</FormLabel>
        <FormInput onChangeText={someFunction}/>
        <FormValidationMessage>Error message</FormValidationMessage> */}
        <TextInput
          placeholder="Username"
          style={styles.textBox}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.textBox}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          style={styles.loginButton}
          title="Login"
          onPress={() =>
            alert('Details',this.state)
          }
        />
        <Text style={styles.forgetbutton}
          onPress={() =>
            navigate('ForgotPassword', { name: 'Jane' })
          }>Forget Password
      </Text>
      <Text style={styles.Signup}
         >Don't have an account? <Text style={{color: 'red'}}
         onPress={() =>
          navigate('Signup')

        }>
          Sign up
        </Text>
      </Text>
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
    width:300,
    borderColor: 'gray', 
    marginTop:'5%',
    marginBottom:'5%',
    borderBottomWidth: Platform.OS === 'ios' ? 1: 0

  },
  loginButton:{
    borderColor:'blue'
  },                 
  forgetbutton:{
    color:'blue',
    textAlign: 'right',
    margin:'5%',
  },
  Signup:{
    textAlign: 'center',
    margin:'3%',
  }
})

export default Login;