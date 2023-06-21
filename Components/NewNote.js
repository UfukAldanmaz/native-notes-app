import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { Text } from "@ui-kitten/components"
import React, { useState } from "react"
import { Dimensions, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"

export default function NewNote() {
    const [note, setNote] = useState('');
    const [error, setError] = useState('')
    const navigation = useNavigation();

    const saveNote = async () => {
        if (note.trim().length == 0) {
            setError("You should type something!")
        }
        else {
            const createNote = await AsyncStorage.getItem('NOTES');
            const n = createNote ? JSON.parse(createNote) : []
            n.push(note)
            await AsyncStorage.setItem('NOTES', JSON.stringify(n)).then(() => navigation.navigate('Notes'));
            setNote('')
            setError('')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                multiline={true}
                autoFocus
                selectionColor="#222B45"
                value={note}
                onChangeText={setNote}
            />
            <Text style={styles.error}>{error}</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bottom}>
                <TouchableOpacity style={styles.button} appearance="filled" onPress={saveNote}>
                    <Text>Create Note</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222B45",
        color: "white",
        padding: 30,
        paddingTop: 80,

        width: Dimensions.get("window").width
    },
    textInput: {
        color: "#fff", fontSize: 22, backgroundColor: "#9897a9", borderRadius: 15, padding: 20, height: 100
    },
    bottom: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 36,
    },
    button: {
        padding: 15,
        alignItems: "center",
        height: 50,
        borderRadius: 10,
        borderColor: "#4682B4",
        borderWidth: 1,
        backgroundColor: "#2832c2",
        marginBottom: 10
    },
    error: {
        color: '#bc544b',
        margin: 5,
        fontSize: 14
    }
})