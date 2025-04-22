import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Linking } from 'react-native';

function createSearchURLs(query) {
    const encodedQuery = query.trim().replace(/\s+/g, '+');
  
    const amazonURL = `https://www.amazon.com/s?k=${encodedQuery}`;
    const googleURL = `https://www.google.com/search?q=${encodedQuery}`;
  
    return {
      Amazon: amazonURL,
      Google: googleURL
    };
  }


const MoviePlot = ({ route, navigation }) => {  const { title, plot, poster } = route.params;   
const urls = createSearchURLs(title);


return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>    
      <Text style={styles.plot}>{plot}</Text> 
      <Image
        src={poster}
        style={{ width: 300, height: 450 }}
      />
      <Text style={styles.link} onPress={() => Linking.openURL(urls.Amazon)}>
        Buy on Amazon
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL(urls.Google)}>
        Search on Google
      </Text>

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
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#222'
      },
      plot: {
        fontSize: 16,
        color: '#444',
        lineHeight: 22,
        marginBottom: 12
      },
      link: {
        color: '#1e90ff',
        fontSize: 18,
        marginTop: 12,
        textDecorationLine: 'underline'
      }
  });  

export default MoviePlot;