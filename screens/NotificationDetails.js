import React, { Component } from "react";
import { View, Image,Text,StyleSheet,ScrollView,keyString,Button } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'native-base';
class NotificationDetails extends Component {
    static navigationOptions = {
        title: 'Notification Details',
      };
    render() {
        
        return (
            
            <View style={styles.container}>
                
 
                <Card>
                <ScrollView>
                        <Card>
                        <Grid style={styles.Compydetails}>
                            <Col size={20}><Text style={styles.Iconimg}><Image
							style={styles.editImage}
							source={{uri: 'https://www.torrejoncillotodonoticias.com/wp-content/uploads/2011/05/android-icon.png'}}
							
						/>	</Text></Col>
                            <Col size={75} style={{marginLeft:'3%'}}>
                            <Text style={styles.JobName}>Andriod Developer</Text>       
                            <Text style={styles.CompanyName}>IRtrends pvt ltd</Text>
                            <Text style={styles.CompanyAddress}>Company Name- Chennai</Text></Col>
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

                 <CardTitle style={styles.Subtitle}
                  subtitle="Job Description"                 
                />

                <Text style={styles.JobSummery}>We are looking for an Android developer responsible for
                 the development and maintenance of applications. To ensure the best possible performance, 
                 quality, and responsiveness of the application</Text>
                 <CardTitle style={styles.Subtitle}                  
                    subtitle="Responsibilities and Duties"
                />
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
                <CardTitle style={styles.Subtitle}
                    subtitle="Skills"
                />
                <Text style={ styles.Skills }>Html5,Java script,Angular js,Node js</Text>
                
                <CardTitle style={styles.Subtitle}
                    subtitle="Experience"
                />
                <Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
                <Text style={ styles.Experience }>Java: 1 year (Required)</Text>

                <CardTitle style={styles.Subtitle}
                    subtitle="Education"
                />
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
    },
    Education:{
        marginLeft:'8%',
        marginBottom:'3%',
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
        width:100,
        height:100,  
    },
    Iconimg:{
        textAlign:'center',
        padding:'5%',
        marginTop:'8%',
    }
});