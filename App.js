import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import moviesList from './moviesList';
import MoviePlot from './MoviePlot';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="movieList" component={moviesList} />
        <Stack.Screen name="MoviePlot" component={MoviePlot} />
    </Stack.Navigator>    
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
