import { Blur, Canvas, RadialGradient, Rect } from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, View } from "react-native";

const { width: WindowWidth, height: WindowHeight } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={0}
          width={WindowWidth}
          height={WindowHeight}
          color="blue"
        >
          <RadialGradient
            c={{ x: WindowWidth / 2, y: WindowHeight / 2 }}
            r={WindowWidth / 2}
            colors={["violet", "black"]}
          />
          <Blur blur={100} />
        </Rect>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
