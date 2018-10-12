import React, { Component } from "react";
import { View, Button,StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { createStackNavigator,} from 'react-navigation';
import NotificationDetails from './NotificationDetails';
import HeaderComponent from '../components/headerComponent';

class NotificationScreen extends Component {
    static navigationOptions = {
        header: <HeaderComponent title={ 'Notification' } back={'arrow-back'} navigationData={'match'} />
    };
    constructor(props){
        super(props);
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <ScrollView>

            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Card pointerEvents="none">
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
            </TouchableOpacity>
               
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Card pointerEvents="none">
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Card pointerEvents="none">
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Card pointerEvents="none">
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Card pointerEvents="none">
                    <CardTitle subtitle="Number 6"/>
                    <CardContent text="Clifton, Western Cape" />
                </Card>
            </TouchableOpacity>

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