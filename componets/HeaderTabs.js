import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function HeaderTabs() {
  return (
    <View>
      <Text> HeaderTabs Componets </Text>
      <HearderButton msg={'Delivery'} />
      <HearderButton msg={'PickUp'} />
    </View>
  );
}

const HearderButton = ({ msg }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.warn(msg)}>
        <Text>{msg}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
