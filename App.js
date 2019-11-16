import React, {useState} from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function App() {
  const [outputText, setOutput] = useState('Open up App.js to start working')
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Our first button!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});