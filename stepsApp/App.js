import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RingProgress from './components/RingProgress';

const StepsValue = ({label, value}) => (
  <View >
    <Text style={styles.label} >{label}</Text>
    <Text style={styles.value} >{value}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>

      <RingProgress progress={0.50} />
      
      <View style={styles.valueMainContainer}>
        
        <StepsValue label={"Steps"} value={1219} />
        <StepsValue label={"Distance"} value={"0.45KM"} />
        <StepsValue label={"Flights Climbed"} value={"0.2KM"} />
        
      </View>


      <Text style={styles.label} >TIMESTAMP: 31:24 </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 12,
  },
  valueMainContainer:{
    flexDirection: 'row',
    gap: 26,
    flexWrap: 'wrap',
    marginTop: 100,

  },
  
  label:{
    fontSize: 20,
    color: '#fff',
  },
  value:{
    fontSize: 35,
    fontWeight: '500',
    color: '#AFB3BE',
  }
});
