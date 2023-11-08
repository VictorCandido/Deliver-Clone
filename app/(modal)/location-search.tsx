import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Region } from 'react-native-maps';
import Colors from '../../constants/Colors';
import { useNavigation } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const LocationSearch = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState<Region>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.002,
        longitudeDelta: 0.02,
    });

    useEffect(() => {
        getCurrentLocation();
    }, []);

    async function getCurrentLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 5
        });

        setLocation({
            ...location,
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <GooglePlacesAutocomplete
                placeholder='Search or move the map'
                fetchDetails
                onPress={(data, details = null) => {
                    const point = details?.geometry.location;

                    if (!point) {
                        return;
                    }

                    setLocation({
                        ...location,
                        latitude: point.lat,
                        longitude: point.lng,
                    });
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
                    language: 'pt-br',
                }}
                renderLeftButton={() => (
                    <View style={styles.boxIcon}>
                        <Ionicons name='search-outline' size={24} color={Colors.medium}/>
                    </View>
                )}
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        backgroundColor: Colors.grey,
                        paddingLeft: 35,
                        borderRadius: 10,
                    },
                    textInputContainer: {
                        backgroundColor: 'white',
                        padding: 8,
                    },
                }}
            />

            <MapView 
                style={styles.map}
                region={location}
                showsUserLocation
            />

            <View style={styles.absoluteBox}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    absoluteBox: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        margin: 16,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    boxIcon: {
        position: 'absolute',
        left: 15,
        top: 18,
        zIndex: 1,
    },
});

export default LocationSearch;