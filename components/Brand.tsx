import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Layout from "../constants/Layout";
import { VStack, HStack } from "native-base";
const Brand = () => {

    return (
        <View style={styles.main}>
            <Image
                source={require("../assets/icon/line.png")}
                style={styles.line}
            />
            <VStack space={5}>
                <HStack style={{ justifyContent: "center", alignItems: "center", marginTop:10 }} space={6}>
                    <Image
                        source={require("../assets/brand/Prada.png")}
                        style={styles.bLogo}
                    />
                    <Image
                        source={require("../assets/brand/Burberry.png")}
                        style={styles.bLogo}
                    />
                    <Image
                        source={require("../assets/brand/Boss.png")}
                        style={styles.bLogo}
                    />
                </HStack>
                <HStack style={{ justifyContent: "center", alignItems: "center" }} space={6}>
                    <Image
                        source={require("../assets/brand/Catier.png")}
                        style={styles.bLogo}
                    />
                    <Image
                        source={require("../assets/brand/Gucci.png")}
                        style={styles.bLogo}
                    />
                    <Image
                        source={require("../assets/brand/Tiffany.png")}
                        style={styles.bLogo}
                    />
                </HStack>
            </VStack>
            <Image
                source={require("../assets/icon/line.png")}
                style={styles.line}
            />
        </View>
    );
};

export default Brand;

// -- STYLES -- //
const styles = StyleSheet.create({
    main: {
        height: 200,
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 20,
    },
    line: {
        width: 200,
        height: 15,
        alignSelf: "center",
        resizeMode:"contain",
        marginTop: 10
    },
    bLogo: {
        width: 100,
        height: 50,
        resizeMode: "contain"
    }
});
