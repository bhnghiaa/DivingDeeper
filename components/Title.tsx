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

    },
    title: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.white,
        marginTop: 80,
        marginHorizontal: '12%',
        paddingVertical: 12,
        paddingHorizontal: 5,
    },
});

export default Title;