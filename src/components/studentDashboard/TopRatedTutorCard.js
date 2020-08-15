import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Paragraph } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { cardImage } from '../../constants/images';
import Ripple from 'react-native-material-ripple';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { YELLOW_COLOR } from '../../constants/commonColors';

class TopRatedTutorCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    startingPrice: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      wrapperW: 0,
    };
  }

  render() {
    return (
      <Ripple>
        <View
          style={styles.wrapper}
          onLayout={e =>
            this.setState({
              wrapperW: e.nativeEvent.layout.width,
            })
          }>
          <Image
            resizeMode="cover"
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: 110,
              width: this.state.wrapperW,
            }}
            source={cardImage}
          />
          <View style={styles.contentWrapper}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Paragraph style={styles.info}>{this.props.description}</Paragraph>
            <View style={styles.trtcRatingWrapper}>
              <AntDesign name="star" color={YELLOW_COLOR} size={18} />
              <Text style={styles.ratingText}>{this.props.rating}</Text>
              <Text style={styles.price}>
                From Rs.{this.props.startingPrice}
              </Text>
            </View>
          </View>
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
    borderRadius: 10,
    elevation: 1,
    backgroundColor: '#fff',
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
