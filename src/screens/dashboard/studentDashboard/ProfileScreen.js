import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import {
	Appbar,
	Avatar,
} from 'react-native-paper';
import Ripple from 'react-native-material-ripple';
import {
	personImage,
} from '../../../constants/images';
import {
	PRIMARY_COLOR,
} from '../../../constants/commonColors';

class ProfileScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<View style={styles.container} >
				<Appbar style={styles.header} >
					<Appbar.Action icon="menu" onPress={this.props.navigation.openDrawer} />
					<Appbar.Content title="Profile" />
				</Appbar>
				<View style={styles.content} >
					<Avatar.Image
						size={150}
						source={personImage}
					/>
					<Ripple>
						<Text style={{
							marginTop: 5,
							fontSize: 15,
							color: PRIMARY_COLOR,
						}} >
							Change Profile Picture
						</Text>
					</Ripple>
				</View>
				<View style={{
					marginTop: 30,
				}} >
					<View style={{
						flexDirection: 'row',
						marginLeft: 10,
					}} >
						<Text style={{
							fontSize: 20,
						}} >
							Name:
						</Text>
						<Text style={{
							marginLeft: 10,
							fontSize: 20,
						}} >
							John Doe 
						</Text>
					</View>
					<View style={{
						marginVertical: 12,
						borderBottomWidth: StyleSheet.hairlineWidth,
					}} />
					<View style={{
						flexDirection: 'row',
						marginLeft: 10,
					}} >
						<Text style={{
							fontSize: 20,
						}} >
							Email:
						</Text>
						<Text style={{
							marginLeft: 10,
							fontSize: 20,
						}} >
							test123@test.com
						</Text>
					</View>
					<View style={{
						marginVertical: 13,
						borderBottomWidth: StyleSheet.hairlineWidth,
					}} />
					<View style={{
						flexDirection: 'row',
						marginLeft: 10,
					}} >
						<Text style={{
							fontSize: 20,
						}} >
							Qualification:
						</Text>
						<Text style={{
							marginLeft: 10,
							fontSize: 20,
						}} >
							Matric
						</Text>
					</View>
					<View style={{
						marginVertical: 13,
						borderBottomWidth: StyleSheet.hairlineWidth,
					}} />
					<View style={{
						flexDirection: 'row',
						marginLeft: 10,
					}} >
						<Text style={{
							fontSize: 20,
						}} >
							Contact:
						</Text>
						<Text style={{
							marginLeft: 10,
							fontSize: 20,
						}} >
							555-555-555
						</Text>
					</View>
					<View style={{
						marginVertical: 14,
						borderBottomWidth: StyleSheet.hairlineWidth,
					}} />
					<View style={{
						flexDirection: 'row',
						marginLeft: 10,
					}} >
						<Text style={{
							fontSize: 20,
						}} >
							Address:
						</Text>
						<Text style={{
							marginLeft: 10,
							fontSize: 20,
						}} >
							Block A, Sector B-17, Islamabad 
						</Text>
					</View>
					<View style={{
						marginVertical: 14,
						borderBottomWidth: StyleSheet.hairlineWidth,
					}} />
				</View>
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
		alignItems: 'center',
	}
});

export default ProfileScreen;