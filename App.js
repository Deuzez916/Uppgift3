import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import blueBackground from './blueBackground';
import BlåStörreText from './blueBackgroundBiggerText';
import BlueBiggerText from './blueBackgroundBiggerText';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='BlueBackground' component={blueBackground}/>
        <Stack.Screen name='BlueBiggerText' component={BlueBiggerText}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// * Gör en statisk FlatList i StartVy med tre rader "Apelsinjuice", "Banansmoothie", "Cider"
// * Ladda upp projektet till github och ange länk nedan