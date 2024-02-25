import { Text, Box, Center, Image, Button, ButtonIcon, FavouriteIcon, CloseIcon } from "@gluestack-ui/themed";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFavori } from '../redux/cocktails';

const DrinkItem = (props) => {
    const cocktail = props.drink.cocktail
    const dispatch = useDispatch()
    const [isliked, setLiked] = useState(props.drink.liked);

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
                    
                    <Button 
                        size="md" 
                        variant="solid" 
                        action="negative" 
                        borderRadius="$full"
                        marginTop={3}
                        onPress={() => {
                            dispatch(addFavori({id: cocktail.idDrink, liked: !isliked}))
                            setLiked(!isliked)
                        }}
                    >
                        {
                            isliked?
                                <ButtonIcon as={CloseIcon} m="$2" w="$4" h="$4"/>    
                            :   <ButtonIcon as={FavouriteIcon} m="$2" w="$4" h="$4"/>
                        }
                        
                    </Button>
      
                </Box>
                
            </Box>
        </Center>
    );
}

export default DrinkItem;