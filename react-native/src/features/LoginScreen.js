import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { auth } from '../app/services/firebase'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('cmbicakci@gmail.com')
    const [password, setPassword] = useState('111111')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await AsyncStorage.setItem('email', user.email)
                navigation.navigate('HomeStack')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.message)
            });
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await AsyncStorage.setItem('email', user.email)
                navigation.navigate('HomeStack')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.message)
            });

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

            <Button
                title='Sign Up'
                onPress={handleSignUp}
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