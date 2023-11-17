import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SectionList, ListRenderItem } from 'react-native';
import ParallaxScrollView from '../Components/ParallaxScrollView';
import Colors from "../constants/Colors";
import { restaurant } from "../assets/data/restaurant"; 
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
    const navigation = useNavigation();

    const DATA = restaurant.food.map((item, index) => ({
        title: item.category,
        data: item.meals,
        index
    }));
    
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

    const renderItem: ListRenderItem<any> = ({ item, index }) => (
        <Link href={'/'} asChild>
            <TouchableOpacity style={styles.item}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.dish}>{item.name}</Text>
                    <Text style={styles.dishText}>{item.info}</Text>
                    <Text style={styles.dishText}>${item.price}</Text>
                </View>

                <Image source={item.img} style={styles.dishImage}/>
            </TouchableOpacity>
        </Link>
    )

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
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                
                <Text style={styles.restaurantDescription}>
                    { restaurant.delivery } - { restaurant.tags.join(' - ') }
                </Text>

                <Text style={styles.restaurantDescription}>{restaurant.about}</Text>

                <SectionList
                    contentContainerStyle={{ paddingBottom: 50 }}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => `${item.id + index}`}
                    sections={DATA}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separatorComponent}></View>
                    )}
                    SectionSeparatorComponent={() => (
                        <View style={styles.separatorComponent}></View>
                    )}
                    renderSectionHeader={({ section: { title, index}}) => (
                        <Text style={styles.sectionHeader}>{title}</Text>
                    )}
                />
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
    restaurantName: {
        fontSize: 30,
        margin: 16,

    },
    restaurantDescription: {
        fontSize: 16,
        margin: 16,
        lineHeight: 22,
        color: Colors.medium,
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        margin: 16,
    },
    separatorComponent: { 
        height: 1, 
        backgroundColor: Colors.grey,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: 'white',
        padding: 16,
        flexDirection: 'row',
    },
    dish: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dishText: {
        fontSize: 14,
        color: Colors.mediumDark,
        paddingVertical: 4,
    },
    dishImage: {
        height: 80,
        width: 80,
        borderRadius: 4,
    },
});

export default Details;