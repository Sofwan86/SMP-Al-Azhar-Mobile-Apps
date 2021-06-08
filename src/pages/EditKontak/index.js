// import React, { Component } from "react";
// import {
//   Text,
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { InputData } from "../../components";
// import FIREBASE from '../../config/Firebase'

// export default class EditKontak extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nama: "",
//       nomorHP: "",
//       alamat: "",
//     };
//   }

//   componentDidMount() {
//     FIREBASE.database()
//       .ref("Kontak/" + this.props.route.params.id)
//       .once("value", (querySnapShot) => {
//         let data = querySnapShot.val() ? querySnapShot.val() : [];
//         let kontakItem = { ...data };

//         this.setState({
//           nama: kontakItem.nama,
//           nomorHP: kontakItem.nomorHP,
//           alamat: kontakItem.alamat
//         });
//       });
//   }

//   onChangeText = (namaState, value) => {
//     this.setState({
//       [namaState]: value,
//     });
//   };

//   onSubmit = () => {
//       if(this.state.nama && this.state.nomorHP && this.state.alamat){
//         const kontakReferansi = FIREBASE.database().ref("Kontak/" + this.props.route.params.id)
//         const Kontak = {
//             nama: this.state.nama,
//             nomorHP: this.state.nomorHP,
//             alamat: this.state.alamat
//         }
//         kontakReferansi
//         .update(Kontak)
//         .then((data) => {
//             Alert.alert('Terupdate')
//             this.props.navigation.replace('Home')
//         })
//         .catch((error) => {
//             console.log('error',error)
//         })

//       }else{
//           Alert.alert('harus diisi')
//       }

//   };

//   render() {
//     return (
//       <View style={styles.pages}>
//         <InputData
//           label="Nama :"
//           placeholder="Masukan nama"
//           onChangeText={this.onChangeText}
//           value={this.state.nama}
//           namaState="nama"
//         />
//         <InputData
//           keyboardType="number-pad"
//           label="No HP :"
//           placeholder="Masukan nomor hp"
//           onChangeText={this.onChangeText}
//           value={this.state.nomorHP}
//           namaState="nomorHP"
//         />
//         <InputData
//           label="Alamat :"
//           placeholder="Masukan alamat"
//           isTextArea="true"
//           onChangeText={this.onChangeText}
//           value={this.state.alamat}
//           namaState="alamat"
//         />
//         <TouchableOpacity
//           style={styles.btnSubmit}
//           onPress={() => this.onSubmit()}
//         >
//           <Text style={styles.textSubmit}>Submit </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   pages: {
//     flex: 1,
//     padding: 20,
//   },
//   btnSubmit: {
//     backgroundColor: "black",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   textSubmit: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//     fontSize: 16,
//   },
// });
