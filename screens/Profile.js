import React, { Component } from 'react';
import { View, StyleSheet, Button } from "react-native";
  
class Profile extends Component {
	static navigationOptions = {
			title: 'Profile',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Button
				style={styles.jobButton}
				title="Register"
				onPress={() =>
					navigate('tabNav')
				}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		margin:'10%',
		
	},
	
	jobButton:{
		justifyContent:'center',
		borderColor:'red'
	
	}
})

export default Profile;