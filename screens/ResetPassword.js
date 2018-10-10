import React, { Component } from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';
import HeaderComponent from '../components/headerComponent';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          password:'',
          confirmPassword:''
        };
      }
      handleButtonPress() {
        const { navigate } = this.props.navigation;
        params = {
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        }
        navigate('Login')
       console.log(JSON.stringify(params))
      }
    render() {
        return (
            <View >
            <HeaderComponent title={ 'Reset Password' } back={'arrow-back'} navigationData={this.props.navigation} />
            <View style={styles.container}>
            <Form style={{marginBottom:15}}>
            <InputGroup borderType="underline">
                <Icon name='lock' style={{color:'#384850'}}/>
                <Input
                type="password"
                placeholder="Password"
                secureTextEntry
                style={styles.textBox}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                onSubmitEditing = {(event)=> this.refs.confirmPassword._root.focus()}
                />
            </InputGroup>
            <InputGroup borderType="underline">
                <Icon name='lock' style={{color:'#384850'}}/>
                <Input
                type="password"
                placeholder="Confirm Password"
                ref="confirmPassword"
                secureTextEntry
                style={styles.textBox}
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                value={this.state.confirmPassword}
                onSubmitEditing = {(event)=> this.handleButtonPress()}
                />
            </InputGroup>
            </Form>
            <Button
                style={styles.loginButton}
                title="Next"
                onPress={() =>
                   this.handleButtonPress()
                }
                />
        </View>
        </View>
        );
    }
}
export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        
        margin:"10%",
        justifyContent: 'center'
    },
    textBox:{
        height: 40, 
        width:300,
        borderColor: 'gray', 
        margin:'3%'
      },
});