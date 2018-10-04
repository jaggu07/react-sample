import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import {
    createStackNavigator,
  } from 'react-navigation';
import EditProfile from'./EditProfile';

class ViewProfileScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title="Edit Profile"
                    onPress={() =>
                    navigate('EditProfile')
                    }
                />
            </View>
        );
    }
}

const ViewProfile = createStackNavigator({
    ViewProfileScreen: ViewProfileScreen,
    EditProfile: { screen: EditProfile },
});

export default ViewProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});