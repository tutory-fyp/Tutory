import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Badge } from 'react-native-elements';
import { Avatar, Title, Subheading } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';
import { personImage } from '../../constants/images';
import { YELLOW_COLOR, PRIMARY_COLOR } from '../../constants/commonColors';
import { Grid, Row, Col } from 'react-native-easy-grid';

const { width: WIDTH } = Dimensions.get('window');

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _gotoTutorDetailScreen = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('TutorDetail');
  };

  _printHours = hour => {
    if (hour < 12) {
      return `${hour}:00 AM`;
    } else if (hour === 12) {
      return `${hour}:00 PM`;
    } else {
      return `${hour - 12}:00 PM`;
    }
  };

  _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Row>
          <Col style={styles.avatarWrapper} size={0.5}>
            <Avatar.Image source={personImage} />
          </Col>
          <Col style={styles.textWrapper} size={2}>
            <Title>
              {this.props.name} {this.props.rating}
              <AntDesign name="star" size={18} color={YELLOW_COLOR} />
            </Title>
            <Subheading>
              {this._capitalizeFirstLetter(this.props.category)}{' '}
              {this._capitalizeFirstLetter(this.props.subject)}
            </Subheading>
          </Col>
          <Col size={1.5}>
            <Row style={{ alignItems: 'center' }}>
              <Text>
                Slot: {this._printHours(this.props.availabilitySlot.start)} to{' '}
                {this._printHours(this.props.availabilitySlot.end)}
              </Text>
            </Row>
            <Row style={{ flexDirection: 'column' }}>
              <Text>Wage(Per Hour): {this.props.wage}</Text>
              <Entypo
                name="compass"
                size={25}
                onPress={this._gotoTutorDetailScreen}
              />
            </Row>
          </Col>
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: WIDTH - 10,
    padding: 10,
    elevation: 1,
    borderRadius: 0,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  badgeWrapper: {
    position: 'absolute',
    bottom: 3,
    right: 0,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  textWrapper: {
    alignSelf: 'center',
    marginLeft: 25,
  },
  timeWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    marginRight: 10,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
  timeText: {
    fontWeight: '900',
    fontSize: 16,
  },
});

export default withNavigation(SearchResult);
