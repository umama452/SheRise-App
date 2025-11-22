// src/screens/BiasDetectorScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import BackButton from "../components/BackButton";
export default function BiasDetectorScreen() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  // Simple simulated bias detection logic
  const analyzeBias = () => {
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const lower = input.toLowerCase();

      if (!input.trim()) {
        setResult("⚠️ Please enter some text to analyze.");
      } else if (
        lower.includes("strong men") ||
        lower.includes("female only") ||
        lower.includes("maternity") ||
        lower.includes("male candidates") ||
        lower.includes("bossy") ||
        lower.includes("soft skills")
      ) {
        setResult("🚫 This text might contain gender bias. Consider using more neutral phrasing.");
      } else if (
        lower.includes("inclusive") ||
        lower.includes("equal opportunity") ||
        lower.includes("diversity")
      ) {
        setResult("✅ This text promotes gender inclusion and equality!");
      } else {
        setResult("⚖️ Seems neutral, but context matters. Keep promoting fairness!");
      }

      setAnalyzing(false);
    }, 1200);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <BackButton navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🧠 Gender Bias Detector</Text>
        <Text style={styles.subtitle}>
          Paste or type any sentence, ad, or comment below to check for gender bias.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Example: We are looking for strong men to lift boxes..."
          multiline
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          style={[styles.button, analyzing && { backgroundColor: "#ccc" }]}
          onPress={analyzeBias}
          disabled={analyzing}
        >
          <Text style={styles.buttonText}>
            {analyzing ? "Analyzing..." : "Check for Bias"}
          </Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#6200EE",
    marginVertical: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    textAlignVertical: "top",
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  resultBox: {
    marginTop: 25,
    backgroundColor: "#F1F0F0",
    borderRadius: 10,
    padding: 15,
    width: "100%",
  },
  resultText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
