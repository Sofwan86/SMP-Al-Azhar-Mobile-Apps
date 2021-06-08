import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UserPermissions from "./UserPermission";
import Fire from "./Fire";

export default function App() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    UserPermissions.getPermissionAsync();
  }, []);
  const upload = () => {
    Fire.shared
      .addPhoto(image)
      .then(() => {
        setImage(null);
      })
      .catch((err) => {
        alert(err.message);
      });
      
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Choose Pictures" onPress={pickImage} />
      <Text>*Dalam pengembangan*</Text>
      <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
        {image === null ? (
          <Text>No image is selected</Text>
        ) : (
          <View>
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            ></Image>
            <Button title="Upload" onPress={upload} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker'
// import FIREBASE from '../../config/Firebase'
// export default function EditSlides() {
//   const [selectImg, setSelectedImg] = React.useState(null)
//   let openImage = async () =>{
//     let permission = await ImagePicker.requestCameraRollPermissionsAsync();

//     if(permission.granted === false){
//       return;
//     }

//     let picker = await ImagePicker.launchImageLibraryAsync()

//     if(picker.cancelled ===true){
//       return;
//     }
//     setSelectedImg({localUri:picker.uri})
//     console.log(picker)
//   }

// handleSave =()=>{
//     let bucketName = 'images'
//     let file = selectImg.localUri
//     let storageRef= FIREBASE.storage().ref(`${bucketName}/${file.name}`)
//     uploadTask.on(FIREBASE.storage.TaskEvent.STATE_CHANGED,
//         ()=>{
//             let downloadURL = uploadTask.snapshot.downloadURL
//         })
// }
// showImage=()=>{
//     let storageRef = FIREBASE.storage().ref()
//     let spaceRef = storageRef.child('images/'+this.state.files[0].name)
//     storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then((url)=>{
//         console.log(url)
//         document.getElementById('new-img').src= url
//     })
// }

//   return (
//     <View style={styles.container}>
//         {
//           selectImg !== null ?  (
//             <Image
//               style={styles.image}
//               source={{uri:(selectImg.localUri !== null) ? selectImg.localUri : 'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'}} />
//           ) : <Text>Kosong</Text>
//         }
//       <TouchableOpacity
//         onPress={openImage}
//         style={styles.button}>
//         <Text>Click</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={handleSave}
//         style={styles.button}>
//         <Text>Click</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button:{
//     borderRadius:10,
//     backgroundColor:'green',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:10
//   },
//   image:{
//     width:300,
//     height:300,
//     resizeMode:'contain'
//   }
// });

// import React, { Component } from 'react'
// import FIREBASE from '../../config/Firebase'
// export class EditSlides extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             files: null
//         }
//     }

//     handleChange =(files)=>{
//         this.setState({
//             files:files
//         })

//     }

//     handleSave =()=>{
//         let bucketName = 'images'
//         let file = this.state.files[0]
//         let storageRef= FIREBASE.storage().ref(`${bucketName}/${file.name}`)
//         uploadTask.on(FIREBASE.storage.TaskEvent.STATE_CHANGED,
//             ()=>{
//                 let downloadURL = uploadTask.snapshot.downloadURL
//             })
//     }
//     showImage=()=>{
//         let storageRef = FIREBASE.storage().ref()
//         let spaceRef = storageRef.child('images/'+this.state.files[0].name)
//         storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then((url)=>{
//             console.log(url)
//             document.getElementById('new-img').src= url
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <input type="file" onChange={(e) => {this.handleChange(e.target.files)}} />
//                 <button onClick={this.handleSave}>Save</button>
//                 <button onClick={this.showImage} >show image</button>
//                 <img id="new-img"/>
//             </div>
//         )
//     }
// }

// export default EditSlides
