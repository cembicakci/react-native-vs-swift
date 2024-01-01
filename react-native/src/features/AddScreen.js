import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useAddPokemonMutation } from '../app/services/pokemonApi';
import { useNavigation } from '@react-navigation/native';

const AddScreen = () => {
    const navigation = useNavigation()

    const [addPokemon, state] = useAddPokemonMutation()

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Required'),
        pokemonId: Yup.number()
            .required('Required'),
    });


    return (
        <View>
            <Formik
                initialValues={{
                    name: '',
                    pokemonId: '',
                }}
                validationSchema={Schema}
                onSubmit={values => {
                    if (!state.error) {
                        addPokemon(values)
                        navigation.goBack()
                    }

                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <TextInput
                            placeholder='Pokemon Name'
                            style={styles.textInput}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        {errors.name && <Text>{errors.name}</Text>}
                        <TextInput
                            placeholder='Pokemon Id'
                            style={styles.textInput}
                            onChangeText={handleChange('pokemonId')}
                            onBlur={handleBlur('pokemonId')}
                            value={values.pokemonId}
                        />
                        {errors.pokemonId && <Text>{errors.pokemonId}</Text>}
                        <Button
                            title='Ekle'
                            onPress={() => { handleSubmit() }}
                        />
                    </>
                )}
            </Formik>
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