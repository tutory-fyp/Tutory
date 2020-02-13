import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Image,
} from 'react-native';
import {
    Subheading,
} from 'react-native-paper';

class PopularCourseCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return(
            <View style={styles.wrapper} >
                <Image 
                    source={require('../../assets/dp_placeholder.png')}
                    style={styles.img}
                />
                <View style={styles.cardContent} >
                    <Subheading style={styles.corseDescription} >
                        FSC Pre-Engineering
                    </Subheading>
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        width: 180,
        height: 230,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 1,
    },
    img: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 170,
        width: "100%",
    },
    cardContent: {
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    corseDescription: {
        fontWeight: 'bold',
    },
});

export default PopularCourseCard;