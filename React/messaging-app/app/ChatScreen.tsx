import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import ChatBubble from "@/components/ChatBubble";
import { Input } from "@rneui/themed";

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.view}>
      <ChatBubble message="hi" isSender={true}></ChatBubble>
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
