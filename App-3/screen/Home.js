import { Text, Box, Button, ButtonText } from "@gluestack-ui/themed"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { addCocktailsIndex } from '../redux/cocktails';

import DrinkItem from '../components/DrinkItem'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const Home = () => {
    let cocktails = useSelector((state) => state.cocktail.cocktails)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const indexCocktails = await getCocktailByLetter('a')
            dispatch(addCocktailsIndex(indexCocktails.drinks, 'a'))
        })();
    }, []);

    return (
        <Box bg="$warmGray200" h='100%'>
        {
            cocktails.length?
            <FlatList
                data={cocktails} 
                renderItem={({item}) => <DrinkItem drink={item}/>}
            />
            : <Text>NO DATA</Text>
        }
        </Box>
    );
}

async function getCocktailByLetter(letter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`

    const reponse = await fetch(url);
    return reponse.json();
}


export default Home;