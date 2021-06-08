import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { InputData } from "../../components";
import FIREBASE from "../../config/Firebase";

export default class TambahInfoPPDB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tahun: "",
      isi: "",
      judul: "",
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.tahun && this.state.isi && this.state.judul) {
      const kontakReferansi = FIREBASE.database().ref("InfoPPDB");
      const InfoPPDB = {
        tahun: this.state.tahun,
        isi: this.state.isi,
        judul: this.state.judul,
      };
      kontakReferansi
        .push(InfoPPDB)
        .then((data) => {
          Alert.alert("Tersimpan");
          this.props.navigation.replace("AdmInfoPPDB");
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      Alert.alert("harus diisi");
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Tahun Ajaran :"
          placeholder="Masukan Tahun Ajaran"
          onChangeText={this.onChangeText}
          value={this.state.tahun}
          namaState="tahun"
        />
        <InputData
          label="judul Pelaksanaan :"
          placeholder="Masukan judul"
          onChangeText={this.onChangeText}
          value={this.state.judul}
          namaState="judul"
        />
        <InputData
          label="isi :"
          placeholder="Masukan Perstaratan"
          isTextArea="true"
          onChangeText={this.onChangeText}
          value={this.state.isi}
          namaState="isi"
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => this.onSubmit()}
        >
          <Text style={styles.textSubmit}>Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 20,
  },
  btnSubmit: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textSubmit: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
