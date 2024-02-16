import React, {useState} from "react";
import {View, Text} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import {styles} from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({navigation}) => {

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="********" />
            <Button style={styles.button} title="Sign In" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account? 
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
        </SafeAreaView>
    )
}

export default Signin;