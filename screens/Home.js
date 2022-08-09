import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../componets/Categories';
import HeaderTabs from '../componets/HeaderTabs';
import RestaurantItems, {
  localRestaurants,
} from '../componets/RestaurantItems';
import SearchBar from '../componets/SearchBar';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
