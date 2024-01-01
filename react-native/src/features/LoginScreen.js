import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {

    const [email, setEmail] = useState('cmbicakci@gmail.com')
    const [password, setPassword] = useState('111111')

    const handleLogin = () => {

    }

    return (
        <View>
            <TextInput
                placeholder='Email'
                style={styles.textInput}
                onChangeText={setEmail}
                value={email}
            />

            <TextInput
                placeholder='Password'
                style={styles.textInput}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <Button
                title='Login'
                onPress={handleLogin}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 8,
        margin: 8
    }
})