import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';

  const HamburgerButton = (props) => (
    <TouchableOpacity style={styles.HamburgerButton} onPress={() => { props.navigation.navigate('DrawerOpen') }} >
      <Image source={require('../images/HamburgerIcon.png')} />
    </TouchableOpacity>
  )

const styles = StyleSheet.create({
  HamburgerButton: {
    paddingLeft: 10,
  },
});

export default HamburgerButton