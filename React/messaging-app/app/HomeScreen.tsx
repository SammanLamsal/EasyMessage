import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenConversation from '@/components/HomeScreenConversation'

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Signal Clone</Text>
      </View>
      <ScrollView>
        <HomeScreenConversation>
          
        </HomeScreenConversation>
      </ScrollView>
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#A9A9A9",
    flex: 1
  },
  headerText: {
    resizeMode: "contain",
    color:"#FFF",
    fontFamily: "tahoma",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 10
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    height: 100
  }
})