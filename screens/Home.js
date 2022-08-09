import React from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import HeaderTabs from '../componets/HeaderTabs';
import SearchBar from '../componets/SearchBar';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
