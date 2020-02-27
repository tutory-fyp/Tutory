import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import {
    Appbar,
} from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '../../../constants/apiKeys';

class MapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mark1: {
                latitude: 33.679211,
                longitude: 73.001575,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            mark2: {
                latitude: 33.687496,
                longitude: 73.036165,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421, 
            }
        };
    }

    _goBack = () => {
        const {
            navigation: {
                goBack
            }
        } = this.props;
        goBack();
    }

    render() {
        return (
            <View style={styles.container} >
                <Appbar style={styles.header} >
                    <Appbar.BackAction onPress={this._goBack} />
                    <Appbar.Content title="Map" />
                </Appbar>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 33.679211,
                        longitude: 73.001575,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsMyLocationButton={true}
                >
                    <Marker 
                        coordinate={this.state.mark1}
                    />
                    <Marker
                        coordinate={this.state.mark2}
                    />
                    <Polyline 
                        coordinates={[this.state.mark1, this.state.mark2]}
                    />
                    <MapViewDirections
                        origin={this.state.mark1}
                        destination={this.state.mark2}
                        apikey={GOOGLE_MAPS_API_KEY}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 8,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        top: 50,
    }
});

export default MapScreen;