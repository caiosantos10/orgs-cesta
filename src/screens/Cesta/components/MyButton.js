import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import MyText from "../../../components/MyText";

export default function MyButton({children, onPress, style}) {
    return <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
            <MyText style={styles.buttonText}>{children}</MyText>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6  
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold'
    }    
})