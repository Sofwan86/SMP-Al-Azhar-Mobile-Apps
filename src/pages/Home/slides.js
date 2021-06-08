import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
} from "react-native";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2FScreenshot%20from%202021-05-03%2022-11-20.png?alt=media&token=a466bc96-423f-47a5-ba6f-f982dd3e1385",
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2FScreenshot%20from%202021-05-03%2022-39-46.png?alt=media&token=67a49ef3-cc4f-4463-818c-aa3068700691",
  "https://firebasestorage.googleapis.com/v0/b/al-azhar-mob.appspot.com/o/photos%2FScreenshot%20from%202021-05-03%2022-45-49.png?alt=media&token=ac53cf45-de67-4bd1-a785-ee77209dd6d6",
  "https://ppdb.yayasanalazharlpg.com/landing/img/slider/6.jpeg"
];

class slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== this.state.active) {
        this.setState({
          active: slide,
        });
      }
    }
  }

  render() {
    const { active } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={{ padding: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>HomeScreen</Text>
        </View> */}
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{ uri: e }}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={active === index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.25, // 25% window
    borderRadius: 30,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
});

export default slides;
