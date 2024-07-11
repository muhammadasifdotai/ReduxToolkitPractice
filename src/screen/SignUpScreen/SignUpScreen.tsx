import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

const SignUpScreen = () => {
    const {navigate} = useNavigation()
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')

    return (
        <View>
            <Text style={styles.home}>SignUp</Text>
            <TextInput
            value={firstName}
            placeholder="Enter First Name"
            onChangeText={setFirstName}
            style={styles.input}
            />
            <TextInput
            value={lastName}
            placeholder="Enter Last Name"
            onChangeText={setLastName}
            style={styles.input}
            />
            <TextInput
            value={email}
            placeholder="Enter Email"
            onChangeText={setEmail}
            style={styles.input}
            />
            <TextInput
            value={password}
            placeholder="Enter password"
            onChangeText={setPassword}
            style={styles.input}
            />
            <TextInput
            value={number}
            placeholder="Enter Number"
            onChangeText={setNumber}
            style={styles.input}
            />
            <TouchableOpacity style={styles.logout} onPress={() => navigate('HomeScreen')}>
                <Text style={styles.text}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logout} onPress={() => navigate('Screen')}>
                <Text style={styles.text}>Already have an account Sign</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    home: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 22,
        color: 'black'
    },
    input: {
        width: 340,
        height: 49,
        borderWidth: 1,
        marginHorizontal: 22,
        borderRadius: 11,
        justifyContent: 'center',
        backgroundColor: 'silver',
        paddingLeft: 11,
        marginTop: 22,
    },
    logout: {
        width: 340,
        height: 49,
        borderWidth: 1,
        marginHorizontal: 22,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        marginTop: 22,
    },
    text: {
        fontSize: 22,
        color: 'white',
    }
})