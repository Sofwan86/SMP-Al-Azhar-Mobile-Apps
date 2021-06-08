import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
const voli =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Fvoli.jpg?alt=media&token=a9f93b16-80ab-494d-9e09-8af02cd5986b";
const pramuka =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Fpramuka.jpg?alt=media&token=1067537d-bd0c-41ea-a1ec-fc1a7af6d754";
const rohis =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Frohis.jpg?alt=media&token=22bfc5ee-85e4-484e-afe1-ef1a51f9a2bf";
const pmr =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Fpmr.jpg?alt=media&token=4941254d-e1be-4c7f-9afd-efc9fcfc3759";

export default class Extracuricular extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image source={{ uri: voli }} style={styles.fotoprofil} />
              <Text style={styles.namaeskul}>Voli</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image source={{ uri: pramuka }} style={styles.fotoprofil} />
              <Text style={styles.namaeskul}>Pramuka</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image source={{ uri: rohis }} style={styles.fotoprofil} />
              <Text style={styles.namaeskul}>Rohis</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image source={{ uri: pmr }} style={styles.fotoprofil} />
              <Text style={styles.namaeskul}>PMR</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.subjudul}>Lainnya</Text>
            <Text style={styles.isi}>
              English Club{"\t"}
              {"\t"}
              {"\t"}Olimpiade Sains{"\t"}
              {"\t"}
              {"\t"}Club MTK {"\n"}
              {"\n"}
              Vokal grup{"\t"}
              {"\t"}
              {"\t"}
              {"\t"}Seni Tari{"\t"}
              {"\t"}
              {"\t"}Keterampilan{"\n"}
              {"\n"}
              Band{"\t"}
              {"\t"}
              {"\t"}Futsal{"\t"}
              {"\t"}
              {"\t"}Sepakbola{"\t"}
              {"\t"}
              {"\t"}Atletik{"\n"}
              {"\n"}
              Taekwondo{"\t"}
              {"\t"}
              {"\t"}Pencak silat{"\t"}
              {"\t"}
              {"\t"}Karate
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  namaeskul: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#000000",
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 18,
    marginVertical: 18,
    borderRadius: 3,
    shadowRadius: 3,
  },
  subjudul: {
    fontSize: 20,
    // fontWeight: 'Medium',
    fontFamily: "Roboto",
    marginBottom: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  isi: {
    textAlign: "left",
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
