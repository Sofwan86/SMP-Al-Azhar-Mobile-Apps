import FIREBASE from '../../config/Firebase'

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  // connection to the firebase database, unique credentials from Project Settings>Your apps
  init = () => {
    FIREBASE
  };

  observeAuth = () =>
    FIREBASE.auth().onAuthStateChanged(this.onAuthStateChanged);

  // authenticating user and allowing anonymous users
  onAuthStateChanged = user => {
    if (!user) {
      try {
        FIREBASE.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  // getting unique credentials
  get uid() {
    return (FIREBASE.auth().currentUser || {}).uid;
  }

  // referencing the 'messages' table in the firebase database
  get ref() {
    return FIREBASE.database().ref('messages');
  }

  // formating the message in order to be displayed nicely
  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  // getting messages to be displayed from the database
  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  // timestamp for the message
  get timestamp() {
    return FIREBASE.database.ServerValue.TIMESTAMP;
  }

  // sending message to be stored in the database
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  // appening the message in the chat
  append = message => this.ref.push(message);

  // closing connection
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;