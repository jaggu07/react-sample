import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Animated, ScrollView, KeyboardAvoidingView } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';
import HeaderComponent from '../components/headerComponent';
import FormProfile from '../components/formProfile';

class EditProfile extends Component {
	constructor(props){
		super(props); 
	}
	static navigationOptions = {
    header: PlayerScreen = ({ navigation }) => (<HeaderComponent title={ 'Edit Profile' } back={'arrow-back'} navigationData={navigation}/>)
  };
	render() {
		return (
      <View style={styles.container}>
        <FormProfile />
      </View>
		);
	}
}
export default EditProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});