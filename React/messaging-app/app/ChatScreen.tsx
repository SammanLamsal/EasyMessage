import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import ChatBubble from "@/components/ChatBubble";
import { Input } from "@rneui/themed";
import { io } from "socket.io-client";

const socket = io("ws://localhost:8000");
//const [msg, setMsg] = useState("hi");

socket.on("connect", () => {
  console.log("connected");
});

socket.on("message", () => {});

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.view}>
      {/* <ChatBubble message={msg} isSender={true}></ChatBubble> */}
      <KeyboardAvoidingView style={styles.sendMessageTextBox}>
        <Input placeholder="Message" />
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
