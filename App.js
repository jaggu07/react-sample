import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { getRootNavigator } from './appNavigation'
import { isLoggedIn } from './api/auth'
import ApiKeys from './Constants/ApiKeys';
import * as firebase from 'firebase';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    //if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.initializeApp(ApiKeys.FirebaseConfig);
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }
  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
    this.setState({loading: false});
  }

  

  render() {
    if ( (this.state.loading || !this.state.isAuthenticationReady)) {
      return (
        <View style={styles.base}>
          <ActivityIndicator size='small' />
        </View>
      )
    }else{

    const RootNavigator = getRootNavigator(this.state.isAuthenticated);
    return <RootNavigator />
    }
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})