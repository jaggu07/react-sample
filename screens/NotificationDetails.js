import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class NotificationDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NotificationDetails</Text>
            </View>
        );
    }
}
export default NotificationDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});