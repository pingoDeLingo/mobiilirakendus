import React from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";

const Favorites = () => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
        </SafeAreaView>
    )
}

export default Favorites;