import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../componets/Categories';
import HeaderTabs from '../componets/HeaderTabs';
import SearchBar from '../componets/SearchBar';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
