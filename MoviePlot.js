import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const MoviePlot = ({ route, navigation }) => {  const { title, plot, poster } = route.params;

return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>    
      <Text style={styles.plot}>{plot}</Text> 
      <Image
        src={poster}
        style={{ width: 300, height: 500 }}
      />

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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#222'
      },
      plot: {
        fontSize: 16,
        color: '#444',
        lineHeight: 22
      }
  });  

export default MoviePlot;