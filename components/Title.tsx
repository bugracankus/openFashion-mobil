import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import Layout from '../constants/Layout';
import { HStack, NativeBaseProvider } from 'native-base';
import { TouchableOpacity } from 'react-native';


const Title: React.FC = () => {
    return (
        <NativeBaseProvider>
            <View style={styles.main}>
                <HStack style={{ alignItems: "center", marginTop: 40 }} space={10}>
                    <TouchableOpacity>
                        <View style={[styles.iGround,{marginRight:10}]}>
                            <Image
                                source={require("../assets/icon/Menu.png")}
                                alt=""
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lGround}>
                        <Image
                            source={require("../assets/icon/Logo.png")}
                            alt=""
                            style={styles.logo}
                        />
                    </View>
                    <HStack space={2}>
                        <TouchableOpacity>
                            <View style={styles.iGround}>
                                <Image
                                    source={require("../assets/icon/Search.png")}
                                    alt=""
                                    style={styles.icon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.iGround}>
                                <Image
                                    source={require("../assets/icon/shoppingbBag.png")}
                                    alt=""
                                    style={styles.icon}
                                />
                            </View>
                        </TouchableOpacity>
                    </HStack>

                </HStack>
            </View>
        </NativeBaseProvider>
    )
}
export default Title;

const styles = StyleSheet.create({
    main: {
        height: 100,
        width: Layout.window.width,
        backgroundColor: "#E7EAEF",
        justifyContent: "center",
        alignItems: "center"
    },
    iGround: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    lGround: {
        height: 60,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:20
    },
    logo: {
        width: 110,
        height: 45,
        resizeMode: "contain"
    }
});
