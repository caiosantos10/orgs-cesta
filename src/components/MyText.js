import React from "react";
import { StyleSheet, Text } from "react-native";

export default function MyText({ children, style }) {
    let customStyle = styles.text;

    if (style?.fontWeight === 'bold') {
        customStyle = styles.boldText;
    }

    return <Text style={[style, customStyle]}>{ children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    boldText: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})