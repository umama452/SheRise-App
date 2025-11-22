// src/screens/AuthScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { loginEmail } from "../firebase/authService";

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      await loginEmail(email.trim(), password);
      // onAuthStateChanged in App.js will handle navigation to Home
    } catch (err) {
      console.log("Login error:", err);
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inner}>
        {/* -- logo: using your uploaded file path as a URI; see note below -- */}
        <Image
          source={{ uri: "logo.png" }}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome to SheRise</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Login</Text>}
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Create account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
            <Text style={styles.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", justifyContent: "center" },
  inner: { padding: 20, alignItems: "center" },
  logo: { width: 140, height: 140, marginBottom: 20, borderRadius: 12 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10, color: "#6200EE" },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#fafafa",
  },
  button: {
    width: "100%",
    padding: 14,
    backgroundColor: "#6200EE",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: { color: "#fff", fontWeight: "600" },
  link: { color: "#6200EE", marginHorizontal: 10 },
  row: { flexDirection: "row", marginTop: 12 },
  error: { color: "red", marginTop: 8 },
});
