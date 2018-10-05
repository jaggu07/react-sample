import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''};
  }
  handleButtonPress() {
    const { navigate } = this.props.navigation;
    params = {
      email: this.state.email,
      password: this.state.password
    }
   console.log(JSON.stringify(params))
   navigate('tabNav')
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Form style={{marginBottom:15}}>
          <InputGroup borderType="underline">
            <Icon name='ios-mail' style={{color:'#384850'}}/>
            <Input
              type="email"
              placeholder="Email"
              style={styles.textBox}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              onSubmitEditing={(event) => { 
              this.refs.SecondInput._root.focus();
              }}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-lock' style={{color:'#384850'}}/>
            <Input
              placeholder="Password"
              secureTextEntry
              style={styles.textBox}
              ref='SecondInput'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              onSubmitEditing={(event) => { 
              this.handleButtonPress()
              }}
            />
          </InputGroup>
          <Button
          style={styles.loginButton}
          title="Login"
          icon={{name: 'check'}}
          ref='SecondInput1'
          onPress={() => { this.handleButtonPress() }}
          />
        </Form>
        <Text style={styles.forgetbutton}
          onPress={() =>
            navigate('ForgotPassword')
          }>Forget Password
        </Text>
        <Text style={styles.Signup}>Don't have an account? 
          <Text style={{color: 'red'}}
            onPress={() =>
            navigate('Signup')
          }> Sign up
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
  },
  Signup:{
    textAlign: 'center',
    margin:'3%',
  },
  loginButton:{
    borderColor:'blue'
  },
  forgetbutton:{
    color:'blue',
    textAlign: 'right',
    margin:'5%',
  }
})

export default Login;