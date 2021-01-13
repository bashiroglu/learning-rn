import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "./ProductCard";

var { width } = Dimensions.get("window");

export default function ProductList(props) {
  const { item } = props;
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View style={{ width: width / 2 }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
