import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import Layout from '../constants/Layout';
import { HStack, VStack } from 'native-base';
import { label } from '../constants/Color';
const FollowUs: React.FC = () => {
    return (
        <View style={styles.main}>
            <Image
                source={require("../assets/socialmedia/Vector.png")}
                alt=''
                style={styles.logo}
            />
            <VStack>
                <HStack style={{ justifyContent: "center", alignItems: "center" }} space={8}>
                    <Image
                        source={require("../assets/followImage/follow1.png")}
                        alt=''
                        style={styles.img}
                    />
                    <Image
                        source={require("../assets/followImage/follow2.png")}
                        alt=''
                        style={styles.img}
                    />
                </HStack>
                <HStack style={{ justifyContent: "center", alignItems: "center" }} space={8}>
                    <Image
                        source={require("../assets/followImage/follow3.png")}
                        alt=''
                        style={styles.img}
                    />
                    <Image
                        source={require("../assets/followImage/follow4.png")}
                        alt=''
                        style={styles.img}
                    />
                </HStack>
            </VStack>

        </View>
    )
}
export default FollowUs;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
        marginBottom: 100
    },
    logo: {
        width: 50,
        height: 50,
        alignSelf: "center",
        marginTop: 10
    },
    img: {
        width: 170,
        height: 170,
        marginTop: 20,
        marginBottom:5
    }
});
