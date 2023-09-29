import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function blueBackground({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}} onPress={() => {
                navigation.navigate("BlueBiggerText");
            }}>This is a text with a blue backgroundcolor</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// * Gör en statisk FlatList i StartVy med tre rader "Apelsinjuice", "Banansmoothie", "Cider"
// * Ladda upp projektet till github och ange länk nedan