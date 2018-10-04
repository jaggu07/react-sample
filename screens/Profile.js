// import React, { Component } from 'react';
// import { Col, Row, Grid } from "react-native-easy-grid";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Button
//   } from "react-native";
  
//   class Profile extends Component {
//     static navigationOptions = {
//         title: 'Profile',
//       };
//     render() {
//         return (
//             <View>
//                 <Grid>
//                     <Col> <Text>Profile</Text></Col>
//                     <Col> <Text>Name</Text></Col>
//             </Grid>

//                 <Button
//             style={styles.jobButton}
//             title="Login"
//             onPress={() =>
//               navigate('Profile', { name: 'Jane' })
//             }
//           /><Button
//           style={styles.jobButton}
//           title="Login"
//           onPress={() =>
//             navigate('Profile', { name: 'Jane' })
//           }
//         />
//             </View>
//         );
//     }
//   }

//   const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       justifyContent:'center',
//       margin:'10%'
//     },
   
//     jobButton:{
//       borderColor:'red'
    
//     }
//   })

//   export default Profile;