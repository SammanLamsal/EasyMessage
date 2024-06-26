import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { router } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential: any) => {
        const user = userCredential.user;
        sendEmailVerification(user).then(() => {
          alert(
            "Verification email sent to " +
              user.email +
              ", please verify to continue."
          );
          auth.signOut();
        });
      })
      .catch((error: any) => alert(error.message));
  };

  let user;
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        user = userCredential.user;
        if (user.emailVerified) {
          router.navigate("ChatScreen");
        } else {
          alert("Email not verified.");
          auth.signOut();
        }
      })
      .catch((error: any) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={login} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity onPress={signUp} style={styles.button}>
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
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 5,
    borderRadius: 20,
  },
  inputContainer: {
    width: "80%",
  },
  button: {
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonContainer2: {
    width: "60%",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
