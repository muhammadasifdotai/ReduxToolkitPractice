import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/AuthSlice";
import MyButton from "../../components/MyButton";

// dummyjson API work properly now, Testing with Axios API.

const LoginScreen = () => {

    // navigation
    const {navigate} = useNavigation()

    // states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // hooks
  const dispatch = useDispatch();
  const {userData, isLoading} = useSelector(state => state.auth);


    // function
    const handleLogin = () => {
        const params = {
            username: email,
            password: password,
        }
        console.log('param- login', params)
        // ya wo login function hay jo hum nay async kay through create kya hay, authSlice may.
        // .. ya jo login function hay ya 'async function' hay, ya jo actions hotay hay, ya special functions hay, ya aisay direct call nhi hongay, in ko dispatch kay ander call krain gay. or params ka data is may pass kr dain gay.
        dispatch(login(params));
    }

    return (
        <View>
            <Text style={styles.home}>Login</Text>
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
            {/* <TouchableOpacity style={styles.logout} onPress={handleLogin}>
                <Text isLoading ={isLoading} style={styles.text}>Login</Text>
            </TouchableOpacity> */}
            {/* <Button isLoading ={isLoading} title="Login" onPress={handleLogin}/> */}
            <MyButton isLoading={isLoading} title="Login" onPress={handleLogin} />
            <TouchableOpacity style={styles.logout} onPress={() => navigate('SignUpScreen')}>
                <Text style={styles.text}>Create an account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

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