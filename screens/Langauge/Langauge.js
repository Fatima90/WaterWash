import React from 'react';
import {View, Button } from 'react-native';


class Langague extends React.Component {
    static navigationOptions = {
        header: null
    }

    render (){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                <Button title='English' onPress={() => this.props.navigation.navigate('Main')}/>
                <Button title='Arabic' onPress={() => this.props.navigation.navigate('Main')}/>
            </View>
        )
    }
} 

export default Langague;