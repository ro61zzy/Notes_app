import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import pic from "../assets/page_onee.png";
import { router } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
        }}
      >
        <View  >
          <Image
            source={pic}
            style={{
              height: 194,
               width: 254,
              backgroundColor:"#fff"
            }}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Gets things Done with TODOs</Text>
          <Text style={styles.subtitle}>
  Welcome to your personal task manager. Keep track of your daily tasks, goals, and accomplishments. 
  Organize your life with ease, prioritize your to-dos, and enjoy a productive day.
</Text>
        </View>
        <View  style={styles.btncontainer}>
          <TouchableOpacity
                    onPress={() =>router.push('/notes')}
            style={{
              backgroundColor: "#50C2C9",
              padding: 13,
              width: 290,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#F2F2F2",
  },
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
  }
});
