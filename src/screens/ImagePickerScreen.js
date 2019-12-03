import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

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
                        try {
                            const granted = await PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.CAMERA,
                                {
                                    title: 'Cool Photo App Camera Permission',
                                    message:
                                        'Cool Photo App needs access to your camera ' +
                                        'so you can take awesome pictures.',
                                    buttonNeutral: 'Ask Me Later',
                                    buttonNegative: 'Cancel',
                                    buttonPositive: 'OK',
                                },
                            );
                            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                console.log('You can use the camera');
                            } else {
                                console.log('Camera permission denied');
                            }
                        } catch (err) {
                            console.warn(err);
                        }
                        try {
                            let res = await ImagePicker.openPicker({
                                width: 300,
                                height: 400,
                                cropping: true
                            });
                            console.log(res);
                        } catch (error) {
                            console.warn(error);
                        }
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