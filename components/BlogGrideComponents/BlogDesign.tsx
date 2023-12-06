import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import Layout from "../../constants/Layout";
import { offWhite, placeholder } from "../../constants/Color";
import { HStack, NativeBaseProvider } from "native-base";
interface BlogDesignProps {
    img:any;
    text:any;
    hasTag1:any;
    hasTag2:any;
}
export default function BlogDesign(props: BlogDesignProps) {
    return (
        <NativeBaseProvider>
            <View style={styles.main}>
                <ImageBackground
                    source={props.img}
                    alt=""
                    style={styles.img}
                >
                    <Text style={styles.imgText}>{props.text}</Text>
                </ImageBackground>
                <HStack space={3} style={{alignItems:"center"}}>
                    <View style={styles.box}>
                        <Text style={styles.text}>{props.hasTag1}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>{props.hasTag2}</Text>
                    </View>
                </HStack>

            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    main: {
        height: 245,
        width: Layout.window.width * 0.85,
        alignSelf: "center",
        marginTop: 15
    },
    img: {
        width: Layout.window.width * 0.85,
        height: 200,
    },
    imgText: {
        fontSize: 17,
        letterSpacing: 2,
        color: offWhite,
        marginTop: 140,
        opacity: 0.8,
        marginLeft: 10,
        width: 300
    },
    box: {
        borderWidth: 2,
        height: 25,
        width: 100,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: placeholder,
    },
    dText:{
        fontSize:13,
    }
});