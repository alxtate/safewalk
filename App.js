import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReserveScreen from './screens/ReserveScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeTab() {
  return(
    <HomeScreen />
  )
}

function ReserveTab() {
  return(
    <ReserveScreen />
  )
}
const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        tabBarOptions={{ activeTintColor: '#fff', activeBackgroundColor: '#660000', inactiveTintColor: '#000'}}
      >
        <TabNav.Screen name="Home" component={HomeTab} style={styles.singleTab} 
          options={{
            tabBarIcon: ({ color, style }) => (
              <MaterialCommunityIcons name="home" color={'#000'} style={styles.singleTab} />
            ),
            }}
        />
        <TabNav.Screen name="Reservation" component={ReserveTab} style={styles.singleTab} 
          options={{
            tabBarIcon: ({ color, style }) => (
              <MaterialCommunityIcons name="walk" color={'#000'} style={styles.singleTab} />
            ),
          }}
        />
      </TabNav.Navigator>
    </NavigationContainer>   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 600,
    height: 400,
    resizeMode: 'center',
    marginTop: 3,
    marginLeft: -10,
  },
  screenFormat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleTab: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
