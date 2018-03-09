import React from 'react';
import {View, Stylsheet, Text, TextInput} from 'react-native';

const Input = (label, value, onChangeText, placeholder) => {
    return(
        <View>
            <Text>Label</Text>
            <TextInputs
            autocorrect = {false}
            onChangeText = {onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        border: '#eee',
        borderBottomWidth: 2,
    }
})