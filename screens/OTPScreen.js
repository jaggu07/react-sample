import React, { Component } from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';
import HeaderComponent from '../components/headerComponent';

class OTPScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          otp:''
        };
      }
      handleButtonPress() {
        const { navigate } = this.props.navigation;
        params = {
          email: this.state.otp
        }
        navigate('ResetPassword')
       console.log(JSON.stringify(params))
      }
    render() {
        return (
            <View >
            <HeaderComponent title={ 'OTP' } back={'arrow-back'} navigationData={this.props.navigation} />
            <View style={styles.container}>
                <Form style={{marginBottom:15}}>
                <InputGroup borderType="underline">
                    <Icon name='key' style={{color:'#384850'}}/>
                    <Input
                    type="text"
                    placeholder="OTP"
                    style={styles.textBox}
                    onChangeText={(otp) => this.setState({otp})}
                    value={this.state.otp}
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
export default OTPScreen;

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