import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from './Fire'

export default class Chat extends Component {

  state = {
    messages: [
      //example message with multiple properties
      {
        _id: 1, // message id
        text: 'Selamat datang di Room chat SMP Al-Azhar 3 Bandar Lampung !',
        createdAt: new Date(), // date sent
        // sender info
        user: {
          _id: 2, // user id
          name: 'React Native', // username
          avatar: 'https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2Fsplashscreen.png?alt=media&token=2b33fb63-382f-4221-8141-4e6e47d2ad11', // profile picture
        },
      }
    ,],
  };

  get user() {
    return {
      name: this.props.route.params.name,
      _id: Fire.shared.uid,
    };
  }

  componentDidMount() {
    // loading messages from the backend
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }
}