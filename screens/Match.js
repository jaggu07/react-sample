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
                <Text style={styles.label}> 
                
					
						<Image
							style={styles.editImage}
							source={{uri: 'https://www.torrejoncillotodonoticias.com/wp-content/uploads/2011/05/android-icon.png'}}
							
						/>	
					
				{"\n"}
                    <Text style={styles.JobName}> Android Developer {"\n"} </Text>
                    <Text style={styles.CompanyName}> Rupenet Technology Solutions Pvt Ltd {"\n"}   </Text>
                    <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu {"\n"}   </Text>
                </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Text style={styles.label}> 
                
					
						<Image
							style={styles.editImage}
							source={{uri: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/106/thumb_bigger_formation-angular-avance.png'}}
							
						/>	
					
				{"\n"}
                    <Text style={styles.JobName}> Angular Developer {"\n"} </Text>
                    <Text style={styles.CompanyName}> IRtrends Pvt Ltd {"\n"}   </Text>
                    <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu {"\n"}   </Text>
                </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Text style={styles.label}> 
                
					
						<Image
							style={styles.editImage}
							source={{uri: 'https://png.pngtree.com/svg/20170719/react_1353128.png'}}
							
						/>	
					
				{"\n"}
                    <Text style={styles.JobName}> React Developer {"\n"} </Text>
                    <Text style={styles.CompanyName}> Agnitio solutions Pvt Ltd {"\n"}   </Text>
                    <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu {"\n"}   </Text>
                </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Text style={styles.label}> 
                
					
						<Image
							style={styles.editImage}
							source={{uri: 'http://siteimages.saihasoft.com/uploads/technology/JAPSfAbP3BFt6TW_O-WrWrBat15Zbun6.png'}}
							
						/>	
					
				{"\n"}
                    <Text style={styles.JobName}> Ionic Developer {"\n"} </Text>
                    <Text style={styles.CompanyName}> Blunic Solutions Pvt Ltd {"\n"}   </Text>
                    <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu {"\n"}   </Text>
                </Text>
            </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <TouchableOpacity onPress={() => navigate('NotificationDetails')}>
                <Text style={styles.label}> 
                
					
						<Image
							style={styles.editImage}
							source={{uri: 'https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png'}}
							
						/>	
					
				{"\n"}
                    <Text style={styles.JobName}> Node js Developer {"\n"} </Text>
                    <Text style={styles.CompanyName}>Info Hawk pvt ltd{"\n"}   </Text>
                    <Text style={styles.CompanyLocation}> Chennai, Tamil Nadu {"\n"}   </Text>
                </Text>
            </TouchableOpacity>
          </Card>

          {/* <Card style={[styles.card, styles.card2]} onSwipedLeft={() => alert('onSwipedLeft')}><Text style={styles.label}>B</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
          <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card> */}

        </CardStack>


        {/* <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft();
            }}>
              <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
          </View>

        </View> */}
      </View>
    );
  }
}

  
    
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:'5%',
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 300,
    height: 300,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    flex: 1,  
    backgroundColor: '#B0D8C4',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    justifyContent: 'center',
    textAlign:'center',
    width: 300,
    fontSize: 30,
    marginTop:'15%',
    color: '#000',
    backgroundColor: 'transparent',
  },
 
editImage:{
    width:250,
    height:250,  
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F44336',
    borderRadius: 10
},
  JobName:{
    fontSize: 24,
  },
  CompanyName:{
    fontSize: 15,
  },

  CompanyLocation:{
    fontSize: 12,
  },
});