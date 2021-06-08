import React from "react";
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
  faSitemap,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, Image, StyleSheet,TouchableOpacity, ScrollView } from "react-native";
import { Component } from "react";
import FIREBASE from "../../config/Firebase";
import { CardInfo } from "../../components";
const profil =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Fprofil1.png?alt=media&token=20a0d056-1601-40ba-89f9-c6a8aa2313ac";
export default class InformasiPPDB extends Component {
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
        <View>
          <Image source={{ uri: profil }} style={styles.fotoprofil} />
          <Text style={styles.judulprofil}>
            Pendaftaran Peserta Didik Baru Tahun Ajaran 2021-2022
          </Text>
        </View>
        <View style={styles.listKontak}>
          {infoPPDBsKey.length > 0 ? (
            infoPPDBsKey.map((key) => (
              <CardInfo
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
        
      </ScrollView>
      <View style={styles.wrapButtons}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("WebPPDB")}
        style={styles.btnTambah}
      >
        <FontAwesomeIcon icon={faGlobe} size={20} color={"white"} />
        <Text style={{ color: "white" }}>Buka web</Text>
      </TouchableOpacity>
    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  titlebar: {
    backgroundColor: "#AEBE89",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  namahalaman: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  fotoprofil: {
    width: 360,
    height: 133,
    alignItems:"center",
    justifyContent: "center",
    marginHorizontal: 18,
    marginVertical: 18,
  },
  judulprofil: {
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginHorizontal: 63,
    textAlign: "center",
    color: "#525252",
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 18,
    marginVertical: 18,
    borderRadius: 3,
    shadowRadius: 3,
  },
  subjudul: {
    fontSize: 20,
    textAlign: "center",
    // fontWeight: 'Medium',
    fontFamily: "Roboto",
    marginBottom: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  isi: {
    textAlign: "left",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  wrapButtons: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
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
  
});
