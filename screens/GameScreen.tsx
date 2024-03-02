import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Alert, Pressable } from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimatyButton';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

interface GameScreenProps { }

const generateRandomNumber = (min: number, max: number, exclude: number) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initGuess = generateRandomNumber(1, 100, userNumber);
    const [ currentGuess, setcurrentGuess ] = React.useState(initGuess);
    React.useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [ currentGuess, userNumber, onGameOver ])

    const nextGuessHandler = (direction) => {
        if (direction === 'lower' && currentGuess < userNumber || direction === 'greater' && currentGuess > userNumber) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [ { text: 'Sorry!', style: 'cancel' } ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setcurrentGuess(newRndNum);
        console.log(minBoundary, maxBoundary, userNumber, currentGuess);
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.card}>
                <Text style={styles.text}>Higher or Lower</Text>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                        <AntDesign name="minus" size={22} color={Colors.white} />
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                        <AntDesign name="plus" size={22} color={Colors.white} />
                    </PrimaryButton>
                </View>
            </View>

        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    text: {
        color: Colors.accent,
        fontSize: 20,
        textAlign: 'center',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: '10%',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        marginTop: 10,
        overflow: 'hidden',
    }
});
