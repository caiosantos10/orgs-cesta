import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet } from "react-native";

import MyText from "../../../components/MyText";

import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Top({ title }) {
    return <SafeAreaView>
        <Image source={topo} style={styles.top} />
        <MyText style={styles.title}>{ title }</MyText>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 578 / 768 * width
     },
     title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
     }
})