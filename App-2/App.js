import { GluestackUIProvider, Box, Center, Divider, Text } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { API_KEY } from "@env";
import WeatherItem from './components/WeatherItem'
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
      console.log('updated Weather data')
    })();
  }, []);

  return (
    <GluestackUIProvider config={config}>
        <Box flex={1} bg='$tertiary50'>

            <Center marginBottom={16}>
                <LocationInfo location={location}/>
                <Divider my="$0.5" />
            </Center>
            
            
            {
            weather ? 
                <FlatList
                    data={weather} 
                    renderItem={({item})  => 
                        <WeatherItem
                        weatherItem={item}
                        />
                    }
                />
            :   <Text marginTop={16}>EMPTY LIST</Text>
            }
        
        </Box>
    </GluestackUIProvider>
  );
}

async function getWeather(lat, lon){
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

  const reponse = await fetch(url);
  const weather = await reponse.json();
  return weather
}
