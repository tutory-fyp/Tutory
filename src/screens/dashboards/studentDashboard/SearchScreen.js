import React, { Component } from 'react';
import { StyleSheet, View, Picker, ScrollView, Alert } from 'react-native';
import {
  Appbar,
  TextInput as PInput,
  Text as PText,
  Title as PTitle,
  Chip as PChip,
  Divider as PDivider,
  Button as PButton,
} from 'react-native-paper';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'none',
      subject: 'none',
      minPrice: 100,
      maxPrice: 500,
      minHour: 10,
      maxHour: 11,
      hours: '',
    };
    this._goBack = this._goBack.bind(this);
    this._handleMaxPrice = this._handleMaxPrice.bind(this);
    this._handleMaxDistance = this._handleMaxDistance.bind(this);
  }

  _handleMaxDistance(maxDistance) {
    this.setState({ maxDistance });
  }

  _handleMaxPrice(maxPrice) {
    this.setState({ maxPrice });
  }

  _gotoSearchResultScreen = () => {
    if (this.state.category === 'none') {
      Alert.alert('Category Not Selected', 'Please Select a Category', ['OK']);
      return;
    }
    if (this.state.subject === 'none') {
      Alert.alert('Subject Not Selected', 'Please Select a Subject', ['OK']);
      return;
    }
    this.props.navigation.navigate('SearchResult', {
      query: {
        category: this.state.category,
        subject: this.state.subject,
        minHour: this.state.minHour,
        maxHour: this.state.maxHour,
        minPrice: this.state.minPrice,
        maxPrice: this.state.maxPrice,
      },
    });
  };

  _goBack() {
    const {
      navigation: { goBack },
    } = this.props;
    goBack();
  }

  _handleSubjectSelection = subject => {
    this.setState({ subject });
  };

  _handleCategorySelection = category => {
    this.setState({ category });
  };

  _handleLocationSelection = location => {
    this.setState({ location });
  };

  _handlePrice = ([minPrice, maxPrice]) => {
    this.setState({ minPrice, maxPrice });
  };

  _handleHours = ([minHour, maxHour]) => {
    this.setState({ minHour, maxHour });
  };

  _handleHoursPrinting = hour => {
    if (hour < 12) {
      return `${hour}:00 AM`;
    } else if (hour === 12) {
      return `${hour}:00 PM`;
    } else {
      return `${hour - 12}:00 PM`;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Appbar style={styles.header}>
            <Appbar.BackAction onPress={this._goBack} />
            <Appbar.Content title="Search for a Course" />
          </Appbar>
          <View style={styles.filter}>
            <View style={styles.pickerWrapper}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.category}
                onValueChange={this._handleCategorySelection}>
                <Picker.Item
                  color="grey"
                  label="Select a Category"
                  value="none"
                />
                <Picker.Item label="Matric" value="matric" />
                <Picker.Item label="FSC" value="fsc" />
                <Picker.Item label="O-Level" value="o_level" />
                <Picker.Item label="A-Level" value="a_level" />
              </Picker>
            </View>
            <View style={styles.pickerWrapper}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.subject}
                onValueChange={this._handleSubjectSelection}>
                <Picker.Item
                  color="grey"
                  label="Select a Subject"
                  value="none"
                />
                <Picker.Item label="Maths" value="maths" />
                <Picker.Item label="Physics" value="physics" />
                <Picker.Item label="Chemistry" value="chemistry" />
                <Picker.Item label="English" value="english" />
                <Picker.Item label="Computer Science" value="comp_science" />
                <Picker.Item label="Biology" value="biology" />
              </Picker>
            </View>
            <View style={styles.cpWrapper}>
              <PTitle>Tutor Wage(Per Hour)</PTitle>
              <View style={styles.cpContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: 45,
                      width: 100,
                      borderWidth: 1,
                      borderColor: 'black',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <PText>Rs. {this.state.minPrice}</PText>
                  </View>
                  <PText style={{ alignSelf: 'center', marginHorizontal: 45 }}>
                    to
                  </PText>
                  <View
                    style={{
                      height: 45,
                      width: 100,
                      borderWidth: 1,
                      borderColor: 'black',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <PText>Rs. {this.state.maxPrice}</PText>
                  </View>
                </View>
                <MultiSlider
                  values={[this.state.minPrice, this.state.maxPrice]}
                  selectedStyle={{ backgroundColor: PRIMARY_COLOR }}
                  markerStyle={{ backgroundColor: PRIMARY_COLOR }}
                  containerStyle={{ alignSelf: 'center' }}
                  min={100}
                  max={500}
                  step={10}
                  onValuesChange={this._handlePrice}
                />
              </View>
            </View>
            <View style={styles.cpWrapper}>
              <PTitle>Availability Slot</PTitle>
              <View style={styles.cpContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: 45,
                      width: 100,
                      borderWidth: 1,
                      borderColor: 'black',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <PText>
                      {this._handleHoursPrinting(this.state.minHour)}
                    </PText>
                  </View>
                  <PText style={{ alignSelf: 'center', marginHorizontal: 45 }}>
                    to
                  </PText>
                  <View
                    style={{
                      height: 45,
                      width: 100,
                      borderWidth: 1,
                      borderColor: 'black',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <PText>
                      {this._handleHoursPrinting(this.state.maxHour)}
                    </PText>
                  </View>
                </View>
                <MultiSlider
                  values={[this.state.minHour, this.state.maxHour]}
                  selectedStyle={{ backgroundColor: PRIMARY_COLOR }}
                  markerStyle={{ backgroundColor: PRIMARY_COLOR }}
                  containerStyle={{ alignSelf: 'center' }}
                  min={10}
                  max={22}
                  step={1}
                  onValuesChange={this._handleHours}
                />
              </View>
            </View>
            <PButton
              style={styles.btn}
              mode="contained"
              onPress={this._gotoSearchResultScreen}>
              Search
            </PButton>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filter: {
    flex: 1,
  },
  header: {
    marginBottom: 25,
  },
  pickerWrapper: {
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  cpWrapper: {
    marginLeft: 10,
  },
  chWrapper: {
    marginLeft: 10,
  },
  cpContent: {
    paddingHorizontal: 10,
  },
  ctContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ctChip: {
    marginHorizontal: 5,
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default SearchScreen;
