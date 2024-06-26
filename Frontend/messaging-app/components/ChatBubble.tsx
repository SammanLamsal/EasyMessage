import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatBubble = ({
  message,
  isSender,
}: {
  message: string;
  isSender: boolean;
}) => {
  return (
    <View
      style={[
        styles.bubble,
        isSender ? styles.senderBubble : styles.receiverBubble,
      ]}
    >
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    flexShrink: 1,
  },
  senderBubble: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  receiverBubble: {
    backgroundColor: "#E5E5EA",
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  messageText: {
    color: "#fff",
  },
});

export default ChatBubble;
