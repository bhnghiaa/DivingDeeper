import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimatyButton';

interface componentNameProps { }

const GameOverScreen = () => {
    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/success.jpg')} style={styles.img}></Image>
            </View>
            <PrimaryButton onPress={undefined}>Start new game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        gap: 50,
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
    }
});
