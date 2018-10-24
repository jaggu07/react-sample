import React, { Component } from "react";
import { View, Image,Text,StyleSheet,ScrollView,keyString,Button } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'native-base';

import HeaderComponent from '../components/headerComponent';

<<<<<<< HEAD
                <Text style={ styles.Education }>Bachelor's (Required)</Text>

                <View style={styles.ButtonRow}>
                    <View style={styles.ButtonColumn}>
                    <Button 
                            title="Accept"
                            color="#841584"
                            onPress={()=>console.log()}
                            />
                    </View>
                    <View style={styles.ButtonColumn}>
                    <Button
                            title="Decline"
                            color="#841584"
                            onPress={()=>console.log()}
                            />
                    </View>
                </View>

                </ScrollView>
                </Card>

                
            </View>
        );
    }
=======
class NotificationDetails extends Component {
	static navigationOptions = {
			header: PlayerScreen = ({ navigation }) => (<HeaderComponent title={ 'Notification Details' } back={'arrow-back'} navigationData={navigation}/>)
	};
	render() {
		return (
		<View style={styles.container}>
			<Card>
					<ScrollView>
						<Card>
							<Grid style={styles.Compydetails}>
								<Col size={25}>
									<Image
									style={styles.editImage}
									source={{uri: 'https://www.torrejoncillotodonoticias.com/wp-content/uploads/2011/05/android-icon.png'}}
									/>
								</Col>
								<Col size={75} style={{marginLeft:'3%'}}>
									<Text style={styles.JobName}>Andriod Developer</Text>       
									<Text style={styles.CompanyName}>IRtrends pvt ltd</Text>
									<Text style={styles.CompanyAddress}>Company Name- Chennai</Text>
								</Col>
							</Grid>   
							<Grid>
								<Col style={styles.salaryDetails}>
									<Icon name='ios-briefcase' style={{color:'#384850'}}/>
									<Text style={styles.CompanyName}>0-10 yrs</Text>  
								</Col>
								<Col style={styles.salaryDetails}>
									<Icon name="ios-pin" style={{color:'#384850'}}/>
									<Text style={styles.CompanyName}>Chennai</Text>  
								</Col>
								<Col style={styles.salaryDetails}>
									<Icon name="ios-cash" style={{color:'#384850'}}/>
									<Text style={styles.CompanyName}>10k-15k</Text>  
								</Col>
							</Grid>      
						</Card>
					<Text  style={styles.subHeader}>Job Description</Text>
					<Text style={styles.JobSummery}>We are looking for an Android developer responsible for
					the development and maintenance of applications. To ensure the best possible performance, 
					quality, and responsiveness of the application</Text>
					<Text  style={styles.subHeader}>Responsibilities and Duties</Text>
					<View style={ styles.column }>
						<View style={ styles.row }>
							<View style={ styles.bullet }>
								<Text>{'\u2022' + " "}</Text>
							</View>
							<View style={ styles.bulletText }>
								<Text style={ styles.normalText }>We are looking for an Android developer responsible for
							the development and maintenance of applications.</Text>
							</View>
						</View>
						<View style={ styles.row }>
							<View style={ styles.bullet }>
								<Text>{'\u2022' + " "}</Text>
							</View>
							<View style={ styles.bulletText }>
								<Text style={ styles.normalText }>We are looking for an Android developer responsible for
							the development and maintenance of applications.</Text>
							</View>
						</View>
						<View style={ styles.row }>
							<View style={ styles.bullet }>
								<Text>{'\u2022' + " "}</Text>
							</View>
							<View style={ styles.bulletText }>
								<Text style={ styles.normalText }>We are looking for an Android developer responsible for
							the development and maintenance of applications.</Text>
							</View>
						</View>
						<View style={ styles.row }>
							<View style={ styles.bullet }>
								<Text>{'\u2022' + " "}</Text>
							</View>
							<View style={ styles.bulletText }>
								<Text style={ styles.normalText }>We are looking for an Android developer responsible for
							the development and maintenance of applications.</Text>
							</View>
						</View>
					</View>
					<Text  style={styles.subHeader}>Skills</Text>
					<Text style={ styles.Skills }>Html5,Java script,Angular js,Node js</Text>
					<Text  style={styles.subHeader}>Experience</Text>
					<Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
					<Text style={ styles.Experience }>Java: 1 year (Required)</Text>
					<Text  style={styles.subHeader}>Education</Text>
					<Text style={ styles.Education }>Bachelor's (Required)</Text>
					<View style={styles.ButtonRow}>
						<View style={styles.ButtonColumn}>
							<Button 
							title="Accept"
							color="#841584"
							onPress={()=>console.log()}
							/>
						</View>
						<View style={styles.ButtonColumn}>
							<Button
							title="Decline"
							color="#841584"
							onPress={()=>console.log()}
							/>
						</View>
					</View>
					{/* <Button style={styles.ApplyButton}
					title="APPLY"
					color="#841584"
					/>
					<Button style={styles.ApplyButton}
					title="APPLY"
					color="#841584"
					/> */}
					</ScrollView>
				</Card>
		</View>
		);
	}
>>>>>>> 800d020a1b047bd4fa74d92fab5f6d2cfe955db7
}

export default NotificationDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    Compydetails:{
        marginTop:'5%',
        marginLeft:'5%',
    }
    ,
    JobName:{
        fontSize: 18,
        fontWeight: 'bold',
      },
      CompanyName:{
        fontSize: 15,
      },
    
      CompanyAddress:{
        fontSize: 12,
        color:'#194D33',
      },
    salaryDetails:{
        alignItems: 'center',
         margin:'5%',
    },
    ApplyButton: {
        color:'red',
        justifyContent: 'center'
    },
    JobSummery:{
        color:'#000',
        padding:'3%',
        margin:'2%',
    },
    Roles:{
        color:'#000',
        padding:'3%',
    },
    Subtitle:{
        backgroundColor: "#D7D5DB",
        marginBottom:'2%',
        marginTop:'2%',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin:'3%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 1
    },
    bullet: {
        width: 25,
        marginLeft:'4%',
    },
    bulletText: {
        flex: 1
    },
    boldText: {
        fontWeight: 'bold'
    },
    Experience: {
        marginLeft:'8%',
        margin:'2%',
    },
    Education:{
        marginLeft:'8%',
        margin:'3%',
    },
    Skills:{
        marginLeft:'8%',
        marginBottom:'3%',
        padding:'3%',
    },
    ButtonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:'2%'
      },
      ButtonColumn: {
        width: '40%',
        height: 40
      },
      editImage:{
        width:60,
        height:60,  
    },
    Iconimg:{
        textAlign:'center',
        padding:'5%',
        marginTop:'8%',
    },
    subHeader:{
        backgroundColor:'#cacdd1',
        height: 40,
        fontSize:16,
        fontWeight:'bold',
        padding:10,
        textAlignVertical:'center'
      },
});