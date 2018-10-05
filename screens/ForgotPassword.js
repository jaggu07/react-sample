import React, { Component } from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          email:''
        };
      }
      handleButtonPress() {
        const { navigate } = this.props.navigation;
        params = {
          email: this.state.email
        }
        navigate('OTPScreen')
       console.log(JSON.stringify(params))
      }
    render() {
        return (
            <View style={styles.container}>
                <Form style={{marginBottom:15}}>
                <InputGroup borderType="underline">
                    <Icon name='ios-mail' style={{color:'#384850'}}/>
                    <Input
                    type="text"
                    placeholder="Email"
                    style={styles.textBox}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
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
        );
    }
}
export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin:'10%'
    },
    textBox:{
        height: 40, 
        width:300,
        borderColor: 'gray', 
        margin:'3%'
      },
});