import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/app/store';

import SettingsScreen from './src/features/SettingsScreen';
import HomeScreen from './src/features/HomeScreen';

import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
      </NavigationContainer>
    </Provider>
  );
}
