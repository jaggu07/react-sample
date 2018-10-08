import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Animated, ScrollView } from "react-native";
import { Form, Icon, Input, InputGroup } from 'native-base';

class EditProfile extends Component {
	constructor(props){
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0),
				firstName: 'John',
				lastName: 'John',
				email:'John@gmail.com',
				experience:'2 yrs'
		}
		
	}
	componentDidMount () {
		this.state.fadeAnim.setValue(0)
		Animated.timing(
			this.state.fadeAnim, // The value to drive
			{
				toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000, 
			}
		).start(); // Start the animation
	}
	handleButtonPress() { 
		
	}
	static navigationOptions = {
		title: 'Edit Profile',
	};
	render() {
		let { fadeAnim } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.editProImageview}>
					<TouchableOpacity onPress = {() => console.log("pressed")}>
						<Animated.Image
							style={[styles.editImage,{ opacity: fadeAnim}]}
							source={{uri: 'http://engineering.indeedblog.com/wp-content/uploads/2017/12/react-native-1024x631.png'}}
							
						/>
					</TouchableOpacity>
					<Button 
						title="Change Photo"
						onPress = { () => console.log("Button pressed")}
					/>
				</View>
				<View style={{flex:2}}>
				<ScrollView>
				<Form style={{marginBottom:15}}>
          <InputGroup borderType="underline">
            <Icon name='ios-person' style={{color:'#384850'}}/>
            <Input
              type="text"
              placeholder="First Name"
              style={styles.textBox}
              onChangeText={(firstName) => this.setState({firstName})}
              value={this.state.firstName}
              onSubmitEditing = {(event)=> this.refs.lastName._root.focus()}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-person' style={{color:'#384850'}}/>
            <Input
              type="text"
              placeholder="Last Name"
              style={styles.textBox}
              onChangeText={(lastName) => this.setState({lastName})}
              value={this.state.lastName}
              ref = "lastName"
              onSubmitEditing = {(event)=> this.refs.email._root.focus()}
            />
          </InputGroup>
          <InputGroup borderType="underline">
            <Icon name='ios-mail' style={{color:'#384850'}}/>
            <Input
              type="email"
              placeholder="Email"
              style={styles.textBox}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              ref = "email"
              onSubmitEditing = {(event)=> this.refs.experience._root.focus()}
            />
          </InputGroup>
					<InputGroup borderType="underline">
            <Icon name='ios-briefcase' style={{color:'#384850'}}/>
            <Input
              type="text"
              placeholder="Experience"
              style={styles.textBox}
              onChangeText={(experience) => this.setState({experience})}
              value={this.state.experience}
              ref = "experience"
              onSubmitEditing = {(event)=> handleButtonPress()}
            />
          </InputGroup>
          {/* <InputGroup borderType="underline">
            <Icon name='ios-lock' style={{color:'#384850'}}/>
            <Input
              type="password"
              secureTextEntry
              placeholder="Password"
              style={styles.textBox}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              ref = "password"
              onSubmitEditing = {(event)=> this.handleButtonPress()}
            />
          </InputGroup> */}
        </Form>        
        <Button
          style={{backgroundColor: "rgba(92, 99,216, 1)",
          width: 300,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
        }}
          title="Save Changes"
          onPress={() =>
            this.handleButtonPress()
          }
        />
				</ScrollView>
				</View>
			</View>
		);
	}
}
export default EditProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	editProImageview:{
		flex:2,
    alignItems: 'center',
	},
	editImage:{
		width:150,
		height:150,
		margin:20,
		borderRadius:75,
		
	}

});