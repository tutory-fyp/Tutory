import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePickerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>
                    This is ImagePickerScreen Component
                </Text>
                <Button 
                    title="Image Picker"
                    onPress={ async () => {
                        // try {
                        //     const granted = await PermissionsAndroid.request(
                        //         PermissionsAndroid.PERMISSIONS.CAMERA,
                        //         {
                        //             title: 'Cool Photo App Camera Permission',
                        //             message:
                        //                 'Cool Photo App needs access to your camera ' +
                        //                 'so you can take awesome pictures.',
                        //             buttonNeutral: 'Ask Me Later',
                        //             buttonNegative: 'Cancel',
                        //             buttonPositive: 'OK',
                        //         },
                        //     );
                        //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //         console.log('You can use the camera');
                        //     } else {
                        //         console.log('Camera permission denied');
                        //     }
                        // } catch (err) {
                        //     console.warn(err);
                        // }
                        // try {
                        //     let res = await ImagePicker.openCamera({
                        //         width: 300,
                        //         height: 400,
                        //         cropping: true
                        //     });
                        //     console.log(res);
                        // } catch (error) {
                        //     console.warn(error);
                        // }
                        const options = {
                            title: 'Select Avatar',
                            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
                            storageOptions: {
                                skipBackup: true,
                                path: 'images',
                            },
                        };

                        /**
                         * The first arg is the options object for customization (it can also be null or omitted for default options),
                         * The second arg is the callback which sends object: response (more info in the API Reference)
                         */
                        ImagePicker.showImagePicker(options, (response) => {
                            console.log('Response = ', response);

                            if (response.didCancel) {
                                console.log('User cancelled image picker');
                            } else if (response.error) {
                                console.log('ImagePicker Error: ', response.error);
                            } else if (response.customButton) {
                                console.log('User tapped custom button: ', response.customButton);
                            } else {
                                const source = { uri: response.uri };

                                // You can also display the image using data:
                                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                                this.setState({
                                    avatarSource: source,
                                });
                            }
                        });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
});

export default ImagePickerScreen;