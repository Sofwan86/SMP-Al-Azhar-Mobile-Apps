import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

const CardProfilSekolah = ({
  id,
  profilSekolahItem,
  navigation,
  removeData,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.nama}>{profilSekolahItem.nama}</Text>
        <Text style={styles.noHP}>{profilSekolahItem.akreditasi}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faEdit}
          color={"orange"}
          size={25}
          onPress={() => navigation.navigate("EditProfilSekolah", { id: id })}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardProfilSekolah;

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
