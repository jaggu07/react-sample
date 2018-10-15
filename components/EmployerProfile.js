import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ListView,Animated, ScrollView, KeyboardAvoidingView } from "react-native";
import { Form  ,Picker, Input, InputGroup, Textarea } from 'native-base';
import { Subheader } from 'react-native-material-ui';
import { Icon } from 'react-native-elements';
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
            <Text  style={styles.subHeader}>GENERAL PROFILE</Text>
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
              <Icon name='account-balance' style={{color:'#384850'}}/>
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
              <Icon type='MaterialCommunityIcons' name='web' style={{color:'#384850'}}/>
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
                <Icon name='people' type="SimpleLineIcons" style={{color:'#384850'}}/>
                  <Text style={styles.propreName}>Company Size</Text>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="1-10" value="1-10" />
                  <Picker.Item label="1-20" value="1-20" />
                  <Picker.Item label="1-50" value="1-50" />
                  <Picker.Item label="1-100" value="1-100" />
                  <Picker.Item label="1-200" value="1-200" />
                </Picker>
              </InputGroup>
              
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
              <Icon name='mail' style={{color:'#384850'}}/>
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
                <Icon name='location-on' type="MaterialIcons" style={{color:'#384850',}}/>
                <Textarea 
                rowSpan={3} 
                underlined 
                style={styles.textArea}
                onChangeText={(companyAddress) => this.setState({companyAddress})}
                placeholder="Company Address" 
                value={this.state.companyAddress}
                ref = "companyAddress"
                
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
              
              <Text  style={styles.subHeader}>PERSONAL DETAILS</Text>

              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
              <Icon name='person' style={{color:'#384850'}}/>
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
              <Icon name='person' style={{color:'#384850'}}/>
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
              <Icon name='mail' style={{color:'#384850'}}/>
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
                 <Icon name='phone' type="Entypo" style={{color:'#384850'}}/>
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

              <Text  style={styles.subHeader}>YOUR ROLE</Text>

              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='ios-briefcase' type="ionicon" style={{color:'#384850'}}/>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="Human Resource" value="Human Resource" />
                  <Picker.Item label="Managing Director" value="1-20" />
                  <Picker.Item label="Senior Developer" value="Senior Developer" />
                </Picker>
              </InputGroup>
              
             
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
  subHeader:{
    backgroundColor:'#cacdd1',
    height: 40,
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    textAlignVertical:'center'
  },
  removeIcon:{
    height:30,
    marginLeft:10,
  },
  proContainer:{
    flexDirection: 'row',
    marginTop:10,
    marginLeft:20,
    marginRight:20
  },
  propreName:{
    marginRight:'30%',
    marginLeft:'3s%',
    
  },
});