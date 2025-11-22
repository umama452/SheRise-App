// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { signOut } from "../firebase/authService";
// export default function HomeScreen({ navigation }) {
//   async function handleLogout() {
//   try {
//     await signOut();
//     // onAuthStateChanged will update the UI back to Auth
//   } catch (err) {
//     console.log("Logout error", err);
//   }
// }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🌸 Welcome to SheRise</Text>
//       <Text style={styles.subtitle}>Choose an option to get started</Text>


// <TouchableOpacity
//   style={[styles.button, { backgroundColor: "#6200EE" } ]}
//   onPress={handleLogout}
// >
//   <Text style={styles.buttonText}>Logout</Text>
// </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Chatbot')}
//       >
//         <Text style={styles.buttonText}>💬 Chat with SheRise</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Bias Detector')}
//       >
//         <Text style={styles.buttonText}>⚖️ Bias Detector</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('SOS')}
//       >
//         <Text style={styles.buttonText}>🚨 SOS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Resources')}
//       >
//         <Text style={styles.buttonText}>📚 Resources</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('InspiringStories')}
//       >
//         <Text style={styles.buttonText}>📚 Inspiring Stories</Text>
//       </TouchableOpacity>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#6200EE',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 30,
//   },
//   button: {
//     backgroundColor: '#6200EE',
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     borderRadius: 10,
//     marginVertical: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
// import { signOut } from "../firebase/authService";

// export default function HomeScreen({ navigation }) {
//   async function handleLogout() {
//     try {
//       await signOut();
//     } catch (err) {
//       console.log("Logout error", err);
//     }
//   }

//   return (
//     <View style={styles.container}>

//       {/* Top Bar with Logout */}
//       <View style={styles.topBar}>
//         <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
//           <Text style={styles.logoutText}>Logout</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView contentContainerStyle={{ alignItems: 'center' }}>

//         {/* Logo */}
//         <Image 
//           source={require("../../assets/logo.png")} 
//           style={styles.logo} 
//         />

//         <Text style={styles.title}>Welcome to SheRise</Text>
//         <Text style={styles.subtitle}>Empowering Women, One Step at a Time</Text>

//         {/* Menu Buttons */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Chatbot')}
//         >
//           <Text style={styles.buttonText}>💬 Chat with SheRise</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Bias Detector')}
//         >
//           <Text style={styles.buttonText}>⚖️ Bias Detector</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('SOS')}
//         >
//           <Text style={styles.buttonText}>🚨 SOS</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Resources')}
//         >
//           <Text style={styles.buttonText}>📚 Resources</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('InspiringStories')}
//         >
//           <Text style={styles.buttonText}>🌟 Inspiring Stories</Text>
//         </TouchableOpacity>

//       </ScrollView>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//   },

//   // Top bar logout
//   topBar: {
//     width: "100%",
//     paddingHorizontal: 20,
//     alignItems: "flex-end",
//   },
//   logoutBtn: {
//     backgroundColor: "#F02FC2",
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     borderRadius: 20,
//   },
//   logoutText: {
//     color: "#fff",
//     fontWeight: "600",
//   },

//   logo: {
//     width: 180,
//     height: 180,
//     resizeMode: 'contain',
//     marginTop: 20,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "800",
//     color: "#7B2FF7",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 20,
//     textAlign: "center",
//   },

//   button: {
//     width: "85%",
//     paddingVertical: 15,
//     borderRadius: 14,
//     marginVertical: 10,
//     backgroundColor: "#7B2FF7",
//     shadowColor: "#7B2FF7",
//     shadowOpacity: 0.3,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });


import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import { signOut } from "../firebase/authService";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }, []);

  async function handleLogout() {
    try {
      await signOut();
    } catch (err) {
      console.log("Logout error", err);
    }
  }

  return (
    <View style={styles.container}>
      {/* Curved Gradient Header */}
      <LinearGradient
        colors={["#7B2FF7", "#F02FC2"]}
        style={styles.header}
      >
        <TouchableOpacity style={styles.logoutIcon} onPress={handleLogout}>
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "700" }}>Logout</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />

        {/* <Text style={styles.headerTitle}>SheRise</Text> */}
        <Text style={styles.headerSubtitle}>
          Empower • Rise • Inspire
        </Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={{ paddingTop: 40, paddingBottom: 40 }}>
        {/* Quote Box */}
        <Animated.View style={[styles.quoteCard, { opacity: fadeAnim }]}>
          <Text style={styles.quoteText}>
            “Empowered women empower the world.”
          </Text>
        </Animated.View>

        {/* MENU OPTIONS */}
        <View style={styles.menuContainer}>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Chatbot")}
          >
            <Text style={styles.cardIcon}>💬</Text>
            <Text style={styles.cardTitle}>Chat with SheRise</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Bias Detector")}
          >
            <Text style={styles.cardIcon}>⚖️</Text>
            <Text style={styles.cardTitle}>Bias Detector</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("SOS")}
          >
            <Text style={styles.cardIcon}>🚨</Text>
            <Text style={styles.cardTitle}>SOS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Resources")}
          >
            <Text style={styles.cardIcon}>📚</Text>
            <Text style={styles.cardTitle}>Resources</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("InspiringStories")}
          >
            <Text style={styles.cardIcon}>🌟</Text>
            <Text style={styles.cardTitle}>Inspiring Stories</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5ECFF",
  },

  header: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    paddingTop: 60,
  },

  logoutIcon: {
    position: "absolute",
    top: 50,
    right: 25,
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
  },

  headerSubtitle: {
    color: "#f9d9ff",
    fontSize: 14,
    marginTop: 4,
  },

  quoteCard: {
    backgroundColor: "#fff",
    marginHorizontal: 25,
    padding: 18,
    borderRadius: 14,
    elevation: 3,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  quoteText: {
    fontSize: 16,
    textAlign: "center",
    color: "#7B2FF7",
    fontStyle: "italic",
    fontWeight: "600",
  },

  menuContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47%",
    backgroundColor: "rgba(255,255,255,0.6)",
    paddingVertical: 24,
    borderRadius: 18,
    marginBottom: 18,
    backdropFilter: "blur(10px)",
    alignItems: "center",
    shadowColor: "#7B2FF7",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },

  cardIcon: {
    fontSize: 38,
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#7B2FF7",
    textAlign: "center",
  },
});
