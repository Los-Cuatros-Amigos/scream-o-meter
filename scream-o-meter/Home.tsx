import React from "react"; // "react-native-permissions", "react-native-audio-recorder-player"
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
// import { check, PERMISSIONS, request } from "react-native-permissions";
// import AudioRecorderPlayer from "react-native-audio-recorder-player";

interface homeProps {
  screamValue: number;
}

const Home = (props: homeProps) => {
  let screamValue = props.screamValue;
  return (
    <View style={styles.container}>
      <CircularProgress
        value={screamValue}
        radius={120}
        inActiveStrokeOpacity={0.5}
        activeStrokeWidth={15}
        inActiveStrokeWidth={20}
        progressValueStyle={{ fontWeight: "100", color: "white" }}
        activeStrokeSecondaryColor="yellow"
        inActiveStrokeColor="black"
        dashedStrokeConfig={{
          count: 50,
          width: 4,
        }}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.startButton}>
          <Text style={styles.startButtonText}>Measure Scream</Text>
        </Pressable>
      </View>
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
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttonContainer: {
    // marginTop: "60%",
  },
});

export default Home;
