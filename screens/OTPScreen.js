import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class OTPScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>OTP</Text>
                <Button
                    style={styles.loginButton}
                    title="Next"
                    onPress={() =>
                        navigate('ResetPassword')
                    }
                    />
            </View>
        );
    }
}
export default OTPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});