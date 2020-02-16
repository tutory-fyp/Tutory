import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import {
    Text,
    Paragraph,
} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { YELLOW_COLOR } from '../constants/commonColors';

class TopRatedTutorCard extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        startingPrice: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return(
            <View style={styles.wrapper} >
                <Image
                    resizeMode="cover"
                    style={styles.img}
                    source={require('../../assets/card_image.jpg')}
                />
                <View style={styles.contentWrapper} >
                    <Text style={styles.name} >
                        {this.props.name}
                    </Text>
                    <Paragraph style={styles.info} >
                        {this.props.description}
                    </Paragraph>
                    <View style={styles.trtcRatingWrapper} >
                        <AntDesign
                            name="star"
                            color={YELLOW_COLOR}
                            size={18}
                        />
                        <Text style={styles.ratingText} >
                            {this.props.rating}
                        </Text>
                        <Text style={styles.price} >
                            From Rs.{this.props.startingPrice}
                        </Text>
                    </View>
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
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 1,
    },
    img: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 110,
        width: "100%",
    },
    contentWrapper: {
        marginVertical: 5,
        paddingHorizontal: 8,
    },
    name: {
        marginTop: 8,
        fontSize: 18,
    },
    info: {
        marginTop: 0,
    },
    trtcRatingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 17,
        color: YELLOW_COLOR,
    },
    price: {
        fontSize: 17,
        position: 'absolute',
        right: 8,
        color: '#3185E8',
    },
});

export default TopRatedTutorCard;