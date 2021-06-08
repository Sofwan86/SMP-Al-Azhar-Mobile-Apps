import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Alert
} from "react-native";
import FIREBASE from "../../config/Firebase";

class TambahAdmin extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: "",
  };

  onBottomPress = () => {
    if(this.state.email && this.state.password){
    FIREBASE.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("User account created & signed in!");
        this.onLoginSuccess();
        Alert.alert("Sukses", "Berhasil menambah admin")
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          this.setState({
            error: "That email address is already in use!",
          });
        }

        if (error.code === "auth/invalid-email") {
          this.setState({
            error: "That email address is invalid!",
          });
        }

        console.error(error);
      });
    }else {
      Alert.alert("Upsss", "Email/password tidak boleh kosong")
    }
    };

  onLoginSuccess = () => {
    this.props.navigation.replace("HomeAdmin");
    this.setState({
      error: "",
      loading: false,
    });
  };
  render() {
    return (
      <View>
        <Text style={styles.login}>Tambah Admin</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder="email"
          style={styles.user}
        />
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          autoCapitalize="none"
          placeholder="password"
          style={styles.password}
        />

        <TouchableOpacity style={styles.log} onPress={this.onBottomPress}>
          <Button onPress={this.onBottomPress} title="tambah" color="#C4C4C4" />
        </TouchableOpacity>

        <Text style={styles.errorText}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    position: "absolute",
    left: 47,
    top: 91,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    color: "black",
  },
  user: {
    position: "absolute",
    width: 273,
    height: 45,
    left: 37,
    top: 190,
    fontFamily: "serif",
    borderWidth: 1,
    borderColor: "#C3C3C3",
    paddingLeft: 20,
    color: "#20232a",
  },
  password: {
    position: "absolute",
    width: 273,
    height: 45,
    left: 37,
    top: 257,
    fontFamily: "serif",
    borderWidth: 1,
    borderColor: "#C3C3C3",
    paddingLeft: 20,
    color: "#20232a",
  },
  log: {
    position: "absolute",
    width: 273,
    height: 39,
    left: 37,
    top: 332,
    color: "#C4C4C4",
  },
  errorText: {
    top: 360,
    fontSize: 20,
    color: "red",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default TambahAdmin;
