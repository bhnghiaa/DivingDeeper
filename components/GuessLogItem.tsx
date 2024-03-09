import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface GuessLogItemProps { }

const GuessLogItem = ({ item, index }) => {
    return (
        <View style={styles.log}>
            <Text style={styles.logText}>#{index + 1}</Text>
            <Text style={styles.logText}>Opponent's Guess: {item}</Text>

        </View>

    );
};

export default GuessLogItem;

const styles = StyleSheet.create({

    log: {
        padding: 5,
        width: '80%',
        marginHorizontal: '10%',
        backgroundColor: Colors.accent,
        marginVertical: 10,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: Colors.primary1,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        flexDirection: 'row',
    },
    logText: {},
});
