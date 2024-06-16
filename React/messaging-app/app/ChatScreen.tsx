import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import ChatBubble from "@/components/ChatBubble";
import { Input } from "@rneui/themed";
import { io } from "socket.io-client";

const socket = io("ws://localhost:8000");

socket.on("connect", () => {
  console.log("connected");
});

socket.on("message", (data) => {
  console.log(data);
  // create chatbubble component
});

const ChatScreen = () => {
  const [message, setMessage] = useState("");

  return (
    <KeyboardAvoidingView style={styles.view}>
      <KeyboardAvoidingView style={styles.sendMessageTextBox}>
        <Input
          placeholder="Message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Pressable onPressIn={() => socket.emit("message", message)}>
          <Image source={require("../img/send_icon.svg")} />
        </Pressable>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  sendMessageTextBox: {
    position: "absolute",
    bottom: 0,
  },
});
