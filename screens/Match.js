import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,Animated
} from 'react-native';
import Details from './Details';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Icon } from 'native-base';


export default class App extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>

        <CardStack
          style={styles.content}

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
        >
          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <View style={styles.label}> 
                  <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                    <Image style={styles.editImage}
							        source={{uri: 'https://www.torrejoncillotodonoticias.com/wp-content/uploads/2011/05/android-icon.png'}}
							     	/>	
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.JobName}> Android Developer </Text>
                      <Text style={styles.CompanyName}> IRtrends Pvt Ltd    </Text>
                      <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu  </Text>
                    </View>
                  </View>

                  <View style={styles.ProfileDetails}>
                    <View style={styles.salaryDetails}>
                      <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>0-10 yrs</Text>  
                    </View>
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-pin" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>Chennai</Text>
                    </View>
                    
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-cash" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>10k-15k</Text>
                    </View>   
                  </View>

                  <View style = {styles.lineStyle} />

                <View>
                  <CardTitle style={styles.Subtitle} subtitle="Skills"/>
                  <Text style={ styles.Skills }>Html5,Java script,Angular js,Node js</Text>
                </View>

                <View style = {styles.lineStyle} />

                <CardTitle style={styles.Subtitle}
                    subtitle="Experience"
                />
                <Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
                <Text style={ styles.Experienc }>Java: 1 year (Required)</Text>

                </View>
                  <View style = {styles.lineStyle} />
            </TouchableOpacity>
          </Card>


          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <View style={styles.label}> 
                  <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                    <Image style={styles.editImage}
							        source={{uri: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/106/thumb_bigger_formation-angular-avance.png'}}
							     	/>	
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.JobName}> Angular Developer </Text>
                      <Text style={styles.CompanyName}> IRtrends Pvt Ltd    </Text>
                      <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu  </Text>
                    </View>
                  </View>

                  <View style={styles.ProfileDetails}>
                    <View style={styles.salaryDetails}>
                      <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>0-10 yrs</Text>  
                    </View>
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-pin" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>Chennai</Text>
                    </View>
                    
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-cash" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>10k-15k</Text>
                    </View>   
                  </View>

                  <View style = {styles.lineStyle} />

                <View>
                  <CardTitle style={styles.Subtitle} subtitle="Skills"/>
                  <Text style={ styles.Skills }>Html5,Java script,Angular js,Node js</Text>
                </View>

                <View style = {styles.lineStyle} />

                <CardTitle style={styles.Subtitle}
                    subtitle="Experience"
                />
                <Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
                <Text style={ styles.Experienc }>Java: 1 year (Required)</Text>

                </View>
                
            </TouchableOpacity>
          </Card>


          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <View style={styles.label}> 
                  <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                    <Image style={styles.editImage}
							        	source={{uri: 'https://png.pngtree.com/svg/20170719/react_1353128.png'}}
							     	/>	
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.JobName}> Reactjs Developer </Text>
                      <Text style={styles.CompanyName}> IRtrends Pvt Ltd    </Text>
                      <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu  </Text>
                    </View>
                  </View>

                  <View style={styles.ProfileDetails}>
                    <View style={styles.salaryDetails}>
                      <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>0-10 yrs</Text>  
                    </View>
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-pin" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>Chennai</Text>
                    </View>
                    
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-cash" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>10k-15k</Text>
                    </View>   
                  </View>

                  <View style = {styles.lineStyle} />

                <View>
                  <CardTitle style={styles.Subtitle} subtitle="Skills"/>
                  <Text style={ styles.Skills }>Html5,Java script,Angular js,Node js</Text>
                </View>

                <View style = {styles.lineStyle} />

                <CardTitle style={styles.Subtitle}
                    subtitle="Experience"
                />
                <Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
                <Text style={ styles.Experience }>Java: 1 year (Required)</Text>

                </View>
                
            </TouchableOpacity>
          </Card>


          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <View style={styles.label}> 
                  <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                    <Image style={styles.editImage}
							       source={{uri: 'https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png'}}
							     	/>	
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.JobName}> Nodejs Developer </Text>
                      <Text style={styles.CompanyName}> IRtrends Pvt Ltd    </Text>
                      <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu  </Text>
                    </View>
                  </View>

                  <View style={styles.ProfileDetails}>
                    <View style={styles.salaryDetails}>
                      <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>0-10 yrs</Text>  
                    </View>
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-pin" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>Chennai</Text>
                    </View>
                    
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-cash" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>10k-15k</Text>
                    </View>   
                  </View>

                  <View style = {styles.lineStyle} />

                <View>
                  <CardTitle style={styles.Subtitle} subtitle="Skills"/>
                  <Text style={ styles.Skills }>Html5,Java script,Angular js,Node js</Text>
                </View>

                <View style = {styles.lineStyle} />

                <CardTitle style={styles.Subtitle}
                    subtitle="Experience"
                />
                <Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
                <Text style={ styles.Experience }>Java: 1 year (Required)</Text>

                </View>
                
            </TouchableOpacity>
          </Card>


          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <View style={styles.label}> 
                  <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                    <Image style={styles.editImage}
                      source={{uri: 'http://siteimages.saihasoft.com/uploads/technology/JAPSfAbP3BFt6TW_O-WrWrBat15Zbun6.png'}}
                      />
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.JobName}> Ionic Developer </Text>
                      <Text style={styles.CompanyName}> IRtrends Pvt Ltd    </Text>
                      <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu  </Text>
                    </View>
                  </View>

                  <View style={styles.ProfileDetails}>
                    <View style={styles.salaryDetails}>
                      <Icon name='ios-briefcase' style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>0-10 yrs</Text>  
                    </View>
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-pin" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>Chennai</Text>
                    </View>
                    
                    <View style={styles.salaryDetails}>
                      <Icon name="ios-cash" style={{color:'#384850'}}/>
                      <Text style={styles.CompanyName}>10k-15k</Text>
                    </View>   
                  </View>

                  <View style = {styles.lineStyle} />

                <View>
                  <CardTitle style={styles.Subtitle} subtitle="Skills"/>
                  <Text style={ styles.Skills }>Html5,Java script,Angular js,Node js</Text>
                </View>

                <View style = {styles.lineStyle} />

                <CardTitle style={styles.Subtitle}
                    subtitle="Experience"
                />
                <Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
                <Text style={ styles.Experience }>Java: 1 year (Required)</Text>

                </View>
                
            </TouchableOpacity>
          </Card>

        </CardStack>

      </View>
    );
  }
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:'3%',
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  navBar: {
    flexDirection: 'row',
    margin:'5%',
  },
  leftContainer: {
    width: '30%',
    alignItems: 'center',
  },
  rightContainer: {
     width: '70%',
  },
 Experience: {
        marginLeft:'8%',
        marginTop:'2%',
    },
    Experienc:{
      marginLeft:'8%',
      paddingBottom:'3%',
    },
  ProfileDetails:{ 
    flexDirection: 'row',
    margin:'5%',
  },
  salaryDetails:{
    width: '33%', 
    alignItems: 'center',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: '100%',
    height: 400,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity:0.5,
  },
  card1: {
    flex: 1,  
    backgroundColor: '#E0E0E0',
  },
  label: {
    width: 300,
    marginTop:'5%',
  },
 
editImage:{
    width:60,
    height:60,  
},
  JobName:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  CompanyName:{
    fontSize: 15,
  },
CompanyLocation:{
    fontSize: 12,
    color:'#194D33',
  },
  Subtitle:{
    marginBottom:'2%',
},
Skills:{
  marginLeft:'8%',
  marginBottom:'3%',
  padding:'3%',
},
lineStyle:{
  borderWidth: 0.5,
  borderColor:'#ABB3AF',
  marginLeft:'5%',
  marginRight:'5%',
}
});