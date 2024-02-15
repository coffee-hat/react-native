import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { API_KEY } from "@env";
import WeatherList from './components/WeatherItem'
import LocationInfo from './components/LocationInfo'

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let loca = await Location.getCurrentPositionAsync({});
      const weatherData = await getWeather(
        loca.coords.latitude, 
        loca.coords.longitude)

      setWeather(weatherData.list);
      setLocation(weatherData.city)
      console.log(weatherData)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <LocationInfo location={location}/>
      
      {
        weather ? 
          <FlatList
              style={styles.listContainer}
              data={weather} 
              renderItem={({item})  => 
                  <WeatherList
                    weatherItem={item}
                  />
                }
          /> 
      : null
      }
      
    </View>
  );
}

async function getWeather(lat, lon){
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

  const reponse = await fetch(url);
  const weather = await reponse.json();
  return weather
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  listContainer: {
    flex: 1,
  },
});
