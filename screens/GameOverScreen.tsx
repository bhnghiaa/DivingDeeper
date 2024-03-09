import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimatyButton';
import Colors from '../constants/Colors';
interface componentNameProps { }

const GameOverScreen = ({ navigation, route }) => {
    const userNumber = route.params.userNumber;
    const roundNumber = route.params.roundNumber;

    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/success.jpg')} style={styles.img}></Image>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.textlight}>{roundNumber}</Text> rounds to guess the number <Text style={styles.textlight}>{userNumber}</Text></Text>
            <View style={styles.btnContainer}>
                <PrimaryButton onPress={() => navigation.navigate('StartGame')}>Start a new game</PrimaryButton>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        gap: 40,
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        borderBlockColor: 'black',
        borderWidth: 2,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    btnContainer: {
        flexDirection: 'row',
        width: '60%',
    },
    summaryText: {
        textAlign: 'center',
        fontSize: 20,
    },
    textlight: {
        color: Colors.primary1,
        fontWeight: 'bold'
    }
});

export default GameOverScreen;