import { StyleSheet, Text, View } from 'react-native';

const WeatherItem = (props) => {
    
    return (
        <View style={styles.container}>
            <Text>{ props.weatherItem.main.temp } °C</Text>
            <Text>{ props.weatherItem.weather[0].description }</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        display: 'flex',
        alignItems: 'center',

        marginBottom: '1em',
    },
  });

export default WeatherItem;