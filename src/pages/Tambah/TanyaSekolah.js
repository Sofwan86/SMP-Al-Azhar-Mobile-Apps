import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { InputData } from "../../components";
import FIREBASE from "../../config/Firebase";

export default class TanyaSekolah extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      pertanyaan: "",
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.pertanyaan && this.state.nama) {
      const kontakReferansi = FIREBASE.database().ref("TanyaSekolah");
      const TanyaSekolah = {
        nama: this.state.nama,
        pertanyaan: "Pertanyaan:\n" + this.state.pertanyaan,
      };
      kontakReferansi
        .push(TanyaSekolah)
        .then((data) => {
          Alert.alert("Tersimpan");
          this.props.navigation.replace("HomeTanya");
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
          label="Nama :"
          placeholder="Nama kamu"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="Pertanyaan :"
          placeholder="Masukan pertanyaan"
          onChangeText={this.onChangeText}
          isTextArea="true"
          value={this.state.pertanyaan}
          namaState="pertanyaan"
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
