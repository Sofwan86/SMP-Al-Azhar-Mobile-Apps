import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import FIREBASE from "../../config/Firebase";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const profil =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Fprofil1.png?alt=media&token=20a0d056-1601-40ba-89f9-c6a8aa2313ac";
const alamat =
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Falamat.png?alt=media&token=1da9368c-d80c-4d87-a594-f07d9e97e57a";
export default class ProfilSekolah extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilSekolah: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref("Profil/-MZhDd8QC9ciirJMRoTC")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : [];
        let profilSekolahItem = { ...data };

        this.setState({
          profilSekolah: profilSekolahItem,
        });
      });
  }
  render() {
    const { profilSekolah } = this.state;
    return (
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.judulprofil}>
          {profilSekolah.nama}
              </Text>
        <Image source={{uri:profil}} style={styles.fotoprofil} />
      </View>
      <View style={styles.card}>
        <Text style={styles.subjudul}>Info Sekolah</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>NPSN</Text>
          <Text style={styles.isi}>10807221</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>NSS</Text>
          <Text style={styles.isi}>202126001085</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Nama</Text>
          <Text style={styles.isi}>{profilSekolah.nama}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Akreditasi</Text>
          <Text style={styles.isi}>{profilSekolah.akreditasi}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Alamat</Text>
          <Text style={styles.isi}>{profilSekolah.alamat}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Kodepos</Text>
          <Text style={styles.isi}>35141</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Nomer Telpon</Text>
          <Text style={styles.isi}>{profilSekolah.noTelp}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Nomer Faks</Text>
          <Text style={styles.isi}>-</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Surel</Text>
          <Text style={styles.isi}>{profilSekolah.email}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Jenjang</Text>
          <Text style={styles.isi}>SMP</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Status</Text>
          <Text style={styles.isi}>Swasta</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Situs</Text>
          <Text style={styles.isi}>smpalazhar3bl.blogspot.com</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Lintang</Text>
          <Text style={styles.isi}>-5.37823374691718</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Bujur</Text>
          <Text style={styles.isi}>105.27425229549408</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Ketinggian</Text>
          <Text style={styles.isi}>103</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Waktu Belajar</Text>
          <Text style={styles.isi}>Sekolah Pagi</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.subjudul}>Identitas Sekolah</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Bentuk Pendidikan</Text>
          <Text style={styles.isi}>Yayasan</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Status Kepemilikan</Text>
          <Text style={styles.isi}>172/I.12.1.6/I.1989</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>SK Pendirian Sekolah</Text>
          <Text style={styles.isi}>1989-10-06</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>SK Izin Operasional</Text>
          <Text style={styles.isi}>1824/I.12.BI/U/1989</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subisi}>Tanggal SK Izin Operasional</Text>
          <Text style={styles.isi}>1989-12-13</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.subjudul}>Hubungi Kami</Text>
        <Text style={styles.subisi}>Email</Text>
        <Text style={styles.isi}>{profilSekolah.email}</Text>
        <Text style={styles.subisi}>Telepon</Text>
        <Text style={styles.isi}>{profilSekolah.noTelp}</Text>
        <Text style={styles.subisi}>Faks</Text>
        <Text style={styles.isi}>-</Text>
        <Text style={styles.subisi}>Alamat</Text>
        <Text style={styles.isi}>{profilSekolah.alamat}</Text>
        <Image source={{uri:alamat}} style={styles.gambaralamat} />
      </View>
    </ScrollView>
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
    width: wp('90%'),
    height: 133,
    justifyContent: "center",
    marginHorizontal: 18,
  },
  judulprofil: {
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginVertical: 17,
    marginHorizontal: 63,
    textAlign: "center",
    color: "#525252",
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
    textAlign:"center"
  },
  isi: {
    textAlign: "left",
    marginHorizontal: 15,
    marginBottom: 10,
    maxWidth:240
  },
  gambaralamat: {
    width: wp('80%'),
    height: 176,
    marginHorizontal: 18,
    marginBottom: 34,
    marginTop: 18,
 
  },
  subisi: {
    fontSize: 15,
    fontFamily: 'Roboto',
    marginBottom: 5,
    marginHorizontal: 15,
    fontWeight: 'bold',
  }
});



