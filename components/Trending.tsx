import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Layout from '../constants/Layout';
import { HStack, VStack } from 'native-base';
import { body, inputBackground } from '../constants/Color';
const Trending: React.FC = () => {
    return (
        <View style={styles.main}>
            <VStack space={3}>
                <HStack space={3}>
                    <View style={styles.box}>
                        <Text style={styles.tText}>#2021</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.tText}>#spring</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.tText}>#collection</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.tText}>#fall</Text>
                    </View>
                </HStack>
                <HStack space={3} style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.box}>
                        <Text style={styles.tText}>#dress</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.tText}>#fashion</Text>
                    </View>
                </HStack>
            </VStack>
        </View>
    )
}
export default Trending;

const styles = StyleSheet.create({
    main: {
        height: 150,
        width: Layout.window.width,
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        height: 30,
        width: 90,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: inputBackground,
    },
    tText: {
        fontSize: 16,
        fontWeight: "600",
        color: body,
    }
});
