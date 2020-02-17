import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Picker,
    ScrollView,
} from 'react-native';
import {
    Appbar,
    TextInput as PInput,
    Text as PText,
    Title as PTitle,
    Chip as PChip,
    Divider as PDivider,
    Button as PButton,
} from 'react-native-paper';
import {
  Input,
  Slider as ESlider,
} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

class SearchScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            minPrice: 500,
            maxPrice: 500,
            hours: '',
        };
        this._goBack = this._goBack.bind(this);
        this._handleMaxPrice = this._handleMaxPrice.bind(this);
        this._handleMaxDistance = this._handleMaxDistance.bind(this);
    }
    
    _handleMaxDistance(maxDistance) {
        this.setState({maxDistance})
    }

    _handleMaxPrice(maxPrice) {
        this.setState({maxPrice});
    }

    _goBack() {
        const {
            navigation: { goBack }
        } = this.props;
        goBack();
    }

    _handleCategorySelection = (category) => {
        this.setState({ category });
    }

    _handleLocationSelection = (location) => {
        this.setState({ location });
    }

    _handlePrice = ([minPrice, maxPrice]) => {
        this.setState({minPrice, maxPrice});
    }

    _handleHours = (hours) => {
        this.setState({hours});
    }

    render() {
        return(
            <ScrollView>
                <Appbar style={styles.header} >
                    <Appbar.BackAction onPress={this._goBack} />
                    <Appbar.Content title="Search for a Course" />
                </Appbar>
                <View style={styles.filter} >
                    <View style={styles.pickerWrapper} >
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.category}
                            onValueChange={this._handleCategorySelection}
                        >
                            <Picker.Item
                                color="grey"
                                label="Select a Category"
                                value="none"
                            />
                            <Picker.Item
                                label="FSC"
                                value="fsc"
                            />
                            <Picker.Item
                                label="Matric"
                                value="matric"
                            />
                            <Picker.Item
                                label="A-Level"
                                value="a_level"
                            />
                            <Picker.Item
                                label="O-Level"
                                value="o_level"
                            />
                        </Picker>
                    </View>
                    <View style={styles.pickerWrapper} >
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.location}
                            onValueChange={(location) => {
                                this.setState({ location });
                            }}
                        >
                            <Picker.Item
                                color="grey"
                                label="Select a Location"
                                value="none"
                            />
                            <Picker.Item
                                label="FSC"
                                value="fsc"
                            />
                            <Picker.Item
                                label="Matric"
                                value="matric"
                            />
                            <Picker.Item
                                label="A-Level"
                                value="a_level"
                            />
                            <Picker.Item
                                label="O-Level"
                                value="o_level"
                            />
                        </Picker>
                    </View>
                    <View style={styles.cpWrapper} >
                        <PTitle>
                            Course Price
                        </PTitle>
                        <View style={styles.cpContent} >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }} >
                                <View style={{
                                    height: 45,
                                    width: 100,
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} >
                                    <PText>
                                        Rs. {this.state.minPrice}
                                    </PText>
                                </View>
                                <PText style={{ alignSelf: 'center', marginHorizontal: 45 }} >
                                    to
                                </PText>
                                <View style={{
                                    height: 45,
                                    width: 100,
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} >
                                    <PText>
                                        Rs. {this.state.maxPrice}
                                    </PText>
                                </View>
                            </View>
                            <MultiSlider
                                values={[this.state.minPrice, this.state.maxPrice]}
                                selectedStyle={{ backgroundColor: PRIMARY_COLOR }}
                                markerStyle={{ backgroundColor: PRIMARY_COLOR }}
                                containerStyle={{ alignSelf: 'center' }}
                                min={500}
                                max={50000}
                                step={100}
                                onValuesChange={this._handlePrice}
                            />
                        </View>
                    </View>
                    <View style={styles.cpWrapper} >
                        <PTitle>
                            Hours
                        </PTitle>
                        <View style={styles.cpContent} >
                            <Picker
                                mode="dropdown"
                                selectedValue={this.state.hours}
                                onValueChange={this._handleHours}
                            >
                                <Picker.Item label="Select Hours" value="none" color="grey" />
                                <Picker.Item label="9:00 AM to 10:00 AM" value="9amto10am" />
                                <Picker.Item label="10:00 AM to 11:00 AM" value="10amto11am" />
                                <Picker.Item label="11:00 AM to 12:00 PM" value="11amto12pm" />
                                <Picker.Item label="12:00 PM to 1:00 PM" value="12pmto1pm" />
                                <Picker.Item label="1:00 PM to 2:00 PM" value="1pmto2pm" />
                                <Picker.Item label="2:00 PM to 3:00 PM" value="2pmto3pm" />
                                <Picker.Item label="3:00 PM to 4:00 PM" value="3pmto4pm" />
                                <Picker.Item label="4:00 PM to 5:00 PM" value="4pmto5pm" />
                                <Picker.Item label="5:00 PM to 6:00 PM" value="5pmto6pm" />
                                <Picker.Item label="6:00 PM to 7:00 PM" value="6pmto7pm" />
                                <Picker.Item label="7:00 PM to 8:00 PM" value="7pmto8pm" />
                                <Picker.Item label="8:00 PM to 9:00 PM" value="8pmto9pm" />
                                <Picker.Item label="9:00 PM to 10:00 PM" value="9pmto10pm" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.tagsWrapper} >
                        <PTitle style={{
                            marginLeft: 10,
                            height: 32,
                        }} >
                            Tags
                        </PTitle>
                        <PDivider style={{borderWidth: StyleSheet.hairlineWidth, marginBottom: 10,}} />
                        <View style={styles.ctContent} >
                            <PChip style={styles.ctChip} >
                                Maths
                            </PChip>
                            <PChip style={styles.ctChip} >
                                English
                            </PChip>
                            <PChip style={styles.ctChip} >
                                Physics
                            </PChip>
                        </View>
                    </View>
                    <PButton
                        style={styles.btn} 
                        mode="contained"
                        onPress={() => {

                        }}
                    >
                        Search
                    </PButton>
                </View>
            </ScrollView>
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
        width: "80%",
        alignSelf: 'center',
        marginTop: 10,
    }
});

export default SearchScreen;