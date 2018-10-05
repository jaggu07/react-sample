import React, { Component } from 'react';
import { createBottomTabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import Match from './Match';
import ViewProfile from './ViewProfile';
import Notification from './Notification';


const tabNav = createBottomTabNavigator({
    profileTab: {
        screen: ViewProfile,
        navigationOptions: {
            tabBarLabel:"Profile",
            tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={30} color={tintColor} />
        }
    },
    matchTab: {
        screen: Match,
        navigationOptions: {
            tabBarLabel:"Match",
            tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={30} color={tintColor} />
        }
    },
    notificationTab: {
        screen: Notification,
        navigationOptions: {
            tabBarLabel:"Notification",
            tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={30} color={tintColor} />
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: '#222',
            
            
        },
        order:[ 'profileTab', 'matchTab', 'notificationTab' ],
        animationEnabled: 'True',
        initialRouteName: 'matchTab'
});

export default tabNav;