import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ListView,Animated, ScrollView, KeyboardAvoidingView } from "react-native";
import { Form, Input, InputGroup, Textarea, Button } from 'native-base';
import { Subheader } from 'react-native-material-ui';
import { Icon } from 'react-native-elements';
import { Picker } from "native-base";

var SampleArray = [] ;

class FormProfile extends Component {
  
  constructor(props){
    super(props);
    var years=['2000','2001','2002']
    var qualificationList =['Bachelor', 'Master', 'Doctorate' ]
    var experienceYears = ['Intern','Junior','Mid-level','Senior','Lead']
		this.state = {
			fadeAnim: new Animated.Value(0),
      firstName: 'John',
      lastName: 'John',
      email:'John@gmail.com',
      experienceYears:experienceYears,
      experience:'Intern',
      summary:'',
      skills:'',
      test:[],
      years:years,
      fromYear:'2000',
      toYear:'2002',
      qualificationList:qualificationList,
      qualification:'Bachelor'
      
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
  onValueChangefromYear(value) {
    this.setState({
      fromYear: value
    });
    console.log(this.state)
  }
  onValueChangetoYear(value) {
    this.setState({
      toYear: value
    });
    console.log(this.state)
  }
  onValueChangeExperience(value) {
    this.setState({
      experience: value
    });
    console.log(this.state)
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
              transparent
              style={styles.editPicButton}
              onPress = { () => console.log("Button pressed")}
            ><Text style={styles.editPicButtontext}>Change Photo</Text>
            </Button>
          </View>
          <View >
            <Form >
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
                <Icon name='list' containerStyle={styles.textAreaIcon}/>
                <Textarea 
                rowSpan={3} 
                underlined 
                style={styles.textArea}
                onChangeText={(summary) => this.setState({summary})}
                placeholder="Summary" 
                value={this.state.summary}
                ref = "summary"
                
                />
              </InputGroup>

              <Text style={styles.subHeader}>COMPANY DETAILS</Text>
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='account-balance' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Company Name"
                style={styles.textBox}
                onChangeText={(companyName) => this.setState({companyName})}
                value={this.state.companyName}
                ref = "companyName"
                onSubmitEditing = {(event)=> this.refs.summary._root.focus()}
                />
              </InputGroup>
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='location' type="evilicon" containerStyle={styles.textAreaIcon}/>
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
                <Icon name='computer' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Role/Designation"
                style={styles.textBox}
                onChangeText={(designation) => this.setState({designation})}
                value={this.state.designation}
                ref = "designation"
                onSubmitEditing = {(event)=> this.refs.summary._root.focus()}
                />
              </InputGroup>
              
              <Text  style={styles.subHeader}>EXPERIENCE DETAILS</Text>
              <View style={styles.proContainer}>
              <Icon name='ios-briefcase' type="ionicon" style={{color:'#384850'}}/>
                <Text style={styles.propreName}>Experience</Text>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your Salary"
                  iosIcon={<Icon name="md-arrow-dropdown" type="ionicon"  style={{ color: "#007aff", fontSize: 25 }} />}
                  style={styles.proPicker}
                  selectedValue={this.state.experience}
                  onValueChange={this.onValueChangeExperience.bind(this)}
                >
                  {this.state.experienceYears.map((member,key) => <Picker.Item label={member} value={member} key={key}/>)}
                </Picker>
              </View>
              {/* <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='ios-briefcase' type="ionicon" style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Experience"
                style={styles.textBox}
                onChangeText={(experience) => this.setState({experience})}
                value={this.state.experience}
                ref = "experience"
                onSubmitEditing = {(event)=> this.refs.summary._root.focus()}
                />
              </InputGroup> */}
              <View style={styles.proContainer}>
              <Icon name='date-range' style={{color:'#384850'}}/>
                <Text style={styles.propreName}>From(years)</Text>
                <Picker
                  mode="dropdown"
                  iosHeader="Years"
                  iosIcon={<Icon name="md-arrow-dropdown" type="ionicon"  style={{ color: "#007aff", fontSize: 25 }} />}
                  style={styles.proPicker}
                  selectedValue={this.state.fromYear}
                  onValueChange={this.onValueChangefromYear.bind(this)}
                >
                  {this.state.years.map((member,key) => <Picker.Item label={member} value={member} key={key} />)}
                </Picker>
              </View>
              <View style={styles.proContainer}>
              <Icon name='date-range' style={{color:'#384850'}}/>
                <Text style={styles.propreName}>To(years)</Text>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your Salary"
                  iosIcon={<Icon name="md-arrow-dropdown" type="ionicon"  style={{ color: "#007aff", fontSize: 25 }} />}
                  style={styles.proPicker}
                  selectedValue={this.state.toYear}
                  onValueChange={this.onValueChangetoYear.bind(this)}
                >
                  {this.state.years.map((member,key) => <Picker.Item label={member} value={member} key={key}/>)}
                </Picker>
              </View>

              <Text  style={styles.subHeader}>SKILL SET</Text>
              <InputGroup borderType="underline" style={styles.inputgroupStyle}>
                <Icon name='lightbulb-outline' style={{color:'#384850'}}/>
                <Input
                type="text"
                placeholder="Skills"
                style={styles.textBox}
                onChangeText={(skills) => this.setState({skills})}
                value={this.state.skills}
                ref = "skills"
                onSubmitEditing = {(event)=> this.addSkills()}
                />
                 <Icon name='check' color='green' onPress = {(event)=> this.addSkills()}/>
              </InputGroup>
              <ListView
                style={styles.listStyle}
                dataSource={this.dataSource.cloneWithRows(this.state.test)}
                enableEmptySections={true}
                renderRow={
                  (item, sectionID, rowID) => 
                  
                    <View 
                      style={styles.skillSetList}
                    ><Text style={styles.skillSetText}>{item}</Text>
                    <TouchableOpacity onPress={() => this.removeSkills(rowID)} style={styles.removeIcon}>
                      <Icon name='ios-close-circle-outline' type="ionicon" color="red" style={{color:'#384850', alignContent:"flex-end"}}/>
                    </TouchableOpacity>
                  </View>
            
                }
              />
              
              <Text  style={styles.subHeader}>QUALIFICATION</Text>
              <View style={styles.proContainer}>
              <Icon name="ios-book" type="ionicon"  style={{ color: "#007aff", fontSize: 25 }} />
                <Text style={styles.propreName}>Qualification</Text>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your Salary"
                  iosIcon={<Icon name="md-arrow-dropdown" type="ionicon"  style={{ color: "#007aff", fontSize: 25 }} />}
                  style={styles.proPicker}
                  selectedValue={this.state.qualification}
                  onValueChange={this.onValueChangetoYear.bind(this)}
                >
                  {this.state.qualificationList.map((member,key) => <Picker.Item label={member} value={member} key={key}/>)}
                </Picker>
              </View>

            </Form>        
            <Button
              style={styles.changesButton}
              rounded
              onPress={() =>
              this.handleButtonPress()
              }
            ><Text style={styles.changesButtonText}>Save Changes</Text></Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      </View>
    );
  }
}
export default FormProfile;

const styles = StyleSheet.create({
    container: {
		flex:1,
    justifyContent: 'center',
    zIndex:0
	},
	editProImageview:{
    alignItems: 'center',
	},
	editImage:{
		width:150,
		height:150,
    margin:20,
    marginBottom:5,
		borderRadius:75,
  },
  editPicButton:{
    backgroundColor:'transparent',
    width: '80%',
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginBottom:20,
    marginLeft:'10%',
  },
  editPicButtontext:{
    color:'#488aff',
    width: '100%',
    textAlign:'center',
    shadowColor:'transparent'
  },
  changesButton:{
    backgroundColor: "#488aff",
    width: '80%',
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginBottom:20,
    marginLeft:'10%',
    
  },
  changesButtonText:{
    width: '100%',
    textAlign:'center',
    color:'white'
  },
  subHeader:{
    backgroundColor:'#cacdd1',
    height: 40,
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    textAlignVertical:'center'
  },
  inputgroupStyle:{
    borderBottomWidth:2,
    marginBottom:5,
    marginLeft:20,
    marginRight:20
  },
  textBox:{
    fontSize:14,
    marginLeft:5
    
  },
  textArea:{
    marginTop:5,
    width:"100%",
    fontSize:14,
    margin:25
  },
  textAreaIcon:{
    position:'absolute',top:10,left:5
    
  },
  listStyle:{
    marginBottom:10,
    marginLeft:20,
    marginRight:20
    
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
  },
  proContainer:{
    flexDirection: 'row',
    marginTop:10,
    marginLeft:25,
    marginRight:20
  },
  propreName:{
    fontSize:14,
    marginTop:15,
    marginRight:15,
    width:100,
    marginLeft:10
    
  },
});