import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    Appbar,
} from 'react-native-paper';

class ViewMarksScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._goBack = this._goBack.bind(this);
    }
    
    _goBack() {
        this.props.navigation.navigate('Dashboard');
    }

    render() {
        return(
            <View style={styles.container} >
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="View Marks"
                    />
                </Appbar.Header>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ViewMarksScreen;