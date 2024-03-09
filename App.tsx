import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
interface AppProps { }

const App = (props: AppProps) => {

  return (
    <NavigationContainer>
      <LinearGradient colors={[ Colors.primary2, Colors.accent ]} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/background.jpg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.imgbgr}
        >
          <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" }, }}>
            <Stack.Screen name="StartGame" component={StartGameScreen} />
            <Stack.Screen name="Game" component={GameScreen} options={{ animation: 'slide_from_left' }} />
            <Stack.Screen name="GameOver" component={GameOverScreen} options={{ animation: 'slide_from_left' }} />
          </Stack.Navigator>
        </ImageBackground>
      </LinearGradient>
    </NavigationContainer>
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