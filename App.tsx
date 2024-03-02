import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
interface AppProps { }

const App = (props: AppProps) => {
  const [ userNumber, setUserNumber ] = React.useState();
  const [ isGameOver, setIsGameOver ] = React.useState(true);
  const [ guessRounds, setguessRounds ] = React.useState(0);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  const onGameOverHandler = (number) => {
    setIsGameOver(true);
    setguessRounds(number);
  }
  const startNewGameHandler = () => {
    setUserNumber(null);
    setIsGameOver(true);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={onGameOverHandler} />
  }
  if (isGameOver && userNumber) {
    screen = <GameOverScreen onStartNewGame={startNewGameHandler} userNumber={userNumber} roundNumber={guessRounds} />
  }

  return (
    <LinearGradient colors={[ Colors.primary2, Colors.accent ]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.imgbgr}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imgbgr: {
    opacity: 0.15,
  },
});

export default App;