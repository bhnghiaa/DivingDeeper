import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
interface TitleProps { }

const Title = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    title: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: Colors.white,
        marginTop: 80,
        marginHorizontal: '15%',
        paddingHorizontal: 10,
    },
});

export default Title;