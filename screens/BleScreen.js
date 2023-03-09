import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  FlatList,
  TouchableOpacity,
  NativeModules,
  Button,
} from "react-native";
import { BleManager } from "react-native-ble-plx";
import { check, PERMISSIONS, RESULTS } from "react-native-permissions";

export default function BleScreen() {
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const manager = null;

  useEffect(() => {
    async function requestPermissions() {
      if (Platform.OS === "android" && Platform.Version >= 23) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Bluetooth Permission",
            message: "This app requires Bluetooth permissions.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the Bluetooth");
          setPermissionsGranted(true);
          manager = new BleManager();
        }
      } else if (Platform.OS === "ios") {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === "granted") {
          setPermissionsGranted(true);
          manager = new BleManager();
        }
      }
    }

    if (!permissionsGranted) {
      requestPermissions();
    }

    // return () => {
    //   if (manager) {
    //     manager.destroy();
    //   }
    // };
  }, []);

  const handleScan = () => {
    // if (manager) {
    //   manager.startDeviceScan(null, null, (error, device) => {
    //     if (error) {
    //       console.log(error);
    //       return;
    //     }
    //     console.log(device);
    //   });
    // }
    const bleAdapter = new BleManager();
    console.log(bleAdapter);
    // manager.startDeviceScan(null, null, (error, device) => {
    //   if (error) {
    //     console.log(error);
    //     return;
    //   }
    //   console.log(device);
    // });
  };

  return (
    <View style={styles.container}>
      <Text>BLE screen</Text>
      {permissionsGranted ? (
        <Button
          title="Scan"
          style={styles.button}
          onPress={() => handleScan()}
        />
      ) : (
        <Text>Bluetooth permissions not granted</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252524",
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#999999",
    marginTop: 4,
  },
});
