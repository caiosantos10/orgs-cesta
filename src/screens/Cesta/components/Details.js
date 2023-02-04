import React from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";

import MyText from "../../../components/MyText";
import MyButton from "./MyButton";

export default function Details({ name, logo, farmName, description, price, button }) {
    return <SafeAreaView>
        <MyText style={styles.name}>{ name }</MyText>
        <View style={styles.farm}>
            <Image source={logo} style={styles.farmImage}></Image>
            <MyText style={styles.farmName}>{ farmName }</MyText>
        </View>
        <MyText style={styles.description}>
            { description }
        </MyText>
        <MyText style={styles.price}>{ price }</MyText>

        <MyButton style={styles.button} onPress={ () => {} }>{button}</MyButton>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12
    },  
    farmImage: {
        width: 32,
        height: 32

    },  
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    button: {
        marginTop: 16,
    }
})