import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {WebView} from 'react-native-webview'
export class WebPPDB extends Component {
    render() {
        return (
            <WebView source={{uri:"https://ppdb.yayasanalazharlpg.com"}}/>

        )
  }
}

export default WebPPDB