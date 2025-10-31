import axios from "axios";

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

// ✅ No "models/" prefix here
const MODEL_NAME = "gemini-2.5-flash";

export async function getAIResponse(prompt) {
  try {
    console.log("🔑 Using model:", MODEL_NAME);

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
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

    console.log("✅ Gemini API Response:", response.data);

    const aiText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ I'm having trouble generating a response.";

    return aiText;
  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    return "⚠️ I'm having trouble responding right now. Please try again later.";
  }
}
