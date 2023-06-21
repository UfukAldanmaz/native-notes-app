import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Button, Text } from "@ui-kitten/components"
import React, { useCallback, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"


export default function Note({ route }) {
    const [notes, setNotes] = useState([]);
    const { oneNote } = route.params;
    const navigation = useNavigation();
    useFocusEffect(

        useCallback(() => {

            getNotes()
        }, [])
    )

    const getNotes = () => {

        /* !notes ? AsyncStorage.setItem('NOTES', JSON.stringify(setNotes("There is no note"))) :*/
        AsyncStorage.getItem('NOTES').then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const deleteNote = async () => {
        const filterNotes = await notes.filter((note) => note !== oneNote)
        await AsyncStorage.setItem('NOTES', JSON.stringify(filterNotes))
            .then(() => navigation.navigate("Notes")/*, setNotes("There is no note here")*/)

    }

    return (<>
        {/* {notes ?   : <View style={{ backgroundColor: "#222B45", flex: 1 }}>
                <Text style={styles.title} category="h1">
                    Notes
                </Text>
                <Text style={{ fontSize: 22, marginTop: 120, textAlign: "center" }} category="h4">
                    There is no note yet
                </Text>
            </View>} */}
        <View style={{ backgroundColor: "#222B45", flex: 1 }}>
            <View style={{ backgroundColor: "#1c2e4a" }}>
                <Text style={styles.title} category="h1">
                    Notes
                </Text>
            </View>
            <Text style={{ fontSize: 18, margin: 20 }}>{oneNote}</Text>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={deleteNote} style={styles.button}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>

    </>
    )

}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginTop: 50,
    },
    bottom: {
        alignItems: "center"
    },
    button: {
        padding: 15,
        alignItems: "center",
        height: 50,
        borderRadius: 10,
        borderColor: "#4682B4",
        borderWidth: 1,
        backgroundColor: "#2832c2",
        width: 300,
    }

})