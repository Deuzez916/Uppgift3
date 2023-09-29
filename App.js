import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import blueBackground from './blueBackground';
import BlåStörreText from './blueBackgroundBiggerText';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Start' component={Welcome}/>
        <Stack.Screen name='Blå' component={blueBackground}/>
        <Stack.Screen name='BlåStörreText' component={BlåStörreText}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// * Lägg till navigering i projektet
// * Gör en statisk FlatList i StartVy med tre rader "Apelsinjuice", "Banansmoothie", "Cider"
// * Gör en vy för en rad. Blå bakgrund med vit text.
// * Klick på rad öppnar ny vy med navigering som visar texten större 
// * Ladda upp projektet till github och ange länk nedan