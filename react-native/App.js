import { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './src/app/store';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from './src/features/SettingsScreen';
import HomeScreen from './src/features/HomeScreen';
import AddScreen from './src/features/AddScreen';
import LoginScreen from './src/features/LoginScreen';

import { Feather } from "@expo/vector-icons";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/app/services/firebase';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

export default function App() {

  const [login, setLogin] = useState(false)

  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true)
      } else {
        setLogin(false)
      }
    });
  };

  useEffect(() => {
    checkAuthState()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            login ?
              <Stack.Group>
                <Stack.Screen name='HomeStack' options={{ headerShown: false }}>
                  {() => (
                    <Tab.Navigator>
                      <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                          tabBarLabel: "Anasayfa",
                          tabBarIcon: ({ color, size }) => (
                            <Feather name="home" size={size} color={color} />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{
                          tabBarLabel: "Ayarlar",
                          tabBarIcon: ({ color, size }) => (
                            <Feather name="settings" size={size} color={color} />
                          ),
                        }}
                      />
                    </Tab.Navigator>
                  )}
                </Stack.Screen>
                <Stack.Screen name='AddScreen' component={AddScreen} options={{ presentation: 'modal' }} />
              </Stack.Group>
              :
              <Stack.Screen name='LoginScreen' component={LoginScreen} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
