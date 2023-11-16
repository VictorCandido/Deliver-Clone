import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '../Components/ParallaxScrollView';
import Colors from "../constants/Colors";
import { restaurant } from "../assets/data/restaurant"; 
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: Colors.primary,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.primary}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.bar}>
                    <TouchableOpacity style={styles.roundButton}>
                        <Ionicons name="share-outline" size={24} color={Colors.primary}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roundButton}>
                        <Ionicons name="search-outline" size={24} color={Colors.primary}/>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);

    return (
        <>
        <ParallaxScrollView
            backgroundColor="white"
            parallaxHeaderHeight={250}
            stickyHeaderHeight={100}
            renderBackground={() => <Image source={restaurant.img} style={{ width: '100%', height: 300 }}/>}
            contentBackgroundColor={Colors.ligthGrey}
            renderStickyHeader={() => (
                <View key='sticky-header' style={styles.stickySection}>
                    <Text style={styles.stickySectionText}>{restaurant.name}</Text>
                </View>
            )}
        >
            <View style={styles.detailsContainer}>
                <Text>Scroll me</Text>
            </View>
        </ParallaxScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: Colors.ligthGrey,
    },
    stickySection: {
        backgroundColor: 'white',
        marginLeft: 60,
        marginRight: 110,
        height: 90,
        justifyContent: 'flex-end',
    },
    stickySectionText: {
        fontSize: 20,
        margin: 10,
    },
    roundButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
});

export default Details;