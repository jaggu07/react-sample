import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image, Dimensions } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';
import { login } from '../api/auth';


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.state = { 
      email: '',
      password: ''};
  }
  async handleButtonPress() {
    const { navigate } = this.props.navigation;
    params = {
      email: this.state.email,
      password: this.state.password
    }
    await login();
    navigate('matchTab');
   console.log(JSON.stringify(params))
  
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View  style={styles.container1}>
        <Image
            style={styles.imageLogin}
          source={{uri: 'http://www.intrawallpaper.com/static/images/hd-dark-wallpapers-4_CWDKYIC.jpg'}}
        />    
      </View>
      <View  style={styles.container2}>
        <Form>
          <InputGroup borderType="underline">
            <Icon name='ios-mail' style={{color:'white'}}/>
            <Input
              type="email"
              placeholder="Email"
              style={styles.textBox}
              placeholderTextColor="white"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              onSubmitEditing={(event) => { 
              this.refs.SecondInput._root.focus();
              }}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-lock' style={{color:'white'}}/>
            <Input
              placeholder="Password"
              secureTextEntry
              style={styles.textBox}
              placeholderTextColor="white"
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  container1:{
    flex:2,
  },
  container2:{
    flex:2,
    margin:'10%'
  },
  textBox:{
    height: 40, 
    width:300,
    borderColor: 'white', 
    marginTop:'5%',
    marginBottom:'5%',
    color:'white'
  },
  Signup:{
    textAlign: 'center',
    margin:'3%',
    color:'white'
  },
  loginButton:{
    borderColor:'blue',
    backgroundColor:'white'
  },                 
  forgetbutton:{
    color:'blue',
    textAlign: 'right',
    margin:'5%',
  },
  imageLogin:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,

  }
})

export default Login;