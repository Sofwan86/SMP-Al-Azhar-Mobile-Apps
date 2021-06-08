import React, { Component } from "react";
import { Text, Image, StyleSheet, View, Alert } from "react-native";
import { CardProfilSekolah } from "../../components";
import FIREBASE from "../../config/Firebase";

export default class AdmProfilSekolah extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilSekolahs: {},
      profilSekolahsKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  removeData = (id) => {
    Alert.alert("Info", "Hapus data ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          FIREBASE.database()
            .ref("Profil/" + id)
            .remove();
          this.ambilData();
          Alert.alert("Hapus", "Data dihapus");
        },
      },
    ]);
  };

  ambilData = () => {
    FIREBASE.database()
      .ref("Profil")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let profilSekolahItem = { ...data };

        this.setState({
          profilSekolahs: profilSekolahItem,
          profilSekolahsKey: Object.keys(profilSekolahItem),
        });
      });
  };

  render() {
    const { profilSekolahs, profilSekolahsKey } = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.header}></View>

        <View style={styles.listKontak}>
          {profilSekolahsKey.length > 0 ? (
            profilSekolahsKey.map((key) => (
              <CardProfilSekolah
                key={key}
                profilSekolahItem={profilSekolahs[key]}
                id={key}
                {...this.props}
                removeData={this.removeData}
              />
            ))
          ) : (
            <Text>Daftar Kosong</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapButton: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profil: {
    position: "relative",
    top: 10,
    left: 50,
    borderWidth: 4,
    borderRadius: 10,
    padding: 10,
    marginRight: 50,
    marginTop: 30,
    borderColor: "green",
  },

  tinyLogo: {
    flex: 1,
    position: "absolute",
    width: 100,
    height: 100,
    top: 250,
    left: 50,
  },
  textProfil: {
    position: "absolute",
    top: 251,
    left: 70,
  },
  menu: {
    position: "absolute",
    top: 250,
    flexDirection: "column",
  },
  menu1: {
    position: "absolute",
    top: 250,
    right: 60,
    flexDirection: "column",
  },
});
