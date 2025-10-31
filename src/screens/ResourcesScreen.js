// src/screens/ResourcesScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function ResourcesScreen() {
  const resources = [
    {
      title: 'UN Women',
      description: 'Global organization advocating gender equality and women’s empowerment.',
      link: 'https://www.unwomen.org/',
    },
    {
      title: 'HeForShe',
      description: 'UN initiative inviting men and boys to stand in solidarity for gender equality.',
      link: 'https://www.heforshe.org/',
    },
    {
      title: 'Plan International',
      description: 'Working to advance children’s rights and equality for girls worldwide.',
      link: 'https://plan-international.org/',
    },
    {
      title: 'Girls Who Code',
      description: 'Empowering young women with coding and tech skills.',
      link: 'https://girlswhocode.com/',
    },
    {
      title: 'National Domestic Violence Hotline (US)',
      description: 'Confidential support for victims of abuse: 1-800-799-7233',
      link: 'https://www.thehotline.org/',
    },
    {
      title: 'UNICEF Gender Equality Programs',
      description: 'Promoting education, equality, and rights for girls globally.',
      link: 'https://www.unicef.org/gender-equality',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Empowerment & Support Resources</Text>
      <ScrollView style={styles.scroll}>
        {resources.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>Visit Website →</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#6200EE',
    marginBottom: 10,
    textAlign: 'center',
  },
  scroll: { marginTop: 10 },
  card: {
    backgroundColor: '#F5F3FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: '700', color: '#3E2C8D', marginBottom: 4 },
  description: { fontSize: 14, color: '#555', marginBottom: 8 },
  link: { color: '#6200EE', fontWeight: '600', fontSize: 14 },
});
