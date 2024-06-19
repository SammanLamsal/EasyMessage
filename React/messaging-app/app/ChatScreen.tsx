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

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<String[]>([]);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("message", (data: string) => {
      setChats((prevChats) => [...prevChats, data]);
    });

    return () => {
      socket.off("message");
      socket.off("connect");
    };
  }, []);

  const chatItems = chats.map((chat, i) => (
    <ChatBubble key={i} message={String(chat)} isSender={true} />
  ));

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <ListItem>
          <ListItem.Content>{chatItems}</ListItem.Content>
        </ListItem>
        <View style={styles.sendIconAndTextBox}>
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
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  sendIconAndTextBox: {
    display: "flex",
    position: "relative",
  },
});
