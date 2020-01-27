import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  StyleSheet, 
} from 'react-native';

export default class HomeScreen extends Component {
render() {
    return (
      <>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

