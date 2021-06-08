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

export default class EditInfoPPDB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tahun: "",
      judul: "",
      isi: "",
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref("InfoPPDB/" + this.props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let infoPPDBItem = { ...data };

        this.setState({
          tahun: infoPPDBItem.tahun,
          judul: infoPPDBItem.judul,
          isi: infoPPDBItem.isi,
        });
      });
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.tahun && this.state.judul && this.state.isi) {
      const kontakReferansi = FIREBASE.database().ref(
        "InfoPPDB/" + this.props.route.params.id
      );
      const InfoPPDB = {
        tahun: this.state.tahun,
        judul: this.state.judul,
        isi: this.state.isi,
      };
      kontakReferansi
        .update(InfoPPDB)
        .then((data) => {
          Alert.alert("Terupdate");
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
          label="tahun :"
          placeholder="Masukan tahun"
          onChangeText={this.onChangeText}
          value={this.state.tahun}
          namaState="tahun"
        />
        <InputData
          label="judul :"
          placeholder="Masukan judul"
          onChangeText={this.onChangeText}
          value={this.state.judul}
          namaState="judul"
        />
        <InputData
          label="isi :"
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
