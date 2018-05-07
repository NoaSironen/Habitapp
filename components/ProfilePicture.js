import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, NativeModules, PropTypes } from 'react-native';
import firebase from 'react-native-firebase';

export default class ProfilePicture extends Component {

    onPressProfilePicture() {
        NativeModules.ImagePickerManager.showImagePicker({
            title: 'Set Profile Picture',
        }, (picture) => {
            if (picture.data) {
                this.setState({
                    profilePicture: {
                        uri: 'data:image/jpeg;base64,' + picture.data, isStatic: true
                    }
                });
            }
        }
        )
    }
    render() {
        return (
            <View>
            </View>
        )
    }
}