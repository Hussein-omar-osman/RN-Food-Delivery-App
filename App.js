import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({});
