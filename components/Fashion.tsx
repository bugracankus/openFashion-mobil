import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import Layout from '../constants/Layout';
import { HStack, VStack } from 'native-base';
import { label } from '../constants/Color';
const Fashion: React.FC = () => {
    return (
        <View style={styles.main}>
            <Image
                source={require("../assets/icon/Logo.png")}
                alt=''
                style={styles.logo}
            />
            <Text style={styles.text}>Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</Text>
            <Image
                source={require("../assets/icon/line.png")}
                alt=''
                style={styles.line}
            />
            <View>
                <VStack space={3}>
                    <HStack space={10}>
                        <VStack style={{ alignItems: "center", marginTop: 20 }}>
                            <Image
                                source={require("../assets/homePageIcon/MiroodlesSticker.png")}
                                alt=''
                                style={styles.icon}
                            />
                            <Text style={styles.iText}>Fast shipping. Free on orders over $25.</Text>
                        </VStack>
                        <VStack style={{ alignItems: "center", marginTop: 20 }}>
                            <Image
                                source={require("../assets/homePageIcon/MiroodlesSticker-1.png")}
                                alt=''
                                style={styles.icon}
                            />
                            <Text style={styles.iText}>Sustainable process
                                from start to finish.</Text>
                        </VStack>
                    </HStack>
                    <HStack space={10}>
                        <VStack style={{ alignItems: "center", marginTop: 20 }}>
                            <Image
                                source={require("../assets/homePageIcon/MiroodlesSticker-2.png")}
                                alt=''
                                style={styles.icon}
                            />
                            <Text style={styles.iText}>Unique designs
                                and high-quality materials.</Text>
                        </VStack>
                        <VStack style={{ alignItems: "center", marginTop: 20 }}>
                            <Image
                                source={require("../assets/homePageIcon/MiroodlesSticker-3.png")}
                                alt=''
                                style={styles.icon}
                            />
                            <Text style={styles.iText}>Fast shipping.
                                Free on orders over $25.</Text>
                        </VStack>
                    </HStack>
                </VStack>
                <Image
                    source={require("../assets/homePageIcon/line.png")}
                    alt=''
                    style={styles.sign}
                />
            </View>
        </View>
    )
}
export default Fashion;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
        height: 500,
        backgroundColor: "#F2F2F2",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain",
    },
    text: {
        fontSize: 17,
        color: label,
        textAlign: "center",
        width: 330,
        letterSpacing: 0.5,
        lineHeight: 25
    },
    line: {
        width: 200,
        height: 15,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 5
    },
    icon: {
        width: 70,
        height: 55
    },
    iText: {
        fontSize: 13,
        color: label,
        width: 150,
        textAlign: "center"
    },
    sign:{
        width:70,
        height:100,
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:10
    }
});
