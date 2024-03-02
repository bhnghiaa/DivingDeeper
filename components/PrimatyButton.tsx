import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/Colors';
interface PrimaryButtonProps { }
const pressHandler = () => {
    console.log('Button pressed');
}
const PrimaryButton = ({ children, onPress }) => {

    return (
        <View style={styles.btnOutnerContainer}>
            <Pressable style={styles.btnInnerContainer} onPress={onPress} android_ripple={{ color: Colors.primary2 }}>
                <Text style={styles.btnText}>{children}</Text>
            </Pressable>
        </View>

    );
};


const styles = StyleSheet.create({
    btnOutnerContainer: {
        flex: 1,
        overflow: 'hidden',
        marginHorizontal: "4%",
        borderRadius: 50,
    },
    btnInnerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: Colors.primary1,
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    btnText: {
        color: '#ffff',
        fontSize: 18,
    }
});

export default PrimaryButton;