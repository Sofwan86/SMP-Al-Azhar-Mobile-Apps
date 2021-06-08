import {
  faBullhorn,
  faComment,
  faEgg,
  faInfoCircle,
  faPlus,
  faRunning,
  faTrophy,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import Slides from "./slides";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PushNotification from "react-native-push-notification";

export default class Home extends Component {
componentDidMount(){
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
  
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
  
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });
}
  render() {
    return (

      <View style={styles.page}>
        <Slides />
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ProfilSekolah")}
            style={styles.profil}
          >
            <FontAwesomeIcon color={"#00ff00"} icon={faUser} size={30} />
            <Text>Profil Sekolah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Ekstrakulikuler")}
            style={styles.profil}
          >
            <FontAwesomeIcon color={"#00ff00"} icon={faRunning} size={30} />
            <Text>Ekstrakulikuler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("InformasiPPDB")}
            style={styles.profil}
          >
            <FontAwesomeIcon color={"#00ff00"} icon={faUserPlus} size={30} />
            <Text>Informasi PPDB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Prestasi")}
            style={styles.profil}
          >
            <FontAwesomeIcon color={"#00ff00"} icon={faTrophy} size={30} />
            <Text>Prestasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Pengumuman")}
            style={styles.profil}
          >
            <FontAwesomeIcon color={"#00ff00"} icon={faBullhorn} size={30} />
            <Text>Pengumuman</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profil}
            onPress={() => this.props.navigation.navigate("About")}
          >
            <FontAwesomeIcon color={"#00ff00"} icon={faInfoCircle} size={30} />
            <Text>Tentang Aplikasi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomeTanya")}
            style={styles.btnTambah}
          >
            <FontAwesomeIcon icon={faComment} size={30} color={"white"} />
            <Text style={{ color: "white", fontSize:11 }}>Tanya Sekolah</Text>
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
    top: 200,
    flexDirection: "column",
  },
  menu1: {
    position: "absolute",
    top: 200,
    right: 50,
    flexDirection: "column",
  },
  edit: {
    position: "absolute",
    top: 200,
    right: 0,
  },
});
