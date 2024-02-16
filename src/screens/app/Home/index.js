import React, { useEffect } from "react";
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
    const [selectedCategory, setSelectedCategory] = React.useState();
    const [selectedProducts, setSelectedProducts] = React.useState(products);

    useEffect(() => {
        if (selectedCategory){
        const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory);
        setSelectedProducts(updatedSelectedProducts);
        } else {
            setSelectedProducts(products);
        }
    }, [selectedCategory]);
    

    const renderCategoryItem = ({ item }) => {
        return (
            <CategoryBox onPress={() => setSelectedCategory(item?.id)}
            isSelected={selectedCategory === item.id} 
            title={item.title} image={item.image} />
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
            <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} 
            keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{ height: 250 }} />} />
        </View>
        </SafeAreaView>
    )
}

export default Home;