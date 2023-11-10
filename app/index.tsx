import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Categories from "../Components/Categories";
import Restaurants from "../Components/Restaurants";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const Page = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                <Categories />

                <Text style={styles.header}>
                    Top picks in your neighbourhood
                </Text>
                
                <Restaurants />
                
                <Text style={styles.header}>
                    Offers near you
                </Text>
                
                <Restaurants />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 50,
        backgroundColor: Colors.ligthGrey,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        paddingHorizontal: 16,
    },
});
 
export default Page;