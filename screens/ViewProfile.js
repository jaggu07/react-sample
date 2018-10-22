import React, { Component } from "react";
import {  View, Text, StyleSheet, Button, Image, Modal, TouchableOpacity } from "react-native";
import { createStackNavigator } from 'react-navigation';
import EditProfile from'./EditProfile';
import { Picker, ListItem, Left, Right, List } from "native-base";
import { logout } from '../api/auth';
import { Icon, Header } from 'react-native-elements';

import HeaderComponent from '../components/headerComponent';

class ViewProfileScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedSalary: "key1",
			selectedLocation: "key1",
			modalVisible: false,
	};
	this.onLogout = this.onLogout.bind(this);
	}
	setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

	async onLogout() {
		await logout();
		this.props.navigation.navigate('Login');
	  }

	onValueChangeSalary(value: string) {
    this.setState({
      selectedSalary: value
    });
	}
	onValueChangeLocation(value: string) {
    this.setState({
      selectedLocation: value
    });
  }
	static navigationOptions = {
			header: <HeaderComponent title={ 'Profile' } back={'arrow-back'} navigationData={'match'} />
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.proContainer}>
					<Image
						style={styles.proImage}
						source={{uri: 'http://engineering.indeedblog.com/wp-content/uploads/2017/12/react-native-1024x631.png'}}
					/>
					<View>
						<Text style={styles.proName}>John </Text>
						<TouchableOpacity
						style={styles.proSwitchIcon}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Icon name="md-arrow-dropdown" type="ionicon"  style={{}}/>
        </TouchableOpacity>
						<Text style={styles.proDesgination}>Software Engineer</Text>
						<Button
							title="Edit Profile"
							onPress={() =>
								navigate('EditProfile')
							}
						/>
					</View>
				</View>
				<Modal
          animationType="fade"
					transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          
						<List style={styles.modalView}>
							<ListItem 
							style={{backgroundColor:"#488aff",padding:10,marginLeft:0}}>
								<Left >
								<Text style={styles.titleComponent}>View as</Text>
								</Left>
								<Right>
									<Icon name="md-close" type="ionicon" onPress={ () => this.setModalVisible(!this.state.modalVisible)} color='white' size={25}/>
								</Right>
							</ListItem>
							<ListItem>
								<Text>Employer</Text>
							</ListItem>
							<ListItem>
								<Text>Employee</Text>
							</ListItem>
							</List>
           
          
        </Modal>
				<View style={styles.proPrefernces}>
					<Text style={styles.proName}>Preferences</Text>
					<View style={styles.proContainer}>
						<Text style={styles.propreName}>Salary</Text>
						<Picker
              mode="dropdown"
              iosHeader="Select your Salary"
              iosIcon={<Icon name="ios-arrow-dropdown" type="ionicon" style={{ color: "#007aff", fontSize: 25 }} />}
              style={styles.proPicker}
              selectedValue={this.state.selectedSalary}
              onValueChange={this.onValueChangeSalary.bind(this)}
            >
              <Picker.Item label="Below Rs.10000" value="key0" />
              <Picker.Item label="Rs.10000 - Rs.15000" value="key1" />
              <Picker.Item label="Rs.15000 - Rs.25000" value="key2" />
              <Picker.Item label="Rs.25000 - Rs.50000" value="key3" />
              <Picker.Item label="Above Rs.50000" value="key4" />
            </Picker>
					</View>
					<View style={styles.proContainer}>
						<Text style={styles.propreName}>Location</Text>
						<Picker
              mode="dropdown"
              iosHeader="Select your City"
              iosIcon={<Icon name="ios-arrow-dropdown" type="ionicon" style={{ color: "#007aff", fontSize: 25 }} />}
              style={styles.proPicker}
              selectedValue={this.state.selectedLocation}
              onValueChange={this.onValueChangeLocation.bind(this)}
            >
              <Picker.Item label="Any" value="key0" />
              <Picker.Item label="Bangalore" value="key1" />
							<Picker.Item label="Chennai" value="key2" />
              <Picker.Item label="Delhi" value="key3" />
              <Picker.Item label="Pune" value="key4" />
            </Picker>
					</View>
				</View>
				<Button 
					style={{marginTop:20}}
					title="Logout"
					onPress={this.onLogout}
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
				margin:30
		},
		proContainer:{
			flexDirection: 'row',
			marginTop:10
		},
		proImage:{
			width:100,
			height:100,
			borderRadius:50,
			marginRight:30
		},
		proName:{
			fontSize: 18,
			marginTop:30,
			fontWeight: 'bold',
			marginRight:0,
			flexDirection:"row"
		},
		proDesgination:{
			fontSize: 16,
			marginTop: 5
		},
		proPrefernces:{
			marginTop:15
		},
		propreName:{
			fontSize:16,
			fontWeight:'bold',
			marginTop:15,
			marginRight:15,
			flex:4
		},
		proSwitchIcon:{
		marginTop:-20,
		},
		modalView:{
			
			width:"50%",
			top:'25%',
			left:"40%",
			backgroundColor:'white',
			

		},
		titleComponent:{
			color: 'white',
			fontSize:18,
			textAlign:'left',
			fontWeight: 'bold',
			
		 }
});