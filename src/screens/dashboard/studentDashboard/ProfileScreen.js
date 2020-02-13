import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

export default class ProfileScreen extends Component {
	render() {
		return (
			<View style={styles.container} >
				<Text>
					This will be the potential search screen
				</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

