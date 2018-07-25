import React from 'react';
import { Text, View, Button, DrawerLayoutAndroid } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Langage from './screens/Langauge/Langauge';
import complaint from './screens/Complaint/complaint';


class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render(){
    return (
      // <MenuDrawer />
      <Button title='Go to complaint' onPress= {() => this.props.navigation.navigate('complaint')} />
    )
  }
}

class DetailsScreen extends React.Component {
  render(){
    return(
      <View>
        <Text>This is my details screen</Text>
        <Button title='Go to Details' onPress= {() => this.props.navigation.navigate('Details')} />
      </View>
    )
  }
}

class Home extends React.Component {
  static navigationOptions = {
      title: 'Home',
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

//entry point (root component) for the app
const RootStack = createStackNavigator (
  {
    Home: Home,
    Main : MainScreen,
    Details : DetailsScreen,
    complaint : complaint
  },{
    initialRouteName : 'Home',
  }
)

export default class App extends React.Component {
  render(){
    return <RootStack />
  }
}