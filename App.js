import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);

  function handleAddItem() {
    setTask([...task, item]);
  }
  function handleInputText(text) {
    setItem(text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleInputText} style={styles.input} placeholder="Zadaj task" />
        <Button onPress={handleAddItem} style={styles.inputButton} title="Pridať!" />
      </View>

      <View style={styles.udalosti}>
        <FlatList data={task} renderItem={({ item }) => <Text>{item}</Text>} keyExtractor={(item, index) => item.toString()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    margin: 2,
    flex: 1,
  },
  input: {
    borderWidth: 3,
    borderRadius: 4,
    bordercolor: "  #0098f7",
  },
  inputContainer: {
    justifyContent: "center",
    flex: 0.3,
    backgroundColor: "#fbf3f3",
    alignItems: "center",
    flexDirection: "block",
  },
  udalosti: {
    flex: 1,
    backgroundColor: "#0098f7",
  },
  inputButton: {},
});
