import React, {Component} from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default class CustomDrawerHeader extends Component {
  render() {
    
    console.log(this.props);

    return (
      <View style={styles.drawerContainer}>

      </View>
    )
  }
}

const styles = StyleSheet.create ({
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e556d',
  }
})











/* const CustomDrawerHeader = (props) =>(
  <View style={{
    backgroundColor: '#f50057',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <SafeAreaView style={styles.DrawerHeader}>
    <DrawerItems {...props}/>
    <Text style={{ color: 'white', fontSize: 30 }}>Header</Text>
    </SafeAreaView>
  </View>
) */