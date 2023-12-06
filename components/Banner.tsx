import React, { useState } from "react";
import { StyleSheet, ScrollView, Image, View, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import Layout from "../constants/Layout";
const Banner = () => {
    const DATA = [
        {
            id: 0,
            image: require("../assets/banner/banner.png"),
        },
        {
            id: 1,
            image: require("../assets/banner/banner3.jpg"),
        },
        {
            id: 2,
            image: require("../assets/banner/banner4.jpg"),
        },
        {
            id: 3,
            image: require("../assets/banner/banner5.jpg"),
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const renderDots = () => {
        return DATA.map((_, index) => (
            <View
                key={index}
                style={[
                    styles.dot,
                    activeIndex === index ? styles.activeDot : styles.inactiveDot,
                ]}
            />
        ));
    };

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        setActiveIndex(pageNum);
    };

    return (
        <>
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    style={styles.item}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}

                >
                    {DATA.map((item, index) => (
                        <Image key={index} alt=" " style={styles.list} source={item.image} />
                    ))}
                </ScrollView>
                <View style={styles.dotContainer}>{renderDots()}</View>

            </View>
        </>
    );
};

export default Banner;

// -- STYLES -- //
const styles = StyleSheet.create({
    item: {
        borderWidth: 0.7,
        borderColor: "#D5D5D5",
        height: 650,
        width: Layout.window.width,
    },
    list: {
        width: Layout.window.width,
        height: 650,
    },
    dotContainer: {
        flexDirection: "row",
        position: "absolute",
        marginTop:625,
        marginLeft:170
    },
    dot: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
        transform: [{ rotate: '45deg' }],
    },
    activeDot: {
        backgroundColor: "#FCFCFC",
    },
    inactiveDot: {
        borderWidth:1,
        borderColor:"#FCFCFC"
    },
});
