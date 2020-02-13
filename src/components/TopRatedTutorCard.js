import React, { Component } from 'react';
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

class TopRatedTutorCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return(
            <View style={styles.trtcWrapper} >
                <Image
                    style={styles.trtcImg}
                    source={require('../../assets/dp_placeholder.png')}
                />
                <View style={styles.trtcContentWrapper} >
                    <Text style={styles.trtcName} >
                        Muhammad Usman
                    </Text>
                    <Paragraph style={styles.trtcPopularCourseInfo} >
                        Crash Course Physics HSSC-1
                    </Paragraph>
                    <View style={styles.trtcRatingWrapper} >
                        <AntDesign
                            name="star"
                            color="#FF9529"
                            size={18}
                        />
                        <Text style={styles.trtcRatingText} >
                            5.0 (120)
                        </Text>
                        <Text style={styles.trtcPrice} >
                            From Rs.130
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
    trtcWrapper: {
        width: 230,
        height: 260,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 1,
    },
    trtcImg: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 170,
        width: "100%",
    },
    trtcContentWrapper: {
        paddingHorizontal: 8,
    },
    trtcName: {
        marginTop: 8,
        fontSize: 18,
    },
    trtcPopularCourseInfo: {
        marginTop: 0,
    },
    trtcRatingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    trtcRatingText: {
        fontSize: 17,
    },
    trtcPrice: {
        fontSize: 17,
        position: 'absolute',
        right: 8,
        color: '#3185E8',
    },
});

export default TopRatedTutorCard;