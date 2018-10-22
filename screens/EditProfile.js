import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HeaderComponent from '../components/headerComponent';
import FormProfile from '../components/formProfile';
import EmployerProfile from '../components/EmployerProfile';

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
		justifyContent: 'center',
		zIndex:0
	}
});