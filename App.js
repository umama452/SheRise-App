import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import BiasDetectorScreen from './src/screens/BiasDetectorScreen';
import SOSScreen from './src/screens/SOSScreen';
import ResourcesScreen from './src/screens/ResourcesScreen';
import InspiringStoriesScreen from './src/screens/InspiringStoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'SheRise' }}
        />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} />
        <Stack.Screen name="Bias Detector" component={BiasDetectorScreen} />
        <Stack.Screen name="SOS" component={SOSScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="InspiringStories" component={InspiringStoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
