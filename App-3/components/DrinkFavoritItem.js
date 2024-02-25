import { Text, Box, Center, Image } from "@gluestack-ui/themed";

const DrinkFavoritItem = (props) => {
    const cocktail = props.drink.cocktail

    return (
        <Center>
            <Box
                bg="$white"
                w='60%'
                h={350}
                borderRadius={8}
                border
                marginTop={8}
                marginBottom={16}
                alignItems="center"
            >
                <Image
                    size="2xl"
                    borderRadius="$md"
                    alt='drink thumbnail'
                    source={{
                        uri: props.drink.cocktail.strDrinkThumb,
                    }}
                />

                <Box 
                    flex={1} 
                    padding={8} 
                    flexDirection="row" 
                    gap={16} 
                    justifyContent="center"
                    alignItems="center"
                >
                        
                    <Text bold={true} fontSize={24}>{cocktail.strDrink}</Text>
                </Box>
                
            </Box>
        </Center>
    );
}

export default DrinkFavoritItem;