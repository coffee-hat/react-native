import { Center, Image, Text, Box, Divider } from "@gluestack-ui/themed"

const DrinkDetail = ({route}) => {
    const cocktail = route.params.cocktail
    console.log(cocktail)
    return (
        <Center>
            <Box
                bg="$white"
                w='80%'
                h={500}
                borderRadius={8}
                border
                marginTop={8}
                marginBottom={16}
                alignItems="center"
            >
                <Image
                    size="2xl"
                    marginTop={12}
                    borderRadius="$md"
                    alt='drink thumbnail'
                    source={{
                        uri: cocktail.strDrinkThumb,
                    }}
                />

                <Box
                    flex={1} 
                    padding={8} 
                    gap={16} 
                    justifyContent="center"
                    paddingLeft={42}
                >
                    
                    <Box 
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={98}
                    >
                        <Text bold={true} fontSize={24}>{cocktail.strDrink}</Text>

                        <Box gap={8}>
                            <Text fontSize={18}>{cocktail.strAlcoholic}</Text>
                            <Text fontSize={18}>{cocktail.strCategory}</Text>
                            <Text fontSize={18}>{cocktail.strGlass}</Text>
                        </Box>

                        
                    </Box>
                    <Divider my="$0.5" />
                    <Box gap={8}>
                        <Text fontSize={24}>Instruction :</Text>
                        <Text fontSize={16}>{cocktail.strInstructions}</Text>
                    </Box>
                </Box>
                
            </Box>
        </Center>
    );
}

export default DrinkDetail