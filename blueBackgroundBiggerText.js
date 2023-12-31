import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BlueBiggerText({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 20}}>This is a bigger text and blue background</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 30,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


// * Gör en statisk FlatList i StartVy med tre rader "Apelsinjuice", "Banansmoothie", "Cider"
// * Ladda upp projektet till github och ange länk nedan