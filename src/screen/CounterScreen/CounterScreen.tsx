import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/features/counterSlice";

const CounterScreen = () => {
    const dispatch = useDispatch()
    // state.counter: ya wo counter hay jo store may add kya hay.
    // counter: yaha pr aik reducers hay jis ki value hum update krna chahtay hay
    // jaha bhi useSelector use kya us ko btayee k mughay ko say reducer ka data chahyee
    const count = useSelector(state => state.counter.Value)
    console.log('counterSlice count', count)
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{count}</Text>
            <TouchableOpacity style={styles.add} onPress={() => dispatch(increment())}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.add} onPress={() => dispatch(decrement())}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CounterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 55,
        color: 'black',
    },
    add: {
        borderWidth: 1,
        height: 50,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 11,
        backgroundColor: 'orange',
        marginVertical: 11,
    },
    text: {
        color: 'white',
        fontSize: 33,
    }
})