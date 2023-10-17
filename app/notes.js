import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../assets/user.png";
import clock from "../assets/clock.png";

const NOTES_STORAGE_KEY = "notes";

const notes = () => {
  const [isDone, setIsDone] = useState(false);
  const [newNote, setNewNote] = useState({ text: "", isDone: false });
  const [notes, setNotes] = useState([]);
  const [showInput, setShowInput] = useState(false);

  // Load notes from AsyncStorage when the component is mounted
  useEffect(() => {
    async function loadNotes() {
      try {
        const storedNotes = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
        if (storedNotes !== null) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error("Error loading notes from AsyncStorage:", error);
      }
    }
    loadNotes();
  }, []);

  // Save notes to AsyncStorage whenever the notes state changes
  useEffect(() => {
    async function saveNotes() {
      try {
        await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
      } catch (error) {
        console.error("Error saving notes to AsyncStorage:", error);
      }
    }
    saveNotes();
  }, [notes]);

  const handleAddNote = () => {
    setShowInput(true);
  };
  const handleSaveNote = () => {
    if (newNote.text) {
      // Add the new note object to the notes array with isDone set to false
      setNotes([...notes, newNote]);
      setNewNote({ text: "", isDone: false }); // Clear the input field
      setShowInput(false);
    }
  };

  const handleToggleNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].isDone = !updatedNotes[index].isDone;
    setNotes(updatedNotes);
  };

  const handleClearNotes = () => {
    setNotes([]); // Set the notes state to an empty array to clear all notes
  };

  return (
    <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={{ flexGrow: 1 }} 
    horizontal={false}
    showsVerticalScrollIndicator={true} >
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: "#50C2C9",
            height: 230,
            padding: 10,
          }}
        >
          {/* <View style={{
        }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 8,
                // width: "80%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#000", fontWeight: 600 }}>Back</Text>
            </TouchableOpacity>
          </View> */}
          <Image
            source={User}
            style={{
              height: 100,
              width: 100,
              borderRadius: 80,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: 800,
              paddingTop: 6,
            }}
          >
            Welcome Peter
          </Text>
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Text style={{ fontWeight: "700", padding: 10 }}>Good Afternoon</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // height: 150,
            padding: 10,
          }}
        >
          <Image
            source={clock}
            style={{
              height: 100,
              width: 100,
              borderRadius: 80,
            }}
          />
        </View>
        <View>
          <Text style={{ padding: 8, fontWeight: 600 }}>Task List</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f2f2f2",
              width: "80%",
              borderRadius: 9,
              elevation: 5,
              shadowColor: "#000",
              paddingBottom: 10,
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "97%",
                paddingHorizontal: 15,
              }}
            >
              <Text style={{ fontWeight: 500, color: "#6e6d6d" }}>
                Daily Task
              </Text>
              <TouchableOpacity onPress={handleAddNote}>
                <MaterialIcons name="add" size={34} color="#50C2C9" />
              </TouchableOpacity>
            </View>
            {showInput && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                  flexDirection: "row",
                  width: "92%",
                  padding: 15,
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 5,
                    paddingHorizontal: 8,
                    paddingVertical: 12,
                    backgroundColor: "#fff",
                    width: "50%",
                  }}
                  placeholder="Add new note..."
                  value={newNote.text} // Use newNote.text as the value
                  onChangeText={(text) =>
                    setNewNote({ ...newNote, text: text })
                  }
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: "#50C2C9",
                    paddingHorizontal: 1,
                    paddingVertical: 8,
                    width: "20%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 3
                  }}
                  onPress={handleSaveNote}
                >
                  <Text style={{ color: "#fff", marginLeft: 10 }}>Save</Text>
                </TouchableOpacity>
              </View>
            )}
            {notes.map((note, index) => (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  width: "93%",
                }}
              >
                <Checkbox.Android
                  status={note.isDone ? "checked" : "unchecked"}
                  onPress={() => handleToggleNote(index)}
                />
                <Text>{note.text}</Text>
              </View>
            ))}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                paddingTop: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  paddingHorizontal: 1,
                  paddingVertical: 8,
                  width: "80%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                }}
                onPress={handleClearNotes}
              >
                <Text
                  style={{ color: "#fff", marginLeft: 10, fontWeight: 600 }}
                >
                  Clear All Notes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default notes;

const styles = StyleSheet.create({
  text: {
    width: "65%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#38434D",
    textAlign: "center",
    paddingTop: 6,
  },
  btncontainer: {
    alignItems: "center",
    width: "90%",
    paddingTop: 40,
  },
});
