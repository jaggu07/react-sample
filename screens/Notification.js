import React, { Component } from "react";
import { 
    View,
    Button,
    StyleSheet,ScrollView

} from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
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
            <ScrollView>
                <Card>
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
                <Card>
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
                <Card>
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
                <Card>
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
                <Card>
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
  </ScrollView>
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
        justifyContent: 'center'
    },
});