import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class EditProfile extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>EditProfile</Text>
            </View>
        );
    }
}
export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});