import {
  faBullhorn,
  faComment,
  faTimes,
  faInfoCircle,
  faEdit,
  faRunning,
  faTrophy,
  faUser,
  faUserPlus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { CardKontak } from "../../components";
import FIREBASE from "../../config/Firebase";
import Slides from "./slides";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class HomeAdmin extends Component {
  onBottomPress = () => {
    Alert.alert("Info", "Ingin logout ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          FIREBASE.auth()
          .signOut()
          .then(this.onLogoutSuccess)
          .catch((err) => {
            this.setState({
              error: err.message,
            });
          });
          Alert.alert("Sukses", "Berhasil logout");
        },
      },
    ]);


   
  };

  onLogoutSuccess = () => {
    this.props.navigation.replace("Home");
  };

  render() {
    return (
      <View style={styles.page}>
        <Slides />
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate("EditSlides")}
          style={styles.edit}
        >
          <FontAwesomeIcon icon={faEdit} color={"orange"} size={40} />
        </TouchableOpacity> */}
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AdmProfilSekolah")}
            style={styles.profil}
          >
            <View style={styles.icon}>
              <FontAwesomeIcon icon={faEdit} color={"orange"} size={25} />
            </View>
            <FontAwesomeIcon icon={faUser} size={30} />
            <Text>Profil Sekolah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AdmInfoPPDB")}
            style={styles.profil}
          >
            <View style={styles.icon}>
              <FontAwesomeIcon icon={faEdit} color={"orange"} size={25} />
            </View>
            <FontAwesomeIcon icon={faUserPlus} size={30} />
            <Text>Informasi PPDB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AdmPrestasi")}
            style={styles.profil}
          >
            <View style={styles.icon}>
              <FontAwesomeIcon icon={faEdit} color={"orange"} size={25} />
            </View>
            <FontAwesomeIcon icon={faTrophy} size={30} />
            <Text>Prestasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AdmPengumuman")}
            style={styles.profil}
          >
            <View style={styles.icon}>
              <FontAwesomeIcon icon={faEdit} color={"orange"} size={25} />
            </View>
            <FontAwesomeIcon icon={faBullhorn} size={30} />
            <Text>Pengumuman</Text>
          </TouchableOpacity>
        </View>
        <Text>Admin</Text>
        <TouchableOpacity
          style={{ padding: 20, borderWidth: 1, borderColor: "black" }}
          onPress={this.onBottomPress}
        >
          <Text style={{ color: "#1B9CFC" }}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.wrapButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("JawabAdmin")}
            style={styles.btnTambah}
          >
            <FontAwesomeIcon icon={faComment} size={30} color={"white"} />
            <Text style={{ color: "white", fontSize:11 }}>Jawab pertanyaan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapButtons}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TambahAdmin")}
            style={styles.btnTambah}
          >
            <FontAwesomeIcon icon={faPlus} size={20} color={"white"} />
            <Text style={{ color: "white",fontSize:11 }}>Tambah Admin</Text>
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
    bottom: 40,
    right: 0,
    margin: 30,
  },
  wrapButtons: {
    flex: 1,
    position: "absolute",
    bottom: 90,
    left: 0,
  },
  btnTambah: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 50,
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
    height: hp('13%'),
    width: wp('33%') 
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
    top: 220,
    flexDirection: "column",
  },
  menu1: {
    position: "absolute",
    top: 220,
    right: 60,
    flexDirection: "column",
  },
  icon: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  edit: {
    position: "absolute",
    top: 5,
    left: 0,
  },
});
