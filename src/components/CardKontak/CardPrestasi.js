import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

const CardPrestasi = ({ id, prestasiItem, navigation, removeData }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.nama}>{prestasiItem.nama}</Text>
        <Text style={styles.prestasi}>{prestasiItem.prestasi}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faEdit}
          color={"orange"}
          size={25}
          onPress={() => navigation.navigate("EditPrestasi", { id: id })}
        />
        <FontAwesomeIcon
          icon={faTimes}
          color={"red"}
          size={25}
          onPress={() => removeData(id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardPrestasi;

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
