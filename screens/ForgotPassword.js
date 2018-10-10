import React, { Component } from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';
import HeaderComponent from '../components/headerComponent';
 
class ForgotPassword extends Component {
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
            <View >
            <HeaderComponent title={ 'Forgot Password' } back={'arrow-back'} navigationData={this.props.navigation} />
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
            </View>
        );
    }
}
export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
       
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