import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class ForgetPassword extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>ForgetPassword</Text>
                <Button
                    style={styles.loginButton}
                    title="Next"
                    onPress={() =>
                        navigate('OTPScreen')
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});