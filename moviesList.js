import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button} from 'react-native';

const moviesList = ({ navigation }) => {

const startingDataSource = [
    { }
  ];

  const [movies, setMovies] = useState(startingDataSource);
  
  function getMoviesFromApi() {

    fetch('https://raw.githubusercontent.com/toedter/movies-demo/master/backend/src/main/resources/static/movie-data/movies-250.json')
      .then((response) => response.json())
      .then((json) => {  
        console.log(json);    
        setMovies((prevMovies) => [...prevMovies, ...json.movies]); 
   
      })
      .catch((error) => {
         console.error(error);
      });
    };

 
         
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        extraData={movies} 
        renderItem={({item}) => 
        <TouchableOpacity  style={styles.border} onPress={() =>
              navigation.navigate("MoviePlot", {
              title: item.Title,
              plot: item.Plot, 
              poster : item.Poster
              })}>
          <Text style={styles.item}>{item.Title}</Text>
          
        </TouchableOpacity >
        } />
        <Button title="Click Here to Load the 250 Top Movies!" onPress={()=>getMoviesFromApi()} />

        
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 54,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    }
  });
  
  

  

export default moviesList;