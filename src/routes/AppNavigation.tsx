import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native'; // for navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // for stack navigation
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import SignUpScreen from "../screen/SignUpScreen/SignUpScreen";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import CounterScreen from "../screen/CounterScreen/CounterScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator(); // is a function which have two propes i. navigation and screen

const AppNavigation = () => {
  // const userData = false
  // initialState wala userData jo AuthSlice may hay usay yaha hum nay deStructure kr leyee hay.
  const {userData} = useSelector(state => state.auth);
  console.log(
    '🚀 ~ file: AppNavigation ~ AppNavigation ~ userData:',
    userData,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData ? (
          <Stack.Group>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
          </Stack.Group>
        ): (
          <Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="CounterScreen" component={CounterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;

const styles = StyleSheet.create({})