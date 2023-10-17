import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import User from "../assets/user.png";
import clock from '../assets/clock.png'

const notes = () => {
  return (
    <View>
      <View
      // style={{
      //   flex: 1,
      //   alignItems: "center",
      //   justifyContent: "center",
      //   gap: 50,
      // }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: "#50C2C9",
            height: 230,
            padding:10
          }}
        >
          <Image
            source={User}
            style={{
              height: 100,
              width: 100,
              borderRadius: 80,
            }}
          />
          <Text style={{color:"#fff", fontSize:18, fontWeight:800, paddingTop: 6,}}>Welcome Peter</Text>
        </View>
        <View  style={{
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            padding:10
          }}>
        <Image
            source={clock}
            style={{
              height: 100,
              width: 100,
              borderRadius: 80,
            }}
          />

        </View>
        
      </View>
    </View>
  );
};

export default notes;

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
  },
});
