import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import Button from "../../../components/Button";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const ProductDetails = () => {
  const route = useRoute(); 
  const { product } = route.params || {};

  return (
    <SafeAreaView style={styles.save}>
        <ScrollView>
            <Image source={{uri: product?.image}} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.price}>{product?.price}</Text>
                <Text style={styles.description}>{product?.description}</Text>
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable>
                    <Image source={require("../../../assets/tabs/bookmark.png")} />
                </Pressable>
                <Button title="Contact salesman" />
            </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
