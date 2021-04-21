import React from 'react';
import AppLoading from "expo-app-loading"
import { 
  useFonts,
  Jost_400Regular, 
  Jost_600SemiBold
   } from '@expo-google-fonts/jost';

import Welcome from "./src/pages/Welcome";

const App: React.FC = () => {

const [fontsLoaded] = useFonts({
Jost_400Regular,Jost_600SemiBold,
});

if(!fontsLoaded) {
  return <AppLoading />
}

  return <Welcome />
}

export default App;