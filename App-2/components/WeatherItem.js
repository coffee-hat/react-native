import { Text, Box, Center, Divider } from "@gluestack-ui/themed"

const weekDay = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']

const WeatherItem = (props) => {
    const date = new Date(Date.parse(props.weatherItem.dt_txt))
    const day = 
        weekDay[date.getDay()] + ' '
        + date.getDate().toString() + ' '
        + date.getFullYear().toString()
    
    const time = date.getHours().toString() + ' h'
    
    return (
        <Center>
            <Box
                padding={6}
                marginTop={8}
                w='60%'
                borderRadius={8}
                bg='$tertiary200'
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap={4}
            >
                <Box flex={1}>
                    <Box flexDirection="column">
                        <Text fontSizes={16}>{day}</Text>
                        <Text italic={true} fontSizes={16}>{time}</Text>
                    </Box>
                    <Divider my='$0.5'/>
                    <Text fontSizes={16}>{ props.weatherItem.weather[0].description }</Text>
                </Box>
                <Center w='40%' marginLeft={8}>
                    <Text bold={true} fontSizes={16}>{ props.weatherItem.main.temp } °C</Text>
                </Center>
            </Box>
        </Center>
    );
}

export default WeatherItem;