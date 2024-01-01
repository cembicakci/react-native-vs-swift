import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AddScreen = () => {

    const handleAdd = () => {

    }
    
    return (
        <View>
            <TextInput placeholder='Pokemon Adı' style={styles.textInput} />
            <TextInput placeholder='Pokemon Id' style={styles.textInput} />
            <Button
                title='Ekle'
                onPress={() => { handleAdd() }}
            />
        </View>
    )
}

export default AddScreen

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 8,
        margin: 8
    }
})