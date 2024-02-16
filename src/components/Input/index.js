import React, {useState} from "react";
import { TextInput, View, Text, Image } from "react-native";
import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText}
                secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />
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