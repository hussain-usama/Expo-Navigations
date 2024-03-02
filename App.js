
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';
import MyDrawer from './components/Drawer';
import MyTabs from './components/Tabs/Index';
import NativeNatigations from './components/Navigations';


function App() {
  return (
    <>
    <NativeNatigations/>
      <MyDrawer />
        <MyTabs/>
    </>
  );
}

export default App;