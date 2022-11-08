import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá mundo</Text>
      <Text style={styles.secondaryText}>Meu primeiro projeto em React Native</Text>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131016',
  },
  text: {
    fontSize: 32,
    color: '#cccccc',
  },
  secondaryText: {
    fontSize: 16,
    color: '#ffffff',
  },
});
