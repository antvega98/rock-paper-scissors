import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  return (
    <SafeAreaView>
      {data == null ? (
        <>
          <Text>Rock / Paper / Scissors</Text>
          <Button
            title="rock"
            onPress={() => {
              setData("rock");
            }}
          ></Button>
          <Button
            title="paper"
            onPress={() => {
              setData("paper");
            }}
          ></Button>
          <Button
            title="scissors"
            onPress={() => {
              setData("scissors");
            }}
          ></Button>
        </>
      ) : (
        <>
          <Text>You picked {data}</Text>
          <Button
            title="reset"
            onPress={() => {
              setData(null);
            }}
          ></Button>
        </>
      )}
    </SafeAreaView>
  );
}
