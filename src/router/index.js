import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Pengumuman,
  TambahPengumuman,
  HomeAdmin,
  AdmPrestasi,
  AdmPengumuman,
  TambahPrestasi,
  About,
  AdminLogin,
  Prestasi,
  InformasiPPDB,
  AdmInfoPPDB,
  TambahInfoPPDB,
  EditInfoPPDB,
  ProfilSekolah,
  EditProfilSekolah,
  AdmProfilSekolah,
  HomeTanya,
  TanyaSekolah,
  EditSlides,
  DetailPrestasi,
  Ekstrakulikuler,
  DetailPengumuman,
  JawabAdmin,
  JawabPertanyaan,
  EditPengumuman,
  EditPrestasi,
  RoomChat,
  TambahAdmin,
  WebPPDB,
  Chat,
  Room,
} from "../pages/";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeAdmin"
        component={HomeAdmin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TambahPrestasi"
        component={TambahPrestasi}
        options={{ title: "Tambah Prestasi" }}
      />
      <Stack.Screen
        name="TambahPengumuman"
        component={TambahPengumuman}
        options={{ title: "Tambah Pengumuman" }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "Tentang Aplikasi" }}
      />
      <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{ title: "Admin Login" }}
      />
      <Stack.Screen
        name="Prestasi"
        component={Prestasi}
        options={{ title: "Prestasi" }}
      />
      <Stack.Screen
        name="AdmPrestasi"
        component={AdmPrestasi}
        options={{ title: "Prestasi Adm" }}
      />
      <Stack.Screen
        name="AdmPengumuman"
        component={AdmPengumuman}
        options={{ title: "Pengumuman Adm" }}
      />
      <Stack.Screen
        name="Pengumuman"
        component={Pengumuman}
        options={{ title: "Pengumuman" }}
      />
       <Stack.Screen
        name="InformasiPPDB"
        component={InformasiPPDB}
        options={{ title: "Informasi PPDB" }}
      />
      <Stack.Screen
        name="TambahInfoPPDB"
        component={TambahInfoPPDB}
        options={{ title: "Tambah Informasi PPDB" }}
      />
      <Stack.Screen
        name="AdmInfoPPDB"
        component={AdmInfoPPDB}
        options={{ title: "Informasi PPDB Adm" }}
      />
      <Stack.Screen
        name="EditInfoPPDB"
        component={EditInfoPPDB}
        options={{ title: "Edit Informasi PPDB" }}
      />
      <Stack.Screen
        name="ProfilSekolah"
        component={ProfilSekolah}
        options={{ title: "Profil Sekolah" }}
      />
      <Stack.Screen
        name="AdmProfilSekolah"
        component={AdmProfilSekolah}
        options={{ title: "Profil Sekolah Adm" }}
      />
      <Stack.Screen
        name="EditProfilSekolah"
        component={EditProfilSekolah}
        options={{ title: "Edit Profil Sekolah" }}
      />
      <Stack.Screen
        name="TanyaSekolah"
        component={TanyaSekolah}
        options={{ title: "Tambah Pertanyaan" }}
      />
      <Stack.Screen
        name="HomeTanya"
        component={HomeTanya}
        options={{ title: "Home Tanya" }}
      />
      <Stack.Screen
        name="EditSlides"
        component={EditSlides}
        options={{ title: "Edit Slides" }}
      />
      <Stack.Screen
        name="DetailPrestasi"
        component={DetailPrestasi}
        options={{ title: "Detail Prestasi" }}
      />
      <Stack.Screen
        name="Ekstrakulikuler"
        component={Ekstrakulikuler}
        options={{ title: "Ekstrakulikuler" }}
      />
      <Stack.Screen
        name="DetailPengumuman"
        component={DetailPengumuman}
        options={{ title: "Detail Pengumuman" }}
      />
        <Stack.Screen
        name="JawabAdmin"
        component={JawabAdmin}
        options={{ title: "Jawab Admin" }}
      />
        <Stack.Screen
        name="JawabPertanyaan"
        component={JawabPertanyaan}
        options={{ title: "Jawab Pertanyaan" }}
      />
      <Stack.Screen
        name="EditPengumuman"
        component={EditPengumuman}
        options={{ title: "Edit Pengumuman" }}
      />
      <Stack.Screen
        name="EditPrestasi"
        component={EditPrestasi}
        options={{ title: "Edit Prestasi" }}
      />
      <Stack.Screen
        name="RoomChat"
        component={RoomChat}
        options={{ title: "Room Chat" }}
      />
       <Stack.Screen
        name="TambahAdmin"
        component={TambahAdmin}
        options={{ title: "Tambah Admin" }}
      />
      <Stack.Screen
        name="WebPPDB"
        component={WebPPDB}
        options={{ title: "Web PPDB" }}
      />
       <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ title: "Room Chat" }}
      />
       <Stack.Screen
        name="Room"
        component={Room}
        options={{ title: "Enter Room" }}
      />
    </Stack.Navigator>
  );
};

export default Router;
