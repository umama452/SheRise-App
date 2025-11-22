import axios from "axios";

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY ||
  import.meta.env.VITE_GEMINI_API_KEY;

export async function getAIResponse(prompt) {
  try {
    console.log("🔑 GEMINI API Key Loaded:", GEMINI_API_KEY ? "Yes" : "No");

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Gemini raw response:", response.data);

    const text =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated.";
    return text;
  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    return "⚠️ I'm having trouble responding right now. Please try again later.";
  }
}
