import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CardPeng = ({ id, pengumumanItem, navigation, removeData }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("DetailPengumuman", { id: id })}
    >
      <View>
        <Text style={styles.nama}>{pengumumanItem.judul}</Text>
        <Text style={styles.prestasi}>{pengumumanItem.isi}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPeng;

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
