import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface NumberContainerProps { }

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        borderColor: Colors.accent,
        borderWidth: 4,
        borderRadius: 8,
        margin: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: Colors.accent,
        fontWeight: 'bold',
    }
});
