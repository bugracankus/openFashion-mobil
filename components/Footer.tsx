import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TouchableOpacityComponent } from 'react-native'
import Layout from '../constants/Layout';
import { HStack, VStack } from 'native-base';
import { body, label, titleActive } from '../constants/Color';
import { useNavigation } from '@react-navigation/native';
const Footer: React.FC = () => {
    const navigation: any = useNavigation();

    return (
        <View style={styles.main}>
            <HStack space={10}>
                <Image
                    source={require("../assets/socialmedia/Twitter.png")}
                    alt=''
                    style={styles.logo}
                />
                <Image
                    source={require("../assets/socialmedia/Instagram.png")}
                    alt=''
                    style={styles.logo}
                />
                <Image
                    source={require("../assets/socialmedia/YouTube.png")}
                    alt=''
                    style={styles.logo}
                />
            </HStack>
            <Image
                source={require("../assets/icon/line.png")}
                alt=''
                style={styles.line}
            />
            <VStack space={2} style={{ marginTop: 10 }}>
                <Text style={styles.text}>
                    support@openui.design
                </Text>
                <Text style={styles.text}>
                    +60 825 876
                </Text>
                <Text style={styles.text}>
                    08:00 - 22:00 - Everyday
                </Text>
            </VStack>
            <Image
                source={require("../assets/icon/line.png")}
                alt=''
                style={styles.line}
            />
            <View style={{ marginTop: 30 }}>
                <HStack space={4}>
                    <TouchableOpacity>
                        <Text style={styles.bText}>
                            About
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.bText}>
                            Contact
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("BlogGridPage")}>
                        <Text style={styles.bText}>
                            Blog
                        </Text>
                    </TouchableOpacity>

                </HStack>
            </View>
            <View style={styles.iGround}>
                <Text style={styles.iText}>Copyright© OpenUI All Rights Reserved.</Text>
            </View>
        </View>
    )
}
export default Footer;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 35,
        height: 35
    },
    line: {
        width: 200,
        height: 15,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 20
    },
    text: {
        fontSize: 16,
        color: body,
        width: 200,
        letterSpacing: 0.5,
        textAlign: "center"
    },
    bText: {
        fontSize: 19,
        color: titleActive,
        fontWeight: "400"
    },
    iGround: {
        width: Layout.window.width,
        height: 50,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(196, 196, 196, 0.2)",
    },
    iText: {
        color: label
    }
});
