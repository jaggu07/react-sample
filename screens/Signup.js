import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <TextInput
          placeholder="First Name"
          style={styles.textBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      <TextInput
          placeholder="Last Name"
          style={styles.textBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          placeholder="Email"
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
          style={{backgroundColor: "rgba(92, 99,216, 1)",
          width: 300,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
        }}
          title="SIGN UP"
          onPress={() =>
            navigate('EditProfile')
          }
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
