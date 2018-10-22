import React, { Component } from "react";
import { 	View,	Text,	StyleSheet} from "react-native";
import FormProfile from '../components/formProfile';
import HeaderComponent from'../components/headerComponent';
import EmployerProfile from "../components/EmployerProfile";
class UpdateProfile extends Component {

	render() {        
		const { navigation } = this.props;
    	const navParams = navigation.getParam('params');
		if(navParams.role=='Employer'){
			return (
				<View style={styles.container}>
					<HeaderComponent title={ 'Update Profile' } back={'arrow-back'} navigationData={this.props.navigation}/>
					<EmployerProfile />
				</View>
			);
		}else{
			return (
				<View style={styles.container}>
					<HeaderComponent title={ 'Update Profile' } back={'arrow-back'} navigationData={this.props.navigation}/>
					<FormProfile />
				</View> 
			);
		}
		
	}
}

export default UpdateProfile;

const styles = StyleSheet.create({
	container: {  
		flex:1,
		
	}
});