import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import ProductList from "./ProductList";
const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [products, setProducts] = React.useState([]);

  // console.log(data);
  React.useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View>
      <View style={{ marginTop: 100, backgroundColor: "yellow" }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductList item={item} key={item.id} />}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

export default ProductContainer;
