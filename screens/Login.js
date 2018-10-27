import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image, ImageBackground, Dimensions, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';
import { login } from '../api/auth';
import * as firebase from 'firebase';


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
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then( (user) => {
      navigate('matchTab');
      //console.log(user)
    },(error) => {
      alert(error.message)
    })
   // navigate('matchTab');
   console.log(JSON.stringify(params))
  
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView >
        <ScrollView>
        <ImageBackground
  

            style={styles.imageLogin}
          source={{uri: 'http://www.intrawallpaper.com/static/images/hd-dark-wallpapers-4_CWDKYIC.jpg'}}
        >    
    
      <View  style={styles.container2}>
        <Form>
          <InputGroup borderType="underline">
            <Icon name='ios-mail' style={{color:'white'}}/>
            <Input
              type="email"
              placeholder="Email"
              style={styles.textBox}
              placeholderTextColor="white"
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              onSubmitEditing={(event) => { 
              this.refs.SecondInput._root.focus();
              }}
            />
          </InputGroup>
          <InputGroup borderType="underline" style={{marginBottom:10}}>  
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
        </ImageBackground>
        </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    
  },

  container2:{
    flex:1,
    margin:'10%',
    justifyContent:'center'
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
    color: Platform.OS=='ios'?'black':'black'
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