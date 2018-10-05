import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class OTPScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>OTPScreen</Text>
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