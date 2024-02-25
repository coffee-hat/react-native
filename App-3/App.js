import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import Home from './screen/Home'
import Favorit from "./screen/Favorit";
import DrinkDetail from './components/DrinkDetail'

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer>
                <Provider store={store}>
                    <Stack.Navigator>
                        <Stack.Screen name="Root" component={Root} />
                        <Stack.Screen name="Detail" component={DrinkDetail} />
                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
        </GluestackUIProvider>
    );
}

function Root() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorit" component={Favorit} />
        </Tab.Navigator>
    );
}
  
