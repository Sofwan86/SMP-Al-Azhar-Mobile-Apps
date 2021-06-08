import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { CardPeng, CardPengumuman } from "../../components";
import FIREBASE from "../../config/Firebase";

export default class Pengumuman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pengumumans: {},
      pengumumansKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref("Pengumuman")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let pengumumanItem = { ...data };

        this.setState({
          pengumumans: pengumumanItem,
          pengumumansKey: Object.keys(pengumumanItem),
        });
      });
  };
  render() {
    const { pengumumans, pengumumansKey } = this.state;
    return (
      <ScrollView>
        <View style={styles.page}>
          <View style={styles.header}></View>

          <View style={styles.listKontak}>
            {pengumumansKey.length > 0 ? (
              pengumumansKey.map((key) => (
                <CardPeng
                  key={key}
                  pengumumanItem={pengumumans[key]}
                  id={key}
                  {...this.props}
                  removeData={this.removeData}
                />
              ))
            ) : (
              <Text>Belum ada pengumuman</Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
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
    width: 370,
    height: 200,
    justifyContent: "center",
    marginHorizontal: 18,
    marginTop: 18,
    alignItems: "center",
  },
  namasiswaberprestasi: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#000000",
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
  },
});
