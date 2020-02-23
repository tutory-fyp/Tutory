import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    StyleSheet,
    View,
    Image,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {
    Card,
    Paragraph
} from 'react-native-paper';


class PopularCourseCard extends Component {
    
    static propTypes = {
        description: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return(
            <Ripple>
                <View style={styles.container} >
                    <Card
                        elevation={1}
                        style={styles.wrapper}
                    >
                        <Card.Cover
                            resizeMode="cover"
                            style={styles.img}
                            source={require('../../../assets/card_image.jpg')}
                        />
                        <Card.Content style={styles.cardContent} >
                            <Paragraph>
                                {this.props.description}
                            </Paragraph>
                        </Card.Content>
                    </Card>
                </View>
            </Ripple>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 200,
    },
    img: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 100,
        width: "100%",
    },
    cardContent: {
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    corseDescription: {
        fontWeight: 'bold',
    },
});

export default PopularCourseCard;