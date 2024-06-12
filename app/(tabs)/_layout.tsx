import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
            ),
          }}
        />
        
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
          ),
        }}
      />
    <Tabs.Screen
      name="C-106"
      options={{
        title: 'C-106',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
        ),
        tabBarButton: () => null, // Hide the tab from the tab bar
      }}
    />

<Tabs.Screen
      name="C-201"
      options={{
        title: 'C-201',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
        ),
        tabBarButton: () => null, // Hide the tab from the tab bar
      }}
    />

<Tabs.Screen
      name="I-204"
      options={{
        title: 'I-204',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
        ),
        tabBarButton: () => null, // Hide the tab from the tab bar
      }}
    />
    </Tabs>
  );
}
