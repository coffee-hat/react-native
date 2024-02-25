import { Text, Box } from "@gluestack-ui/themed"
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import DrinkFavoritItem from "../components/DrinkFavoritItem";

const Favorit = () => {
    let cocktails = useSelector((state) => state.cocktail.cocktails)

    const getFavorit = () => {
        return cocktails.filter((drink) => {
            return drink.liked
        })
    }

    return (
        <Box bg="$warmGray200" h='100%'>
            {
                getFavorit().length?
                <FlatList
                    data={getFavorit()} 
                    renderItem={({item})  => <DrinkFavoritItem drink={item}/>}
                />
                : 
                <Box flex={1} justifyContent="center" alignItems="center">
                    <Text bold={true}>YOUR FAVORIT GO HERE</Text>
                </Box>
            }
        </Box>
    );
}

export default Favorit