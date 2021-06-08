import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import FIREBASE from "../../config/Firebase";
export default class DetailPengumuman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pengumuman: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref("Pengumuman/" + this.props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let pengumumanItem = { ...data };

        this.setState({
          pengumuman: pengumumanItem,
        });
      });
  }

  render() {
    const { pengumuman } = this.state;
    return (
      <View style={styles.pages}>
        <Text>Judul Pengumuman: </Text>
        <Text style={styles.text}>{pengumuman.judul} </Text>

        <Text>Deskripsi Pengumuman: </Text>
        <Text style={styles.text}>{pengumuman.isi} </Text>
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
