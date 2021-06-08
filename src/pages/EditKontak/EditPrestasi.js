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

export default class EditPrestasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      prestasi: "",
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref("Prestasi/" + this.props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let prestasiItem = { ...data };

        this.setState({
          nama: prestasiItem.nama,
          prestasi: prestasiItem.prestasi,
        });
      });
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.nama && this.state.prestasi) {
      const kontakReferansi = FIREBASE.database().ref(
        "Prestasi/" + this.props.route.params.id
      );
      const Prestasi = {
        nama: this.state.nama,
        prestasi: this.state.prestasi,
      };
      kontakReferansi
        .update(Prestasi)
        .then((data) => {
          Alert.alert("Terupdate");
          this.props.navigation.replace("AdmPrestasi");
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
          label="prestasi :"
          placeholder="Masukan prestasi"
          isTextArea="true"
          onChangeText={this.onChangeText}
          value={this.state.prestasi}
          namaState="prestasi"
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
