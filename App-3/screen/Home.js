import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { addCocktailsIndex } from '../redux/cocktails';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const cocktails = useSelector((state) => {
    console.log(state)
    //state.cocktail.cocktails
})
const dispatch = useDispatch()

const Home = () => {

    useEffect(() => {
        (async () => {
            getCocktailByLetter('a')
        })();
      }, []);
    
    return (
        <View>
            <Text>TEST HOME</Text>
            {/* <FlatList>
                data={cocktails}
                renderItem={({item}) => <Text>{item.strDrink}</Text>}
                keyExtractor={item => item.idDrink}
            </FlatList> */}
        </View>
    );
}

async function getCocktailByLetter(letter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`

    const reponse = await fetch(url);
    const indexCocktails = await reponse.json();
    dispatch(addCocktailsIndex(indexCocktails))
  }

export default Home;