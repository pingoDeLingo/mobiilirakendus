import React from "react";
import {Text, View, Image} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Splash = ({navigation}) => {
    console.log('navigation => ', navigation)

    const onSignup = () => {
        navigation.navigate('Signup')
    }

    const onSignin = () => {
        navigation.navigate('Signin')
    }

    return (
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.Image} source={require('../../../assets/splash_image.png')}/>

        <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}> All you need</Text>
            <Text style={styles.title}>Here!</Text>
        </View>

        <Button onPress={onSignup} title="Sign Up" />

        <Pressable onPress = {onSignin} hitSlop={20}>
            <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
    </View>
    );
}

export default Splash;
