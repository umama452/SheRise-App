// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { getAIResponse } from "../logic/aiChat";
// import BackButton from "../components/BackButton";
// export default function ChatbotScreen() {
//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "👋 Hi! I’m SheRise AI — your empowerment assistant. How can I help you today?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const scrollRef = useRef(null);


//   const handleSend = async () => {
//   if (!input.trim()) return;
//   const userMsg = { from: "user", text: input.trim() };
//   setMessages((prev) => [...prev, userMsg]);
//   setInput("");
//   setLoading(true);
//   try {
//     const aiReply = await getAIResponse(input.trim(), messages);
//     setMessages((prev) => [...prev, { from: "bot", text: aiReply }]);
//   } catch {
//     setMessages((prev) => [
//       ...prev,
//       {
//         from: "bot",
//         text: "⚠️ I’m having trouble responding right now. Please try again later.",
//       },
//     ]);
//   } finally {
//     setLoading(false);
//   }
// };
// // }

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollToEnd({ animated: true });
//     }
//   }, [messages]);

//   // ✅ The return must be INSIDE the function
//   return (
//     <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
//       <BackButton navigation={navigation} />
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         keyboardVerticalOffset={90} // adjust if needed
//       >
//         <ScrollView
//           style={{ flex: 1, paddingHorizontal: 10 }}
//           ref={scrollRef}
//           contentContainerStyle={{ paddingBottom: 100 }}
//           onContentSizeChange={() =>
//             scrollRef.current?.scrollToEnd({ animated: true })
//           }
//         >
//           {messages.map((msg, i) => (
//             <View
//               key={i}
//               style={[
//                 styles.bubble,
//                 msg.from === "user" ? styles.userBubble : styles.botBubble,
//               ]}
//             >
//               <Text
//                 style={msg.from === "user" ? styles.userText : styles.botText}
//               >
//                 {msg.text}
//               </Text>
//             </View>
//           ))}

//           {loading && (
//             <View style={styles.botBubble}>
//               <ActivityIndicator size="small" color="#fff" />
//               <Text style={styles.botText}> SheRise AI is typing...</Text>
//             </View>
//           )}
//         </ScrollView>

//         <View style={styles.inputBar}>
//           <TextInput
//             style={styles.input}
//             placeholder="Type your message..."
//             placeholderTextColor="#aaa"
//             value={input}
//             onChangeText={setInput}
//             multiline
//           />
//           <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
//             <Text style={styles.sendText}>Send</Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   bubble: {
//     marginVertical: 6,
//     maxWidth: "80%",
//     borderRadius: 12,
//     padding: 10,
//     // backgroundColor: "#574374ff",
//   },
//   userBubble: {
//     backgroundColor: "#6200EE",
//     alignSelf: "flex-end",
//     borderBottomRightRadius: 2,
//   },
//   botBubble: {
//     backgroundColor: "#333",
//     alignSelf: "flex-start",
//     borderBottomLeftRadius: 2,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   userText: {
//     color: "#fff",
//     fontSize: 15,
//   },
//   botText: {
//     color: "#fff",
//     fontSize: 15,
//   },
//   inputBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 8,
//     borderTopWidth: 1,
//     borderColor: "#ddd",
//   },
//   input: {
//     flex: 1,
//     minHeight: 40,
//     maxHeight: 100,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     fontSize: 15,
//     backgroundColor: "#f2f2f2",
//     textAlignVertical: "top", // ✅ ensures multiline text stays visible
//   },
//   sendBtn: {
//     backgroundColor: "#6200EE",
//     marginLeft: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   sendText: {
//     color: "#fff",
//     fontWeight: "600",
//   },
// });


import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { getAIResponse } from "../logic/aiChat";
import BackButton from "../components/BackButton";

export default function ChatbotScreen({ navigation }) {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi! I’m SheRise AI — your empowerment assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const aiReply = await getAIResponse(input.trim(), messages);
      setMessages((prev) => [...prev, { from: "bot", text: aiReply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ I’m having trouble responding right now. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <BackButton navigation={navigation} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 10 }}
          ref={scrollRef}
          contentContainerStyle={{ paddingBottom: 100 }}
          onContentSizeChange={() =>
            scrollRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map((msg, i) => (
            <View
              key={i}
              style={[
                styles.bubble,
                msg.from === "user" ? styles.userBubble : styles.botBubble,
              ]}
            >
              <Text
                style={msg.from === "user" ? styles.userText : styles.botText}
              >
                {msg.text}
              </Text>
            </View>
          ))}

          {loading && (
            <View style={styles.botBubble}>
              <ActivityIndicator size="small" color="#fff" />
              <Text style={styles.botText}> SheRise AI is typing...</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor="#aaa"
            value={input}
            onChangeText={setInput}
            multiline
          />

          <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    marginVertical: 6,
    maxWidth: "80%",
    borderRadius: 12,
    padding: 10,
  },
  userBubble: {
    backgroundColor: "#6200EE",
    alignSelf: "flex-end",
    borderBottomRightRadius: 2,
  },
  botBubble: {
    backgroundColor: "#333",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  userText: { color: "#fff", fontSize: 15 },
  botText: { color: "#fff", fontSize: 15 },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 15,
    backgroundColor: "#f2f2f2",
    textAlignVertical: "top",
  },
  sendBtn: {
    backgroundColor: "#6200EE",
    marginLeft: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  sendText: { color: "#fff", fontWeight: "600" },
});
