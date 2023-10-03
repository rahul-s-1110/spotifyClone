import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  return (
    <LinearGradient style={{flex:1}} colors={["#040306","#131624"]}>
      <SafeAreaView>
        <Text>login</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}; 

export default LoginScreen;

const styles = StyleSheet.create({});
