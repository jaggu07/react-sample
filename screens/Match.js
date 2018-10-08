import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Details from './Details';
import {
    createStackNavigator,
  } from 'react-navigation'; 
  import SwipeCards from './SwipeCards.js'  

class MatchScreen extends Component {
    static navigationOptions = {
        title: 'Match',
      };
    constructor(props){
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <SwipeCards style={{flex: 1}} 
             onPress={() =>
                navigate('Details')
                }
            />
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                    navigate('Details', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}

 
const Match = createStackNavigator({
    MatchScreen: MatchScreen,
    Details: { screen: Details },
});

export default Match;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    }
});