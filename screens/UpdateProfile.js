import React, { Component } from "react";
import { 	View,	Text,	StyleSheet} from "react-native";
import FormProfile from '../components/formProfile';
import HeaderComponent from'../components/headerComponent';

class UpdateProfile extends Component {
	render() {        
		return (
			<View style={styles.container}>
				<HeaderComponent title={ 'Update Profile' } back={'arrow-back'} navigationData={this.props.navigation}/>
				<FormProfile />
			</View>
		);
	}
}

export default UpdateProfile;

const styles = StyleSheet.create({
	container: {  
		flex:1,
		
	}
});