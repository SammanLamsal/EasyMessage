import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import ChatListItem from "@/components/ChatListItem";
import { Button } from "@rneui/base";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Signal Clone</Text>
        <Link href="/AddChatScreen/" asChild>
          <Button style={styles.button}>Add Chat</Button>
        </Link>
      </View>
      <ScrollView>
        <ChatListItem name="TESTTEST" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A9A9A9",
    flex: 1,
  },
  headerText: {
    resizeMode: "contain",
    color: "#FFF",
    fontFamily: "tahoma",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    height: 100,
  },
  button: {
    alignItems: "flex-end",
    paddingRight: 20,
    color: "#FFF",
  },
});
