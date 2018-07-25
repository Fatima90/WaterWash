import React from 'react';
import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';

class complaint extends React.Component {
    static navigationOptions = {
        title: 'Complaint',
    };

    handleSettingsPress = () => {
        this.props.navigation.navigate('Details');
    };

    render(){
        return (
            <Button title="Complaine" onPress={this.handleSettingsPress}/>
        )
    }
}

export default complaint;