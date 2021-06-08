import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

const CardInfoPPDB = ({ id, infoPPDBItem, navigation, removeData }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.nama}>{infoPPDBItem.judul}</Text>
        <Text style={styles.noHP}>{infoPPDBItem.isi}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faEdit}
          color={"orange"}
          size={25}
          onPress={() => navigation.navigate("EditInfoPPDB", { id: id })}
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

export default CardInfoPPDB;

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
