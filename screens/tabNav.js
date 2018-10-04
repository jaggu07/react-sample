import React, { Component } from 'react';
import { createBottomTabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import Match from './Match';
import ViewProfile from './ViewProfile';
import Notification from './Notification';


const tabNav = createBottomTabNavigator({
    TabItem1: {
        screen: ViewProfile,
        navigationOptions: {
            tabBarLabel:"Tab 1",
            tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={30} color={tintColor} />
        }
    },
    TabItem2: {
        screen: Match,
        navigationOptions: {
            tabBarLabel:"Tab 2",
            tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={30} color={tintColor} />
        }
    },
    TabItem3: {
        screen: Notification,
        navigationOptions: {
            tabBarLabel:"Tab 3",
            tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={30} color={tintColor} />
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: '#222',
            
            
        },
        order:[ 'TabItem1', 'TabItem2', 'TabItem3' ],
        animationEnabled: 'True',
        initialRouteName: 'TabItem2'
});

export default tabNav;