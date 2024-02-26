import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

const ListItem = ({ title, subtitle, onPress, style }) => {
    console.log("Rendering ListItem with title:", title, "and subtitle:", subtitle);
  
    return (
      <Pressable style={[styles.container, style]} onPress={onPress}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {!! subtitle ? (<Text style={styles.subtitle}>{subtitle}</Text>) : null}
        </View>
        <Image style={styles.arrow} source={require('../../assets/back.png')} />
      </Pressable>
    );
  }
  

export default ListItem;
