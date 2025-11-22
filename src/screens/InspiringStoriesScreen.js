
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import BackButton from "../components/BackButton";

// ✅ Enable smooth animation for Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function InspiringStoriesScreen() {
  const [expandedStory, setExpandedStory] = useState(null);

  const stories = [
    {
      id: "1",
      title: "🌟 Malala Yousafzai — The Voice for Education",
      story:
        "Malala fought for girls’ right to education in Pakistan. Despite facing violence, she continued her mission and became the youngest Nobel Prize laureate. Her courage reminds us that one voice can change the world.",
    },
    {
      id: "2",
      title: "💪 Kalpana Chawla — From Karnal to the Stars",
      story:
        "Kalpana Chawla, an Indian-American astronaut, showed that no dream is too big. Her journey from a small town to NASA is a symbol of perseverance and limitless aspiration. She taught us to reach for the stars — literally and metaphorically.",
    },
    {
      id: "3",
      title: "❤️ Oprah Winfrey — Rising from Adversity",
      story:
        "From poverty to becoming one of the most influential women in media, Oprah turned her struggles into strength and inspired millions through authenticity and kindness. Her story shows that healing and success can come from embracing your truth.",
    },
    {
      id: "4",
      title: "🔥 Arunima Sinha — The Climb of Resilience",
      story:
        "After losing a leg in a tragic accident, Arunima Sinha became the first female amputee to climb Mount Everest. Her story is proof that determination can overcome any obstacle. Her courage inspires countless people facing challenges.",
    },
  ];

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedStory(expandedStory === id ? null : id);
  };

  const renderStory = ({ item }) => {
    const isExpanded = expandedStory === item.id;
    return (
     

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => toggleExpand(item.id)}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text
          style={styles.story}
          numberOfLines={isExpanded ? undefined : 3}
        >
          {item.story}
        </Text>
        <Text style={styles.readMore}>
          {isExpanded ? "Read less ▲" : "Read more ▼"}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    
    <View style={styles.container}>
      <BackButton navigation={navigation} />

      <Text style={styles.header}>✨ Inspiring Stories</Text>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={renderStory}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#6200EE",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  story: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  readMore: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#6200EE",
    textAlign: "right",
  },
});




