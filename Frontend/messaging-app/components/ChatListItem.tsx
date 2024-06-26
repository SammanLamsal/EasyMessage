import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";

export default function ChatListItem({ name }: { name: string }) {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}
