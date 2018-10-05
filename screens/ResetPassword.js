import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ResetPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ResetPassword</Text>
            </View>
        );
    }
}
export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});