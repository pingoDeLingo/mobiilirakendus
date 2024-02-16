import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";

const CategoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default CategoryBox;
