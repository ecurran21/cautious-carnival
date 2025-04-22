import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

const MoviesList = ({ navigation }) => {
  const startingDataSource = [];

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
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Movies </Text>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieCard}
            onPress={() =>
              navigation.navigate("MoviePlot", {
                title: item.Title,
                plot: item.Plot,
                poster: item.Poster
              })
            }
          >
            <Text style={styles.movieTitle}>{item.Title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Load Top 250 Movies!" onPress={() => getMoviesFromApi()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#E1C6FF',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#444',
    textAlign: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  movieCard: {
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Helvetica Neue', // playful but professional
  },
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default MoviesList;
