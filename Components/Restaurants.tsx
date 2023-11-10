import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { restaurants } from "../assets/data/home"; 
import { Link } from "expo-router";
import Colors from "../constants/Colors";

const Restaurants = () => {
    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 15 }}
        >
            {restaurants.map((restaurant, index) => (
                <Link href={'/'} key={index} asChild>
                    <TouchableOpacity>
                        <View style={styles.restaurantCard}>
                            <Image style={styles.img} source={restaurant.img}/>
                            <View style={styles.restaurantBox}>
                                <Text style={styles.restaurantText}>
                                    {restaurant.name}
                                </Text>
                                
                                <Text style={{ color: Colors.green }}>
                                    {restaurant.rating} {restaurant.ratings}
                                </Text>
                                
                                <Text style={{ color: Colors.medium }}>
                                    {restaurant.distance}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Link>
                
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    restaurantCard: {
        width: 300,
        height: 258,
        backgroundColor: 'white',
        marginEnd: 10,
        elevation: 2, 
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.06,
        borderRadius: 4,
    },
    restaurantText: {
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    img: { 
        flex: 5, 
        width: undefined, 
        height: undefined 
    },
    restaurantBox: {
        flex: 2,
        padding: 10,
    },
});
 
export default Restaurants;