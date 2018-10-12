import React, { Component } from 'react';
import { TextInput, View , Button, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Form, Icon, Input, InputGroup } from 'native-base';
import HeaderComponent from '../components/headerComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      email:'',
      password:''
    };
  }
  handleButtonPress() {
    const { navigate } = this.props.navigation;
    params = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    navigate('UpdateProfile')
   console.log(JSON.stringify(params))
  }
  render() {
    return (
      <View >
      <HeaderComponent title={ 'signup' } back={'arrow-back'} navigationData={this.props.navigation} />
      <KeyboardAvoidingView>
      <ScrollView style={styles.container}>
        <Form style={{marginBottom:15}}>
          <InputGroup borderType="underline">
            <Icon name='ios-person' style={{color:'#384850'}}/>
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
            <Icon name='ios-person' style={{color:'#384850'}}/>
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
            <Icon name='ios-mail' style={{color:'#384850'}}/>
            <Input
              type="email"
              placeholder="Email"
              style={styles.textBox}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              ref = "email"
              onSubmitEditing = {(event)=> this.refs.password._root.focus()}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-lock' style={{color:'#384850'}}/>
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
        </Form>        
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
