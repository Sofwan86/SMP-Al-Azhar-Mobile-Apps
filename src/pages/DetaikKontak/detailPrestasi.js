import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import FIREBASE from "../../config/Firebase";
export default class DetailPrestasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prestasi: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref("Prestasi/" + this.props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let prestasiItem = { ...data };

        this.setState({
          prestasi: prestasiItem,
        });
      });
  }

  render() {
    const { prestasi } = this.state;
    return (
      <View style={styles.pages}>
        <Text>Nama siswa: </Text>
        <Text style={styles.text}>{prestasi.nama} </Text>

        <Text>Deskripsi perstasi : </Text>
        <Text style={styles.text}>{prestasi.prestasi} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    margin: 30,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
