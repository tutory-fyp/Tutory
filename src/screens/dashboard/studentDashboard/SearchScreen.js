import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
} from 'react-native';

class SearchScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return(
            <View style={styles.container} >
                <Text>
                    This is SearchScreen Component
                </Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SearchScreen;