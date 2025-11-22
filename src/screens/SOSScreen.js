// src/screens/SOSScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from "react-native";
import BackButton from "../components/BackButton";
export default function SOSScreen() {
  const [sending, setSending] = useState(false);

  const handleSOS = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      Alert.alert(
        "🚨 SOS Alert Sent",
        "Your emergency message has been sent to nearby helplines and trusted contacts."
      );
    }, 1200);
  };

  const openHelpline = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
       <BackButton navigation={navigation} />
      <Text style={styles.title}>🚨 Emergency SOS</Text>
      <Text style={styles.subtitle}>
        If you ever feel unsafe or discriminated against, use the SOS button
        below or contact trusted hotlines.
      </Text>

      <TouchableOpacity
        style={[styles.sosButton, sending && { backgroundColor: "#ccc" }]}
        onPress={handleSOS}
        disabled={sending}
      >
        <Text style={styles.sosText}>
          {sending ? "Sending Alert..." : "SEND SOS"}
        </Text>
      </TouchableOpacity>

      <View style={styles.helplineBox}>
        <Text style={styles.helpTitle}>📞 Support Hotlines</Text>

        <TouchableOpacity
          onPress={() => openHelpline("tel:+9221111222333")}
          style={styles.helplineBtn}
        >
          <Text style={styles.helplineText}>Pakistan Women Helpline: 111-222-333</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openHelpline("tel:+18006624357")}
          style={styles.helplineBtn}
        >
          <Text style={styles.helplineText}>UN Women Support Line: +1 800 662 4357</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openHelpline("https://www.unwomen.org/")}
          style={styles.helplineBtn}
        >
          <Text style={styles.helplineText}>🌐 Visit UN Women Website</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#D32F2F",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  sosButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginVertical: 20,
    elevation: 3,
  },
  sosText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  helplineBox: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6200EE",
    marginBottom: 10,
    textAlign: "center",
  },
  helplineBtn: {
    backgroundColor: "#EEE",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  helplineText: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
  },
});
