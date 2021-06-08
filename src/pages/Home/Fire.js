import "firebase/firestore";
import FIREBASE from "../../config/Firebase";

class Fire {
  uploadPhotoAsync = async (uri) => {
    const path = `photos/${Date.now()}.jpg`;
    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();
      let upload = FIREBASE.storage().ref(path).put(file);
      upload.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          rej(err);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          res(url);
        }
      );
    });
  };
  addPhoto = async (localUri) => {
    const remoteUri = await this.uploadPhotoAsync(localUri);
    return new Promise((res, rej) => {
      FIREBASE.database().ref("/photos").push({
        timestamp: this.timestamp,
        image: remoteUri,
      });
      this.firestore
        .collection("photos")
        .add({
          timestamp: this.timestamp,
          image: remoteUri,
        })
        .then((ref) => {
          res(ref);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };

  get firestore() {
    return FIREBASE.firestore();
  }

  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();
export default Fire;
