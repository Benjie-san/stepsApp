import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>STEPS APP!!!</Text>
      
      <View style={{flexDirection: 'row'}}>
        
        <View>
          <Text>Steps</Text>
          <Text>1219</Text>
        </View>
        
        <View>
          <Text>Distance</Text>
          <Text>0.75 KM </Text>
        </View>
        
      </View>

      <View>
        <Text>Flights Climbed</Text>
        <Text>25</Text>
      </View>


      <Text>TIMESTAMP: 10:40</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
