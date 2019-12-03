import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Text,
} from 'react-native';
class DashboardScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>
                    This is the Dashboard
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default DashboardScreen;
