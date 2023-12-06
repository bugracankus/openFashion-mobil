import React, { useRef } from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import Banner from "../components/Banner";
import { titleActive } from "../constants/Color";
import Layout from "../constants/Layout";
import { HStack, NativeBaseProvider, VStack } from "native-base";
import NewArrival from "../components/NewArrival";
import Brand from "../components/Brand";
import ForYou from "../components/ForYou";
import Trending from "../components/Trending";
import Fashion from "../components/Fashion";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
    const [touch, setTouch] = React.useState(false);
    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <View style={{ backgroundColor: "#FCFCFC" }}>
                    <ScrollView>
                        {/* ---TITLE--- */}
                        <Title />
                        <View >
                            {/* ---BANNER--- */}
                            <Banner />
                        </View>
                        <View>
                            <Text style={styles.title}>New Arrıval</Text>
                            <Image
                                source={require("../assets/icon/line.png")}
                                alt=""
                                style={styles.line}
                            />
                            <View style={styles.categories}></View>
                            <View>
                                {/* ---PRODUCT--- */}
                                <VStack>
                                    <HStack style={{ justifyContent: "center", alignItems: "center" }} space={10}>
                                        <NewArrival
                                            productImage={require("../assets/product/product1.png")}
                                            productEx={"21WN reversible angora cardigan"}
                                            productPr={"$120"} />
                                        <NewArrival
                                            productImage={require("../assets/product/product2.png")}
                                            productEx={"21WN reversible angora cardigan"}
                                            productPr={"$120"} />
                                    </HStack>
                                    <HStack style={{ justifyContent: "center", alignItems: "center" }} space={10}>
                                        <NewArrival
                                            productImage={require("../assets/product/product3.png")}
                                            productEx={"21WN reversible angora cardigan"}
                                            productPr={"$120"} />
                                        <NewArrival
                                            productImage={require("../assets/product/product4.png")}
                                            productEx={"21WN reversible angora cardigan"}
                                            productPr={"$120"} />
                                    </HStack>
                                    {touch == true ?
                                        <>
                                            <HStack style={{ justifyContent: "center", alignItems: "center" }} space={10}>
                                                <NewArrival
                                                    productImage={require("../assets/product/product1.png")}
                                                    productEx={"21WN reversible angora cardigan"}
                                                    productPr={"$120"} />
                                                <NewArrival
                                                    productImage={require("../assets/product/product1.png")}
                                                    productEx={"21WN reversible angora cardigan"}
                                                    productPr={"$120"} />
                                            </HStack>
                                        </>
                                        : <></>
                                    }
                                </VStack>
                                {/* ---MORE BUTTON --- */}
                                <TouchableOpacity onPress={() => { setTouch(!touch) }}>
                                    <HStack style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.txt}>{touch == true ? "Explore Less" : "Explore More"} </Text>
                                        <Image
                                            source={require("../assets/icon/ForwardArrow.png")}
                                            alt=""
                                            style={{ transform: [{ rotate: touch == true ? "270deg" : "90deg" }] }}
                                        />
                                    </HStack>
                                </TouchableOpacity>
                                {/* ---BRAND--- */}
                                <Brand />
                                {/* ---COLLECTION--- */}
                                <View>
                                    <Text style={[styles.title, { marginTop: 30 }]}>Collections</Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={require("../assets/image/image.png")}
                                            alt=""
                                            style={styles.img}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={require("../assets/banner/banner2.png")}
                                            alt=""
                                            style={{ alignSelf: "center", width: 300, height: 300, marginTop: 50 }}
                                        />
                                    </TouchableOpacity>
                                    {/* ---FOR YOU--- */}
                                    <View>
                                        <Text style={styles.title}>JUST FOR YOU</Text>
                                        <Image
                                            source={require("../assets/icon/line.png")}
                                            style={styles.line}
                                        />
                                        <ForYou />
                                    </View>
                                    {/* ---TRENDING--- */}
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={styles.title}>@Trending</Text>
                                        <Trending />
                                    </View>
                                    {/* ---OPENFASHION--- */}
                                    <View>
                                        <Fashion />
                                    </View>
                                    {/* ---FOLLOWUS--- */}
                                    <View>
                                        <Text style={styles.title}>Follow Us</Text>
                                        <FollowUs />
                                    </View>
                                    {/* ---FOOTER--- */}
                                    <View>
                                        <Footer />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </NativeBaseProvider>
    )
}
export default HomePage;


const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        color: titleActive,
        letterSpacing: 0.5,
        opacity: 0.8,
        alignSelf: "center",
        marginTop: 30
    },
    line: {
        width: 200,
        height: 15,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 5
    },
    categories: {
        borderWidth: 1,
        height: 50,
        width: Layout.window.width,
        alignSelf: "center",
        marginTop: 20
    },
    txt: {
        fontSize: 17,
        color: titleActive
    },
    img: {
        width: Layout.window.width * 1.1,
        height: 220,
        marginTop: 50
    }
})