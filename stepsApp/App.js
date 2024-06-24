import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const StepsValue = ({label, value}) => (
  <View style={styles.valueContainer}  >
    <Text style={styles.label} >{label}</Text>
    <Text style={styles.value} >{value}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}  >STEPS APP!!!</Text>
      
      <View style={{flexDirection: 'row'}}>
        
        <StepsValue label={"Steps"} value={1219} />
        <StepsValue label={"Distance"} value={"0.45KM"} />
        
      </View>

      <StepsValue label={"Flights Climbed"} value={"0.2KM"} />

      <Text style={styles.label} >TIMESTAMP: 10:40</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 10,
  },
  valueContainer:{
    marginRight: 50,
    marginVertical: 10,
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
