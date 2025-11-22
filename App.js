// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/HomeScreen';
// import ChatbotScreen from './src/screens/ChatbotScreen';
// import BiasDetectorScreen from './src/screens/BiasDetectorScreen';
// import SOSScreen from './src/screens/SOSScreen';
// import ResourcesScreen from './src/screens/ResourcesScreen';
// import InspiringStoriesScreen from './src/screens/InspiringStoriesScreen';
// import AuthScreen from "./src/screens/AuthScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Auth">
//         <Stack.Screen name="Auth" component={AuthScreen} />
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{ title: 'SheRise' }}
//         />
//         <Stack.Screen name="Chatbot" component={ChatbotScreen} />
//         <Stack.Screen name="Bias Detector" component={BiasDetectorScreen} />
//         <Stack.Screen name="SOS" component={SOSScreen} />
//         <Stack.Screen name="Resources" component={ResourcesScreen} />
//         <Stack.Screen name="InspiringStories" component={InspiringStoriesScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// App.js
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase/firebaseConfig";

import HomeScreen from "./src/screens/HomeScreen";
import ChatbotScreen from "./src/screens/ChatbotScreen";
import BiasDetectorScreen from "./src/screens/BiasDetectorScreen";
import SOSScreen from "./src/screens/SOSScreen";
import ResourcesScreen from "./src/screens/ResourcesScreen";
import InspiringStoriesScreen from "./src/screens/InspiringStoriesScreen";

import AuthScreen from "./src/screens/AuthScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const [authChecked, setAuthChecked] = React.useState(false);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
     setAuthChecked(true);
    });
    return unsub;
  }, []);

  if (!authChecked) {
  return null; // or a loading spinner screen
} 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chatbot" component={ChatbotScreen} />
            <Stack.Screen name="Bias Detector" component={BiasDetectorScreen} />
            <Stack.Screen name="SOS" component={SOSScreen} />
            <Stack.Screen name="Resources" component={ResourcesScreen} />
            <Stack.Screen name="InspiringStories" component={InspiringStoriesScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
