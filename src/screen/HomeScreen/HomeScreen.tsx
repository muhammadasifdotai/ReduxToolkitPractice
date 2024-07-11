import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const HomeScreen = () => {
    const {navigate} = useNavigation()
    return (
        <View>
            <Text style={styles.home}>Home Screen</Text>
            <TouchableOpacity style={styles.logout} onPress={() => navigate('LoginScreen')}>
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    home: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 22,
        color: 'black'
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