import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Category {
    name: string;
    count: number;
    checked?: boolean;
}

const ItemBox = () => (
    <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
            <Ionicons name="arrow-down-outline" size={20} color={Colors.medium}/>
            <Text style={{ flex: 1 }}>Sort</Text>
            <Ionicons name="chevron-forward" size={22} color={Colors.primary}/>
        </TouchableOpacity>
    </View>
);

const Filter = () => {
    const navigation = useNavigation();

    const categories = [
        {
            name: 'Acai',
            count: 7
        },{
            name: 'African',
            count: 9
        },{
            name: 'Alcohool',
            count: 330
        },{
            name: 'American',
            count: 201
        },{
            name: 'BBQ',
            count: 73
        },{
            name: 'Brunch',
            count: 7
        },{
            name: 'Cakes',
            count: 7
        },{
            name: 'Dessert',
            count: 7
        },{
            name: 'Falafel',
            count: 7
        },{
            name: 'German',
            count: 7
        },{
            name: 'Healthy',
            count: 7
        },{
            name: 'Indian',
            count: 7
        },{
            name: 'Meal Deal',
            count: 7
        },{
            name: 'Pancakes',
            count: 7
        },{
            name: 'Pizza',
            count: 7
        },{
            name: 'Soup',
            count: 7
        },{
            name: 'Takeaways',
            count: 7
        },{
            name: 'Wraps',
            count: 7
        },
    ]

    const renderItem: ListRenderItem<Category> = ({ item }) => (
        <View>
            <Text>{ item.name }</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList 
                data={categories}
                renderItem={renderItem}
                ListHeaderComponent={ItemBox}
            />

            <View style={styles.footer}>
                <TouchableOpacity style={styles.fullButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.footerText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.ligthGrey
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: -10,
        }
    },
    fullButton: {
        backgroundColor: Colors.primary,
        padding: 16,
        alignItems: 'center',
        borderRadius: 8,
    },
    footerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemContainer: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 8,
        marginBottom: 16,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 8,
        borderColor: Colors.grey,
        borderBottomWidth: 1,
    },
});

export default Filter;