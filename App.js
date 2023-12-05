import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { useState } from "react";

const MOVES = ["rock", "paper", "scissors"];

function getRandomArrayElement(arr) {
  return Math.floor(Math.random() * arr.length);
}

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [outcome, setOutcome] = useState(null);

  const makeMoves = (pChoice) => {
    setPlayerChoice(pChoice);
    const cChoice = MOVES[getRandomArrayElement(MOVES)];
    setComputerChoice(cChoice);
    determineOutcome(pChoice, cChoice);
  };

  const determineOutcome = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setOutcome("It's a tie!");
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      setOutcome("You win!");
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setOutcome("You lose!");
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setOutcome("You lose!");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setOutcome("You win!");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setOutcome("You win!");
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setOutcome("You lose!");
    } else {
      console.log("Something went wrong.");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
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
          <Text>{outcome}</Text>
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
