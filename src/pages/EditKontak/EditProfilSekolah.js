import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { InputData } from "../../components";
import FIREBASE from "../../config/Firebase";

export default class EditProfilSekolah extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      akreditasi: "",
      alamat: "",
      email: "",
      noTelp: "",
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref("Profil/" + this.props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let profilSekolahItem = { ...data };

        this.setState({
          nama: profilSekolahItem.nama,
          akreditasi: profilSekolahItem.akreditasi,
          alamat: profilSekolahItem.alamat,
          email: profilSekolahItem.email,
          noTelp: profilSekolahItem.noTelp,
        });
      });
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (
      this.state.nama &&
      this.state.akreditasi &&
      this.state.alamat &&
      this.state.email &&
      this.state.noTelp
    ) {
      const kontakReferansi = FIREBASE.database().ref(
        "Profil/" + this.props.route.params.id
      );
      const Profil = {
        nama: this.state.nama,
        akreditasi: this.state.akreditasi,
        alamat: this.state.alamat,
        email: this.state.email,
        noTelp: this.state.noTelp,
      };
      kontakReferansi
        .update(Profil)
        .then((data) => {
          Alert.alert("Terupdate");
          this.props.navigation.replace("AdmProfilSekolah");
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
          label="nama :"
          placeholder="Masukan nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="akreditasi :"
          placeholder="Masukan akreditasi"
          onChangeText={this.onChangeText}
          value={this.state.akreditasi}
          namaState="akreditasi"
        />
        <InputData
          label="alamat :"
          placeholder="Masukan alamat"
          isTextArea="true"
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
        />
        <InputData
          label="email :"
          placeholder="Masukan email"
          onChangeText={this.onChangeText}
          value={this.state.email}
          namaState="email"
        />
        <InputData
          label="noTelp :"
          keyboardType="number-pad"
          placeholder="Masukan nomor telp"
          onChangeText={this.onChangeText}
          value={this.state.noTelp}
          namaState="noTelp"
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
