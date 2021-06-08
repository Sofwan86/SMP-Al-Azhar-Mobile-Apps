import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CardTanyaSekolah } from "../../components";
import FIREBASE from "../../config/Firebase";
import { faComment, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
export default class HomeTanya extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeTanyas: {},
      homeTanyasKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref("TanyaSekolah")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let homeTanyaItem = { ...data };

        this.setState({
          homeTanyas: homeTanyaItem,
          homeTanyasKey: Object.keys(homeTanyaItem),
        });
      });
  };
  render() {
    const { homeTanyas, homeTanyasKey } = this.state;
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.page}>
              <View style={styles.header}></View>

              <View style={styles.listKontak}>
                {homeTanyasKey.length > 0 ? (
                  homeTanyasKey.map((key) => (
                    <CardTanyaSekolah
                      key={key}
                      homeTanyaItem={homeTanyas[key]}
                      id={key}
                      {...this.props}
                      removeData={this.removeData}
                    />
                  ))
                ) : (
                  <Text>Daftar Kosong</Text>
                )}
              </View>
            </View>
           
          </View>
        </ScrollView>
        <View style={styles.wrapButton}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TanyaSekolah")}
                style={styles.btnTambah}
              >
                <FontAwesomeIcon icon={faComment} size={30} color={"white"} />
                <Text style={{ color: "black" }}>Tanya Sekolah</Text>
              </TouchableOpacity>
            </View>
        <View style={styles.wrapButtons}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Room")}
            style={styles.btnTambah}
          >
            <FontAwesomeIcon icon={faUsers} size={30} color={"white"} />
            <Text style={{ color: "black" }}>Room Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 50,
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
  wrapButton: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
  },
  btnTambah: {
    padding: 10,
    backgroundColor: "#00ff00",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wrapButtons: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
