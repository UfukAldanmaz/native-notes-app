import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer, useFocusEffect, useNavigation } from "@react-navigation/native";
import { Divider, List, ListItem, Text } from "@ui-kitten/components";
import { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/material-bottom-tabs';
import Note from "./Note";

export default function Notes() {
    const [notes, setNotes] = useState();
    const navigation = useNavigation();



    useFocusEffect(
        useCallback(() => {
            getNotes();
        }, [])
    )

    const getNotes = () => {
        AsyncStorage.getItem('NOTES').then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const showItem = ({ item, index }) => (
        <ListItem key={index}
            title={<Text>{item}</Text>}
            onPress={() => navigation.navigate("Note", {
                oneNote: item
            })
            }
        />
    )


    return (
        <View style={{ backgroundColor: "#1c2e4a", flex: 1 }}>
            <Text style={styles.title} category="h1">
                Notes
            </Text>
            <List

                data={notes}
                ItemSeparatorComponent={Divider}
                renderItem={showItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginTop: 50,
    }
})