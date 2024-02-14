import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from "@env";
import City from './components/City';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let loca = await Location.getCurrentPositionAsync({});
      setLocation(loca);

      getWeather(
        loca.coords.latitude, 
        loca.coords.longitude)
    })();
  }, []);

  return (
    <View style={styles.container}>
        <City city="{}"/>
    </View>
  );
}

async function getWeather(lat, lon){
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

  const reponse = await fetch(url);
  const weather = await reponse.json();
  console.log(weather);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
