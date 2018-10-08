import React, { Component } from "react";
import { View, Text,StyleSheet,ScrollView,keyString,Button } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

class NotificationDetails extends Component {
    static navigationOptions = {
        title: 'Notification Details',
      };
    render() {
        
        return (
            
            <View style={styles.container}>
                
 
                <Card>
                <ScrollView>
                <CardTitle 
                  title="Android Developer"                 
                />
                 <Text style={styles.CompanyName}>Company Name- Chennai</Text>
                 <CardTitle 
                  subtitle="Job Description"                 
                />

                <Text style={styles.JobSummery}>We are looking for an Android developer responsible for
                 the development and maintenance of applications. To ensure the best possible performance, 
                 quality, and responsiveness of the application</Text>
                 <CardTitle                  
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
                <CardTitle
                    subtitle="Experience"
                />
                <Text style={ styles.Experience }>Android development: 1 year (Required)</Text>
                <Text style={ styles.Experience }>Java: 1 year (Required)</Text>

                <CardTitle
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
    CompanyName:{
        fontWeight: 'bold',
        marginLeft:'5%',
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
    ButtonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:'2%'
      },
      ButtonColumn: {
        width: '40%',
        height: 40
      }
    
});