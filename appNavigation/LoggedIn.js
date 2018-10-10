import React, { Component } from 'react';
import { createBottomTabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";

import Match from '../screens/Match';
import ViewProfile from '../screens/ViewProfile';
import Notification from '../screens/Notification';

const LoggedInNavigator = createBottomTabNavigator({
    profileTab: {
        screen: ViewProfile,
        navigationOptions: {
            tabBarLabel:"Profile",
            tabBarIcon: ({ tintColor }) => <Icon name={"user-circle-o"} size={20} color={tintColor} />
        }
    },
    matchTab: {
        screen: Match,
        navigationOptions: {
            tabBarLabel:"Match",
            tabBarIcon: ({ tintColor }) => <Icon name={"window-restore"} size={20} color={tintColor} />
        }
    },
    notificationTab: {
        screen: Notification,
        navigationOptions: {
            tabBarLabel:"Notification",
            tabBarIcon: ({ tintColor }) => <Icon name={"bell-o"} size={20} color={tintColor} />
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

export default LoggedInNavigator