import React from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";
import Header from "../../../components/Header";
import {SafeAreaView} from "react-native-safe-area-context";
import { categories } from "../../../data/categories";
import { FlatList } from "react-native";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
    const renderCategoryItem = ({ item }) => {
        return (
            <CategoryBox title={item.title} image={item.image} />
        );
    };
    
    
    const renderProductItem = ({ item }) => {
        console.log(item)
        return (
            <ProductHomeItem {...item} />
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Header showSearch={true} title="Find All You Need" />
            <FlatList showHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) =>
            String(index)} />
            <FlatList numColumns={2} data={products} renderItem={renderProductItem} 
            keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{ height: 250 }} />} />
        </View>
        </SafeAreaView>
    )
}

export default Home;