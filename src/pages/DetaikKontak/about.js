import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const splash =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Fsplashscreen.png?alt=media&token=2b33fb63-382f-4221-8141-4e6e47d2ad11";
export default class About extends Component {
  // let ScreenHeight = Dimensions.get("window").height;
  render() {
    return (
      <View
        style={{
          marginTop: 27,
        }}
      >
        <View style={styles.titlebar}></View>
        <View style={styles.wrapper}>
          <Text style={styles.namaaplikasi}>SMP AL-AZHAR MOBILE APP</Text>
          <Text style={styles.version}>Versi 1.0.0</Text>
          <Text style={styles.version}>@kelompok2_PTI_ITERA</Text>
          <Image source={{ uri: splash }} style={styles.logo} />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AdminLogin")}
          style={styles.loginAdm}
        >
          <Text>Login admin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titlebar: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 110,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  logo: {
    width: 146,
    height: 170,
    marginVertical: 15,
  },
  namaaplikasi: {
    fontFamily: "serif",
    fontSize: 20,
    // fontWeight: 'SemiBold',
    textAlign: "center",
  },
  version: {
    fontFamily: "serif",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
});
