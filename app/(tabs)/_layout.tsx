import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#096de7'
        },
        headerTintColor: '#ffd33d',
        tabBarStyle: {
          backgroundColor: '#096de7'
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="scan" 
        options={{ 
          title: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'scan-circle-sharp' : 'scan-circle-outline'} color={color} size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}