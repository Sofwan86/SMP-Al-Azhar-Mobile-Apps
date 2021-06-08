import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { InputData } from "../../components";
import FIREBASE from "../../config/Firebase";

export default class TambahPrestasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      judul: "",
      isi: "",
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.judul && this.state.isi) {
      const kontakReferansi = FIREBASE.database().ref("Pengumuman");
      const Pengumuman = {
        judul: this.state.judul,
        isi: this.state.isi,
      };
      kontakReferansi
        .push(Pengumuman)
        .then((data) => {
          Alert.alert("Tersimpan");
          this.props.navigation.replace("AdmPengumuman");
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
          label="Judul :"
          placeholder="Masukan judul"
          onChangeText={this.onChangeText}
          value={this.state.judul}
          namaState="judul"
        />
        <InputData
          label="Isi :"
          placeholder="Masukan isi"
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
