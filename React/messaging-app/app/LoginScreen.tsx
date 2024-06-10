import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        placeholder="Email"
        //value={}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Password"
        //value={}
        style={styles.input}
        secureTextEntry
      ></TextInput>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {},
  button: {},
  buttonContainer: {},
});
