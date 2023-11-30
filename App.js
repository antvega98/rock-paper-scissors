import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { useState } from "react";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const makeMoves = (playerChoice) => {
    setPlayerChoice(playerChoice);
    setComputerChoice("rock");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "red",
      }}
    >
      {playerChoice == null ? (
        <>
          <Text>Rock / Paper / Scissors</Text>
          <Button
            title="rock"
            onPress={() => {
              makeMoves("rock");
            }}
          ></Button>
          <Button
            title="paper"
            onPress={() => {
              makeMoves("paper");
            }}
          ></Button>
          <Button
            title="scissors"
            onPress={() => {
              makeMoves("scissors");
            }}
          ></Button>
        </>
      ) : (
        <>
          <Text>You picked {playerChoice}</Text>
          <Text>Computer picked {computerChoice}</Text>
          <Button
            title="reset"
            onPress={() => {
              setPlayerChoice(null);
              setComputerChoice(null);
            }}
          ></Button>
        </>
      )}
    </SafeAreaView>
  );
}
