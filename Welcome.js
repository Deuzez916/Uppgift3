import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Welcome({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text>Detta är ett test</Text>
            <Button title='blåbackgrund' onPress={() => {
                navigation.navigate("Blå");
            }}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


// * Lägg till navigering i projektet
// * Gör en statisk FlatList i StartVy med tre rader "Apelsinjuice", "Banansmoothie", "Cider"
// * Gör en vy för en rad. Blå bakgrund med vit text.
// * Klick på rad öppnar ny vy med navigering som visar texten större 
// * Ladda upp projektet till github och ange länk nedan