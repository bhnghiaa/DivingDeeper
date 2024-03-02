import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import PrimaryButton from '../components/PrimatyButton';
import Colors from '../constants/Colors';
import Title from '../components/Title';



const StartGameScreen = ({ onPickedNumber }) => {
    const [ enteredNumber, setEnteredNumber ] = useState('');
    const numberHandler = (enterdText) => {
        setEnteredNumber(enterdText);
    }
    const resetHandler = () => {
        setEnteredNumber('');
    }
    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99.',
                [ { text: 'Okay', style: 'destructive', onPress: resetHandler } ]);
        }
        else {
            onPickedNumber(chosenNumber);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <View style={styles.container}>
                <Text style={styles.text}>Enter a number</Text>
                <TextInput
                    style={styles.numberInput}
                    keyboardType='number-pad'
                    maxLength={2}
                    autoCapitalize='none'
                    onChangeText={numberHandler}
                    value={enteredNumber}
                />
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 30,
    },
    text: {
        color: Colors.accent,
        fontSize: 20,
        textAlign: 'center',
    },
    container: {
        height: 180,
        borderRadius: 10,
        marginTop: 50,
        paddingHorizontal: 20,
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: Colors.primary2,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        alignItems: "center",
        justifyContent: "center",
    },
    numberInput: {
        width: 40,
        textAlign: "center",
        borderBottomColor: Colors.accent,
        borderBottomWidth: 2,
        fontWeight: "bold",
        color: Colors.accent,
        fontSize: 32,
        marginVertical: 15,
    },
    btnContainer: {
        flexDirection: 'row',
    },
});
