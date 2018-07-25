import React from 'react';
import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';


class MenuDrawer extends React.Component {
    static navigationOptions = {
        title: 'DrawerMenu',
    };
    render(){
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Button style={{marginTop: 10, fontSize: 15, textAlign: 'left'}} title='Home' onPress= {this.handleSettingsPress}/>
          <Button style={{marginTop: 10, fontSize: 15, textAlign: 'left'}} title='Enquiry' onPress= { ()=> this.props.navigation.navigate('')}/>
          <Button style={{marginTop: 10, fontSize: 15, textAlign: 'left'}} title='Complaint' onPress= { ()=> this.props.navigation.navigate('')}/>
          <Button style={{marginTop: 10, fontSize: 15, textAlign: 'left'}} title='Application' onPress= { ()=> this.props.navigation.navigate('')}/>
          <Button style={{marginTop: 10, fontSize: 15, textAlign: 'left'}} title='Contact us' onPress= { ()=> this.props.navigation.navigate('')}/>
          <Button style={{marginTop: 10, fontSize: 15, textAlign: 'left'}} title='Settings' onPress= { ()=> this.props.navigation.navigate('')}/>
        </View>
      )
      return (
      <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>    
      </DrawerLayoutAndroid>
      );
    }
  }


  export default MenuDrawer;