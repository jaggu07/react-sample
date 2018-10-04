import React, { Component } from "react";
import { 
    View,
    Button,
    StyleSheet
} from "react-native";
import {
    createStackNavigator,
} from 'react-navigation';
import NotificationDetails from './NotificationDetails';

class NotificationScreen extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title="Go to detailed notification"
                    onPress={() =>
                    navigate('NotificationDetails')
                    }
                />
            </View>
        );
    }
}

const Notification = createStackNavigator({
    NotificationScreen: NotificationScreen,
    NotificationDetails: { screen: NotificationDetails },
  });

  
export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});