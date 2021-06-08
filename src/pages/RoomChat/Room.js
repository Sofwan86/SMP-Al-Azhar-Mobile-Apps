import React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

class Main extends React.Component {
  
  state = {
    name: '',
  };

  onPress = () =>
    {
      Alert.alert("Perhatian", "Siap menjaga sopan/santun ?", [
        {
          text: "Tidak",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Siap",
          onPress: () => {
            this.props.navigation.navigate('Chat', { name: this.state.name });            
            Alert.alert("Sukses", "Berhasil Masuk");
          },
        },
      ]);
    }
 
  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Nama Kamu :</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeText}
          value={this.state.name}
          placeholder="Anonim"
        />
        <TouchableOpacity  onPress={this.onPress}>
          <Text style={styles.buttonText}>Masuk Room</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    fontSize:20,

  },
});

export default Main;