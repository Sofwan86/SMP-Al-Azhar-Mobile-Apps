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

class AdminLogin extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: "",
  };

  onBottomPress = () => {
    if(this.state.email && this.state.password){
    FIREBASE.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch((err) => {
        this.setState({
          error: err.message,
        });
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
        <Text style={styles.login}>Login</Text>
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
          <Button onPress={this.onBottomPress} title="login" color="#C4C4C4" />
        </TouchableOpacity>

        <Text style={styles.errorText}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    position: "absolute",
    width: 76,
    height: 35,
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

export default AdminLogin;
