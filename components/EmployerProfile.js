import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ListView,Animated, ScrollView, KeyboardAvoidingView } from "react-native";
import { Form, Icon, Input, InputGroup, Textarea } from 'native-base';
import { Subheader } from 'react-native-material-ui';

var SampleArray = [] ;

class EmployerProfile extends Component {
  
  constructor(props){
    super(props);
    
		this.state = {
			fadeAnim: new Animated.Value(0),
      CompanyName: 'Infohawk',
      Website: 'http:/infohawk.in',
      email:'John@gmail.com',
      firstName:'jagan',
      lastName:'Kumar',
      mobileNumber:'9688711770',
      AboutCompany:'',
      skills:'',
      test:[]
      
    }
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2})
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
  
  addSkills (){
    SampleArray.push( this.state.skills );

    this.setState({test:SampleArray})
    console.log(SampleArray);
    this.setState({skills:''})
    this.refs.skills._root.focus()
    
  }
  removeSkills= (name) => {
    console.log(name);
    //var tempArray = this.state.test;
    SampleArray.splice(name,1)
    this.setState({test:SampleArray})
  }
	handleButtonPress() { 
		alert("Profile Updated")
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <ScrollView>
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
          <View >
            <Form style={{margin:20}}>
            <Subheader text="GENERAL PROFILE" />
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='ios-person' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Company Name"
                style={styles.textBox}
                onChangeText={(CompanyName) => this.setState({CompanyName})}
                value={this.state.CompanyName}
                onSubmitEditing = {(event)=> this.refs.CompanyName._root.focus()}
                />
              </InputGroup>
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='ios-person' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Website"
                style={styles.textBox}
                onChangeText={(Website) => this.setState({Website})}
                value={this.state.Website}
                ref = "Website"
                onSubmitEditing = {(event)=> this.refs.email._root.focus()}
                />
              </InputGroup>

              
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
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
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Experience"
                style={styles.textBox}
                onChangeText={(experience) => this.setState({experience})}
                value={this.state.experience}
                ref = "experience"
                onSubmitEditing = {(event)=> this.refs.summary._root.focus()}
                />
              </InputGroup>

              
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='list' style={{color:'#384850'}}/>
                <Textarea 
                rowSpan={5} 
                underlined 
                style={styles.textArea}
                onChangeText={(summary) => this.setState({AboutCompany})}
                placeholder="About the Company" 
                value={this.state.AboutCompany}
                ref = "AboutCompany"
                
                />
              </InputGroup>
              
              <Subheader text="PERSONAL DETAILS" />

              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
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
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
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
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
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
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="PhoneNumber"
                style={styles.textBox}
                onChangeText={(mobileNumber) => this.setState({mobileNumber})}
                value={this.state.mobileNumber}
                ref = "mobileNumber"
                onSubmitEditing = {(event)=> this.refs.summary._root.focus()}
                />
              </InputGroup>
             
              {/* <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Skills"
                style={styles.textBox}
                onChangeText={(skills) => this.setState({skills})}
                value={this.state.skills}
                ref = "skills"
                onSubmitEditing = {(event)=> this.addSkills()}
                />
              </InputGroup> */}
              
              {/* <ListView
                style={styles.listStyle}
                dataSource={this.dataSource.cloneWithRows(this.state.test)}
                enableEmptySections={true}
                renderRow={
                  (item, sectionID, rowID) => 
                  
                    <View 
                      style={styles.skillSetList}
                    ><Text style={styles.skillSetText}>{item}</Text>
                    <TouchableOpacity onPress={() => this.removeSkills(rowID)} style={styles.removeIcon}>
                      <Icon name='ios-close' style={{color:'#384850', alignContent:"flex-end"}}/>
                    </TouchableOpacity>
                  </View>
            
                }
              /> */}
              
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
              style={styles.changesButton}
              title="Save Changes"
              onPress={() =>
              this.handleButtonPress()
              }
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      </View>
    );
  }
}
export default EmployerProfile;

const styles = StyleSheet.create({
    container: {
		flex:1,
		justifyContent: 'center'
	},
	editProImageview:{
		margin:20,
    alignItems: 'center',
	},
	editImage:{
		width:150,
		height:150,
		margin:20,
		borderRadius:75,
  },
  changesButton:{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
  inputgroupStyle:{
    borderBottomWidth:2,
    marginBottom:10
  },
  textBox:{
    fontSize:14,
    textAlignVertical:'center'
  },
  textArea:{
    marginTop:5,
    width:"100%",
    textAlignVertical:'center',
    fontSize:14
  },
  listStyle:{
    marginBottom:10,
    
  },
  skillSetList:{
    height:40,
    flexDirection:"row"
  },
  skillSetText:{
    alignItems  :"flex-start",
    fontSize:16,
   
  },
  removeIcon:{
    height:30,
    marginLeft:10
  }
});