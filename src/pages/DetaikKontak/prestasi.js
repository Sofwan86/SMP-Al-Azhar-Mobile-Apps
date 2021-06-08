import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { CardPres } from "../../components";
import FIREBASE from "../../config/Firebase";
const LCC =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2FWhatsApp%20Image%202021-04-21%20at%2015.53.29.jpeg?alt=media&token=a01649f5-48e1-450c-90f3-950b98a807b6";
const KOSN =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2FWhatsApp%20Image%202021-04-21%20at%2015.53.28%20(2).jpeg?alt=media&token=ecbf2e34-216b-455c-9912-59a454613edc";
const pocil =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2FWhatsApp%20Image%202021-04-21%20at%2015.53.28%20(1).jpeg?alt=media&token=fdc9e880-df75-4439-ae3a-96d419c8ef20";
export default class Prestasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prestasis: {},
      prestasisKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref("Prestasi")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let prestasiItem = { ...data };

        this.setState({
          prestasis: prestasiItem,
          prestasisKey: Object.keys(prestasiItem),
        });
      });
  };
  render() {
    const { prestasis, prestasisKey } = this.state;
    return (
      <ScrollView>
        <View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={{ uri: LCC }} style={styles.fotoprofil} />
              <View>
                <Text style={styles.namasiswaberprestasi}>Thalita Zahra S</Text>
                <Text style={styles.namakejuaraan}>
                  LCC Permuseuman dan Perkebunan Tingkat Provinsi
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={{ uri: KOSN }} style={styles.fotoprofil} />
              <View>
                <Text style={styles.namasiswaberprestasi}>
                  Tania Raisa Azizah
                </Text>
                <Text style={styles.namakejuaraan}>KOSN TK Bandar Lampung</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={{ uri: pocil }} style={styles.fotoprofil} />
              <View>
                <Text style={styles.namasiswaberprestasi}>
                  Wahyu Tri Fadila
                </Text>
                <Text style={styles.namakejuaraan}>POCIL Selampung POLDA</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={{ uri: LCC }} style={styles.fotoprofil} />
              <View>
                <Text style={styles.namasiswaberprestasi}>
                  Daffa Ramanda Putra
                </Text>
                <Text style={styles.namakejuaraan}>
                  LCC Permuseuman dan Perkebunan Tingkat Provinsi
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={{ uri: LCC }} style={styles.fotoprofil} />
              <View>
                <Text style={styles.namasiswaberprestasi}>Akbar Maulana</Text>
                <Text style={styles.namakejuaraan}>
                  LCC Permuseuman dan Perkebunan Tingkat Provinsi
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page}>
          <View style={styles.listKontak}>
            {prestasisKey.length > 0 ? (
              prestasisKey.map((key) => (
                <CardPres
                  key={key}
                  prestasiItem={prestasis[key]}
                  id={key}
                  {...this.props}
                  removeData={this.removeData}
                />
              ))
            ) : (
              <Text></Text>
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
    width: 140,
    height: 140,
    justifyContent: "center",
    marginHorizontal: 18,
    marginTop: 18,
  },
  namasiswaberprestasi: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#000000",
    alignItems: "center",
    marginTop: 18,
    fontWeight: "bold",
  },
  namakejuaraan: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#000000",
    alignItems: "center",
    marginTop: 5,
    width: 180,
  },
});
