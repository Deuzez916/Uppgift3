import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Welcome({navigation, route}) {
    return (
        <View style={styles.container}>
            <Button title='Blue Background' onPress={() => {
                navigation.navigate("BlueBackground");
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


// * Gör en statisk FlatList i StartVy med tre rader "Apelsinjuice", "Banansmoothie", "Cider"
// * Ladda upp projektet till github och ange länk nedan