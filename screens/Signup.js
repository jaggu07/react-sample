import React, { Component } from 'react';
import { TextInput, View , Button, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Form, Input, InputGroup, ListItem, Text, Radio, Right, Left } from 'native-base';
import HeaderComponent from '../components/headerComponent';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      email:'',
      password:'',
      role: 'Employer',
      errMsg:''
    };
  }
  handleButtonPress() {
    const { navigate } = this.props.navigation;
    params = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }
    console.log(JSON.stringify(params))
    if(this.state.firstName.trim()==""){
      this.errFunc('Firstname')
    }else if(this.state.lastName.trim()==""){
      this.errFunc('Lastname')
    }else if(this.state.email.trim()==""){
      this.errFunc('E-mail')
    }else if(this.state.password.trim()==""){
      this.errFunc('Password')
    }else{
      //alert("fill all")
      navigate('UpdateProfile',{'params':params})
    }
   
  }
  errFunc (field){
    this.setState({errMsg:field+' is required'})
      setTimeout(() => {
        this.setState({
          errMsg: ''
      })
    }, 2000);
  }
  radioSelected(arg) {
    this.setState({role : arg});
  }
  render() {
    return (
      <View >
      <HeaderComponent title={ 'signup' } back={'arrow-back'} navigationData={this.props.navigation} />
      <KeyboardAvoidingView>
      <ScrollView style={styles.container}>
        <Form style={{marginBottom:15}}>
          <InputGroup borderType="underline">
            <Icon name='ios-person' type="ionicon" style={{color:'#384850'}}/>
            <Input
              type="text"
              placeholder="First Name"
              style={styles.textBox}
              onChangeText={(firstName) => this.setState({firstName})}
              value={this.state.firstName}
              onSubmitEditing = {(event)=> this.refs.lastName._root.focus()}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-person' type="ionicon" style={{color:'#384850'}}/>
            <Input
              type="text"
              placeholder="Last Name"
              style={styles.textBox}
              onChangeText={(lastName) => this.setState({lastName})}
              value={this.state.lastName}
              ref = "lastName"
              onSubmitEditing = {(event)=> this.refs.email._root.focus()}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-mail' type="ionicon" style={{color:'#384850'}}/>
            <Input
              type="email"
              placeholder="Email"
              style={styles.textBox}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              ref = "email"
              onSubmitEditing = {(event)=> this.refs.password._root.focus()}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-lock' type="ionicon" style={{color:'#384850'}}/>
            <Input
              type="password"
              secureTextEntry
              placeholder="Password"
              style={styles.textBox}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              ref = "password"
              onSubmitEditing = {(event)=> this.handleButtonPress()}
            />
          </InputGroup>
          <ListItem onPress={()=> this.radioSelected('Employer')} style={{marginLeft:0,height: 60, }}>
          <Icon name='torso-business' type="foundation" style={{color:'#384850'}}/>
            <Left>
              <Text style={{marginLeft:15}}>Employer</Text>
            </Left>
            <Right>
              <Radio selected={this.state.role == 'Employer'} />
            </Right>
          </ListItem>
          <ListItem onPress={()=> this.radioSelected('Employee')} style={{marginLeft:0,height: 60, }}>
          <Icon name='graduation-cap' type="font-awesome"/>
            <Left>
              <Text style={{marginLeft:10}}>Employee</Text>
            </Left>
            <Right>
              <Radio selected={this.state.role == 'Employee'} />
            </Right>
          </ListItem>
        </Form>       
        <Text>{this.state.errMsg}</Text> 
        <Button
          style={{backgroundColor: "rgba(92, 99,216, 1)",
          width: 300,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
        }}
          title="SIGN UP"
          onPress={() =>
            this.handleButtonPress()
          }
        />
        </ScrollView>
        </KeyboardAvoidingView> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    margin: '10%',
    marginBottom:0
  },
  textBox:{
	height: 40, 
	width:300,
    borderColor: 'gray', 
    margin:'3%'
  },
  SignupButton:{
    borderColor:'blue',
    height: 40, 
	width:300,
  },

});
