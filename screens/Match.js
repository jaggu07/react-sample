import React, { Component } from "react";
import { 
    View,
    Button,
    StyleSheet,
    Text
} from "react-native";
import Details from './Details';
import {
    createStackNavigator,
  } from 'react-navigation'; 

class MatchScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
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