import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CardInfo = ({ id, infoPPDBItem, navigation, removeData }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.nama}>{infoPPDBItem.judul}</Text>
        <Text style={styles.noHP}>{infoPPDBItem.isi}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: "bold",
    fontSize: 16,
  },
  noHP: {
    fontSize: 12,
    color: "gray",
  },
  icon: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
