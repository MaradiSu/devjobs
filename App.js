import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
class MyWebComponent extends Component {
  render() {
    return <WebView source={{ uri: 'https://github-jobs-client.vercel.app' }} />;
  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <MyWebComponent/> 
      <StatusBar style="auto" />
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
