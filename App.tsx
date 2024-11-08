import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import LifeGrid from './src/components/LifeGrid';

export default function App() {
  // Example birthdate - replace with actual user data
  const birthDate = new Date(1990, 0, 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LifeGrid
          birthDate={birthDate}
          events={[]}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});