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
import { ListItem } from "@rneui/base";

const socket = io("ws://localhost:8000");
const chatsOnScreen: String[] = [];

socket.on("connect", () => {
  console.log("connected");
});

socket.on("message", (data: string) => {
  chatsOnScreen.push(data);
});
// TODO: make it so users can't send empty strings
const ChatScreen = () => {
  const [message, setMessage] = useState("");

  const chatItems = chatsOnScreen.map((chat) => (
    <ChatBubble message={String(chat)} isSender={true} />
  ));

  return (
    <KeyboardAvoidingView style={styles.view}>
      <KeyboardAvoidingView style={styles.sendMessageTextBox}>
        <ListItem style={styles.chatBubbles}>
          <ListItem.Content>{chatItems}</ListItem.Content>
        </ListItem>
        <Input
          placeholder="Message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Pressable
          onPressIn={() => {
            if (message) {
              socket.emit("message", message);
            }
          }}
          onPressOut={() => setMessage("")}
        >
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
  chatBubbles: {},
});
