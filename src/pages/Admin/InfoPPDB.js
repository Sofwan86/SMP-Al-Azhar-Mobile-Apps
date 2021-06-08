import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { Component } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { CardInfoPPDB } from "../../components";
import FIREBASE from "../../config/Firebase";

export default class AdmInfoPPDB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoPPDBs: {},
      infoPPDBsKey: [],
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
            .ref("InfoPPDB/" + id)
            .remove();
          this.ambilData();
          Alert.alert("Hapus", "Data dihapus");
        },
      },
    ]);
  };

  ambilData = () => {
    FIREBASE.database()
      .ref("InfoPPDB")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let infoPPDBItem = { ...data };

        this.setState({
          infoPPDBs: infoPPDBItem,
          infoPPDBsKey: Object.keys(infoPPDBItem),
        });
      });
  };

  render() {
    const { infoPPDBs, infoPPDBsKey } = this.state;
    return (
      <View>
        <ScrollView>
          <View style={styles.page}>
            <View style={styles.header}></View>

            <View style={styles.listKontak}>
              {infoPPDBsKey.length > 0 ? (
                infoPPDBsKey.map((key) => (
                  <CardInfoPPDB
                    key={key}
                    infoPPDBItem={infoPPDBs[key]}
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
        </ScrollView>
        <View style={styles.wrapButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TambahInfoPPDB")}
            style={styles.btnTambah}
          >
            <FontAwesomeIcon icon={faPlus} size={20} color={"white"} />
            <Text style={{ color: "white" }}>Tambah</Text>
          </TouchableOpacity>
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
