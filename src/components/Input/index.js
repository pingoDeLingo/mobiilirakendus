import React, {useState} from "react";
import { TextInput, View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

const Input = ({label, placeholder, isPassword, value, onChangeText,style, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText}
                secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={[styles.input, style]} {...props} />
                {isPassword ? (
                <Pressable onPress={onEyePress}>
                    <Image source={isPasswordVisible ? require("../../assets/eye.png") : require("../../assets/eye_closed.png")} style={styles.eye}  />
                </Pressable>
                ): null
                }
            </View>
        </View>
    )
}

export default Input;