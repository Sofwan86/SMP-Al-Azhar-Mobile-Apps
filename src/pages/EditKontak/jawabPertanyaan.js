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

export default class JawabPertanyaan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pertanyaan: "",
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref("TanyaSekolah/" + this.props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let tanyaSekolahItem = { ...data };

        this.setState({
          pertanyaan: tanyaSekolahItem.pertanyaan + "\n\nJawab: \n",
        });
      });
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.pertanyaan) {
      const kontakReferansi = FIREBASE.database().ref(
        "TanyaSekolah/" + this.props.route.params.id
      );
      const TanyaSekolah = {
        pertanyaan: this.state.pertanyaan,
      };
      kontakReferansi
        .update(TanyaSekolah)
        .then((data) => {
          Alert.alert("Berhasil dijawab");
          this.props.navigation.replace("JawabAdmin");
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
          label="pertanyaan :"
          placeholder="Masukan pertanyaan"
          isTextArea="true"
          onChangeText={this.onChangeText}
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
