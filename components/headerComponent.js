import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

class HeaderComponent extends Component {
	render() {
		return (
			<Header
				backgroundColor="#488aff"
				leftComponent={{ icon: this.props.back, color: 'white', onPress: () => this.props.navigationData.pop() }}
				centerComponent={{ text: this.props.title.toUpperCase(), style:  styles.titleComponent   }}
			/>
		);
	}
}
export default HeaderComponent;

const styles = StyleSheet.create({
   titleComponent:{
		color: 'white',
		fontSize:18,
		textAlign:'center'
	 }
});