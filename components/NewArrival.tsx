import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { body } from "../constants/Color";
interface NewArrivalProps {
    productImage: any;
    productEx: string;
    productPr: string;
}
export default function NewArrival(props: NewArrivalProps) {
    return (
        <View style={styles.main}>
            <TouchableOpacity>
                <Image
                    source={props.productImage}
                    alt=""
                    style={styles.pImage}
                />
            </TouchableOpacity>

            <Text style={styles.pText}>{props.productEx}</Text>
            <Text style={styles.pPrice}>{props.productPr}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: 170,
        justifyContent: "center",
        alignItems: "center",

    },
    pImage: {
        width: 190,
        height: 190,
        resizeMode: "contain",
        marginTop: 10
    },
    pText: {
        fontSize: 13,
        textAlign: "center",
        color: body,
        marginTop: 5
    },
    pPrice: {
        fontSize: 16,
        color: "#DD8560",
        fontWeight: "700",
        letterSpacing: 0.5,
        marginBottom: 5,
        alignSelf: "center"
    }
});