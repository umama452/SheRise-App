import axios from "axios";
import { Platform } from "react-native";

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.5-flash";

// 🧠 Local "training" memory — your app can persist this with AsyncStorage if needed
let conversationMemory = [
  {
    role: "system",
    content:
      "You are SheRise AI — a supportive, empowering mentor designed to help women gain confidence, emotional strength, and career guidance. Use warm, friendly, and encouraging language. Avoid religious or cultural greetings like 'Assalamualaikum'; instead, greet users in a natural, neutral way such as 'Hi there!' or 'Hello! How can I support you today?'.",
  },
];

// 🧩 Keep memory short to save tokens
function trimMemory(maxMessages = 6) {
  if (conversationMemory.length > maxMessages) {
    conversationMemory = [
      conversationMemory[0], // keep system message
      ...conversationMemory.slice(-maxMessages + 1),
    ];
  }
}

export async function getAIResponse(prompt) {
  if (!GEMINI_API_KEY) {
    console.warn("⚠️ Missing GEMINI API key.");
    return "⚠️ AI is not configured yet. Please check your Gemini API key.";
  }

  // 🧩 Web-safe fallback
  // if (Platform.OS === "web") {
  //   console.log("⚠️ Running in Expo web preview mode.");
  //   return "💬 AI chat works best in the mobile app (Expo Go). Please open it there for full experience.";
  // }

  try {
    // add user message to memory
    conversationMemory.push({ role: "user", content: prompt });
    trimMemory();

    // format for Gemini API
    const contents = conversationMemory.map((msg) => ({
      parts: [{ text: msg.content }],
    }));

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
      { contents },
      { headers: { "Content-Type": "application/json" } }
    );

    const aiText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ I'm having trouble generating a response.";

    // add AI reply to memory
    conversationMemory.push({ role: "assistant", content: aiText });
    trimMemory();

    return aiText;
  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    return "⚠️ I'm having trouble responding right now. Please try again later.";
  }
}
