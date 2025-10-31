import axios from "axios";

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

export async function listGeminiModels() {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`;
    const response = await axios.get(url);

    console.log("✅ Full response:", response.data);

    if (response.data && Array.isArray(response.data.models)) {
      console.log("✅ Available Gemini models:");
      console.log(response.data.models.map((m) => m.name).slice(0, 10));
    } else {
      console.warn("⚠️ Unexpected response format:", response.data);
    }
  } catch (error) {
    console.error("❌ Error listing models:", error);
  }
}

