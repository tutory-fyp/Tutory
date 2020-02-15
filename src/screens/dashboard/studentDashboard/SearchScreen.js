import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';
import {
    Appbar,
    TextInput as PInput,
    Text as PText,
} from 'react-native-paper';
import {
  Input,
  Slider as ESlider,
} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

let categories = [
    {
        value: 'FSC Pre-Engineering',
    }, {
        value: 'FSC Pre-Medical',
    }, {
        value: 'ICS',
    }, {
        value: 'Matric',
    }, {
        value: 'O Level',
    }, {
        value: 'A Level',
    }
];

let cities = [
    {
        value: 'Islamabad',
    },
    {
        value: 'Lahore',
    },
    {
        value: 'Karachi',
    },
]

class SearchScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            maxPrice: 0,
            maxDistance: 0,
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

    render() {
        return(
            <>
                <Appbar style={styles.header} >
                    <Appbar.BackAction onPress={this._goBack} />
                    <Appbar.Content title="Search for a Course" />
                </Appbar>
                <View style={styles.filter} >
                    <PInput
                        style={styles.subject}
                        label="Subject"
                        mode="outlined"
                    />
                    <Dropdown 
                        label="Categories"
                        data={categories}
                    />
                    <Dropdown
                        label="City"
                        data={cities}
                    />
                    <View style={styles.maxPriceWrapper} >
                        <PText style={styles.maxPriceLabel} >
                            Min Price: {this.state.maxPrice}
                        </PText>
                    </View>
                    <View style={styles.maxPriceWrapper} >
                        <PText style={styles.maxPriceLabel} >
                            Max Price: {this.state.maxDistance}
                        </PText>
                    </View>

                    <MultiSlider
                        values={[this.state.maxPrice, this.state.maxPrice]}
                        onValuesChange={(values) => {
                            this._handleMaxPrice(values[0]);
                            this._handleMaxDistance(values[1]);
                        }}
                        min={10}
                        max={100}
                        step={10}
                        selectedStyle={{backgroundColor: PRIMARY_COLOR}}
                        trackStyle={{backgroundColor: 'grey',}}
                        markerStyle={{backgroundColor: PRIMARY_COLOR, height: 20,width: 20,}}
                        values={[0,0]}
                        isMarkersSeparated={true}
                    />
                </View>
            </>
        );
    }
} 

const styles = StyleSheet.create({
    filter: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 25,
    },
    subject: {
        borderRadius: 10,
        color: 'blue',
    },
    maxPriceLabel: {

    },
    maxPrice: {

    },
});

export default SearchScreen;