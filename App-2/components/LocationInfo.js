import { Box, Text, Spinner, Heading, Badge, Divider, BadgeText, Center } from "@gluestack-ui/themed"

const LocationInfo = (props) => {
    
    return (
        <Center>
            <Heading>METEO</Heading>
            { props.location ?
                <Box marginTop={8}>
                    <Box justifyContent="center" flexDirection="row" marginBottom={16}>
                        <Text marginRight={4}>{ props.location.name }</Text>
                        <Divider my={1} orientation="vertical"/>
                        <Badge size="md" variant="solid" borderRadius="$none" action="info" marginBottom={8} paddingTop={4}>
                            <BadgeText>{ props.location.country }</BadgeText>
                        </Badge>
                    </Box>

                    <Box justifyContent="center" flexDirection="row" gap={8}>
                        <Text italic={true} bold={true}>{ props.location.coord.lat }'</Text>
                        <Text italic={true} bold={true}>{ props.location.coord.lon }'</Text>
                    </Box>
                </Box>
            :
            <Spinner size="large" />
        }
        </Center>
    );
}

export default LocationInfo;