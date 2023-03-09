import {
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SizedBox from "../components/SizedBox";
import React, { useState, useContext } from "react";
import styles from "../style/style";
//   import { Context } from '../provider/AppProvider';
import axios from "axios";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("https://statotestapi.azurewebsites.net/Accounts/authenticate", {
        email: email,
        password: password,
      })
      .then((response) => {
        alert(response.data.jwtToken);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.content}
    >
      <View style={styles.logoView}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <SizedBox height={100} />
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeView}>
          <Text style={styles.title}>Welcome back!</Text>
          <SizedBox height={8} />
          <Text style={styles.subtitle}>Log in to your account</Text>
          <SizedBox height={25} />
        </View>

        <Pressable>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCompleteType="email"
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor={"rgba(235, 235, 245, 0.6)"}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.textInput}
              textContentType="username"
            />
          </View>
        </Pressable>

        <SizedBox height={16} />

        <Pressable>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCompleteType="password"
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              placeholderTextColor={"rgba(235, 235, 245, 0.6)"}
              autoCorrect={false}
              returnKeyType="done"
              secureTextEntry
              style={styles.textInput}
              textContentType="password"
            />
          </View>
        </Pressable>

        <SizedBox height={30} />

        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Login</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
