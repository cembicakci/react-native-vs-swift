import React from 'react'
import { Button, Text, View } from 'react-native'
import { signOut } from "firebase/auth";
import { auth } from '../app/services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

    const navigation = useNavigation()

    const handleLogout = () => {
        signOut(auth).then(() => {
            AsyncStorage.removeItem('email').then(() => {
                navigation.navigate('LoginScreen')
            })

        }).catch((error) => {

        });
    }

    return (
        <View>
            <Button
                title='Logout'
                onPress={handleLogout}
            />
        </View>
    )
}

export default SettingsScreen
