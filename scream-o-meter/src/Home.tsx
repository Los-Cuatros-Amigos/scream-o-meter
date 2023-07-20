import React from "react"; // "react-native-permissions", "react-native-audio-recorder-player"
import { Pressable, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
// import { check, PERMISSIONS, request } from "react-native-permissions";
// import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { useState } from "react";

const Home = () => {
  // let screamValue = props.screamValue;
  const [screamValue, setScreamValue] = useState(10);

  const measureScream1 = () => {
    setScreamValue(100);
    // TODO: Implement the logic to measure the decibel level
    // and update the 'screamValue' state with the measured value.
    // const measuredDecibels = measuringFunction();
    // measuringFunction will probably have to vary between platforms
    // setScreamValue(measuredDecibels);
  };
  function measureScream() {
    setScreamValue(100);
  }

  return (
    <View style={styles.container}>
      <CircularProgress
        value={screamValue}
        radius={120}
        inActiveStrokeOpacity={0.5}
        activeStrokeWidth={15}
        inActiveStrokeWidth={20}
        progressValueStyle={{ fontWeight: "100", color: "white" }}
        activeStrokeSecondaryColor="red"
        activeStrokeColor="#2465FD"
        inActiveStrokeColor="white"
        dashedStrokeConfig={{
          count: 50,
          width: 4,
        }}
        title={"dB"}
        titleColor={"white"}
        titleStyle={{ fontWeight: "bold" }}
      />

      <Pressable
        onPress={() => {
          setScreamValue(100);
        }}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>Measure</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124",
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },

  startButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

export default Home;
