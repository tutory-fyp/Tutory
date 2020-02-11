import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, } from 'react-native-maps';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
} from 'react-native';
import { 
    Searchbar as PSearchbar
} from 'react-native-paper';
import {
    SearchBar as ESearchbar
} from 'react-native-elements';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/Octicons';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            pos: {
                coords: {
                    latitude: 37.4329967,
                    longitude: -122.1155667,
                }
            },
            query: {

            },
        }
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    pos: position,
                })
            },
            (error) => {
                if (error.code == 1) {
                    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                }
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
        setTimeout(() => this.forceUpdate(), 500);
    }

    render() {
        return (
            <>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: this.state.pos.coords.latitude,
                        longitude: this.state.pos.coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsCompass
                    onPress={(e) => {
                        this.setState({
                            currLatlong: {
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude,
                            }
                        });
                        let newMarkers = [...this.state.markers];
                        newMarkers.push({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        });
                        this.setState({
                            markers: newMarkers,
                        });
                    }}
                >
                    {
                        this.state.markers.map((val, index) => {
                            return (
                                <Marker
                                    key={index.toString()}
                                    coordinate={{
                                        longitude: val.longitude,
                                        latitude: val.latitude,
                                    }}
                                >

                                </Marker>
                            );
                        })
                    }
                </MapView>
                
            </>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        justifyContent: 'center',
        position: 'absolute',
        top: 55,
        bottom: 0,
        left: 0,
        right: 0,
    },
    searchbarWrapper: {
        height: 70,
        width: '90%',
        position: 'absolute',
        left: 25,
        top: 110,
    },
    searchbar: {
        width: '100%',
        height: 55,
    },
    filterIcon: {
        position: 'absolute',
        top: 50,
        zIndex: 10,
    },
});

export default HomeScreen;
