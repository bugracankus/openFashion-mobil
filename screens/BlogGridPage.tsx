import React, { useRef } from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Title from "../components/Title";
import { body, titleActive } from "../constants/Color";
import Layout from "../constants/Layout";
import BlogDesign from "../components/BlogGrideComponents/BlogDesign";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";


const BlogGridPage: React.FC = () => {
    const [touch, setTouch] = React.useState(false);
    const navigation: any = useNavigation();

    const blogData = [
        {
            id: 0,
            image: require("../assets/blogImage/Post-3.png"),
            imgText: "2021 Style Guide: The Biggest Fall Trends",
            hasTag1: "#Fashion",
            hasTag2: "#Tips"
        },
        {
            id: 1,
            image: require("../assets/blogImage/Post-2.png"),
            imgText: "2021 Style Guide: The Biggest Fall Trends",
            hasTag1: "#Fashion",
            hasTag2: "#Tips"
        },
        {
            id: 2,
            image: require("../assets/blogImage/Post-1.png"),
            imgText: "2021 Style Guide: The Biggest Fall Trends",
            hasTag1: "#Fashion",
            hasTag2: "#Tips"
        },
        {
            id: 3,
            image: require("../assets/blogImage/Post.png"),
            imgText: "2021 Style Guide: The Biggest Fall Trends",
            hasTag1: "#Fashion",
            hasTag2: "#Tips"
        },
    ]
    return (
        <NativeBaseProvider>
            <View style={styles.main}>
                <ScrollView>
                    {/* ---HEADER--- */}
                    <Title />
                    {/* ---TITLE--- */}
                    <View>
                        <Text style={styles.title}>BLOG</Text>
                        <Image
                            source={require("../assets/icon/line.png")}
                            alt=""
                            style={styles.line}
                        />
                    </View>
                    {/* ---CATEGORY--- */}
                    <View style={styles.cGround}></View>
                    {/* <BlogDesign /> */}
                    <VStack>
                        {
                            blogData.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                    >
                                        <TouchableOpacity>
                                            <BlogDesign img={item.image} text={item.imgText} hasTag1={item.hasTag1} hasTag2={item.hasTag2} />

                                        </TouchableOpacity>

                                    </TouchableWithoutFeedback>
                                )
                            })
                        }
                        {touch == true ?
                            <>
                                <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                                    <BlogDesign img={require("../assets/blogImage/Post-3.png")}
                                        text={"2021 Style Guide: The Biggest Fall Trends"}
                                        hasTag1={"Tips"}
                                        hasTag2={"#Fashion"} />
                                    <BlogDesign img={require("../assets/blogImage/Post-3.png")}
                                        text={"2021 Style Guide: The Biggest Fall Trends"}
                                        hasTag1={"Tips"}
                                        hasTag2={"#Fashion"} />
                                </VStack>
                            </>
                            : <></>
                        }
                    </VStack>
                    <TouchableOpacity onPress={() => { setTouch(!touch) }}>
                        <View style={styles.button}>
                            <HStack style={{ justifyContent: "center", alignItems: "center" }} space={3}>
                            <Text style={styles.bText}>{touch == true ? "LOAD LESS" : "LOAD MORE"} </Text>
                                <Image
                                    source={require("../assets/icon/Plus.png")}
                                    alt=""
                                    style={styles.icon}
                                />
                            </HStack>
                        </View>
                    </TouchableOpacity>
                    <Footer/>
                </ScrollView>
            </View>
        </NativeBaseProvider>

    )
}
export default BlogGridPage;


const styles = StyleSheet.create({
    main: {
        backgroundColor: "#FFFFFF"
    },
    title: {
        fontSize: 35,
        color: titleActive,
        letterSpacing: 0.5,
        opacity: 0.8,
        alignSelf: "center",
        marginTop: 15
    },
    line: {
        width: 200,
        height: 15,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 5
    },
    cGround: {
        borderWidth: 1,
        height: 50,
        width: Layout.window.width,
        marginTop: 10
    },
    button: {
        borderWidth: 1,
        height: 50,
        width: 210,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        borderColor: body,
        marginBottom:60
    },
    bText: {
        fontSize: 17,
        color: titleActive,
        fontWeight: "500",
        opacity: 0.8,
        letterSpacing: 0.5
    },
    icon: {
        width: 25,
        height: 25
    }
})