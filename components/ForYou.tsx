import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import { body, primary } from "../constants/Color";
import Layout from "../constants/Layout";
interface ForYouProps { }
const prodcutData = [
    {
        id: 0,
        productImage: require("../assets/product/product1.png"),
        productExp: "Harris Tweed Three button Jacket",
        productPrice: "$120",
    },
    {
        id: 1,
        productImage: require("../assets/product/product2.png"),
        productExp: "Harris Tweed Three button Jacket",
        productPrice: "$120",
    },
    {
        id: 2,
        productImage: require("../assets/product/product3.png"),
        productExp: "Harris Tweed Three button Jacket",
        productPrice: "$120",
    },
    {
        id: 3,
        productImage: require("../assets/product/product4.png"),
        productExp: "Harris Tweed Three button Jacket",
        productPrice: "$120",
    },
]

export default function ForYou(props: ForYouProps) {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.scrolList}
        >
            {
                prodcutData.map((item, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                        >
                            <View style={styles.main}>
                                <TouchableOpacity>
                                    <Image
                                        source={item.productImage}
                                        style={styles.img}
                                        alt=""
                                    />
                                </TouchableOpacity>

                                <Text style={styles.pText}>{item.productExp}</Text>
                                <Text style={styles.pPrice}>{item.productPrice}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        height: 300,
        width: 200,
        alignItems: "center",
        marginTop: 25,
        marginLeft: 40,
        marginRight: 25,
        marginBottom: 50
    },
    img: {
        width: 240,
        height: 280,
        resizeMode: "contain",
    },
    pText: {
        fontSize: 15,
        textAlign: "center",
        marginTop: 5,
        color: body
    },
    pPrice: {
        fontSize: 16,
        color: primary,
        letterSpacing: 0.5,
        fontWeight: "600"
    },
    scrolList: {
        width: Layout.window.width,
    },
});