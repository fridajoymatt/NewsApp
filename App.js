import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import axios from 'axios';

const App = () => {
  const [actualite, setActualite] = useState([]);

  const apiUrl ='https://rapidapi.com/rphrp1985/api/newsnow/';

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      // Assurez-vous que la structure de vos données correspond à ce que vous attendez
      setActualite(response.data); 
    } catch (error) {
      console.error('Erreur de requête API :', error);
    }
  };

  useEffect(() => {
    fetchData(); // Appeler la fonction fetchData une fois que le composant est monté
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="grey" />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>ACTUALITE</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Liste d'actualités
        </Text>
        <FlashList
          data={actualite}
          estimatedItemSize={250}
          renderItem={({ item }) => {
            return (
              <ScrollView key={item.id}>
                <View style={styles.newsContainer}>
                  <ImageBackground
                    source={{ uri: "https://th.bing.com/th?id=ORMS.d4496e6c372a1e95df328120bf50e33c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=2&p=0" }}
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                  >
                    <View style={styles.imageTextContainer}>
                      <View style={styles.titleView}>
                        <Text style={styles.titleText}>{item.title}</Text>
                      </View>
                      <Text style={styles.imageText}>{item.title}</Text>
                      <Text style={styles.imageText}>{item.title}</Text>
                    </View>
                  </ImageBackground>
                  </View>
              </ScrollView>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "red",
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    margin: 20,
  },
  source: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
  },
  newsContainer: {
    marginRight: 10,

    marginBottom: 20,
  },
  imageContainer: {
    marginLeft: 5,
    width: "100%",
    height: 250,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    resizeMode: "cover",
  },
  imageTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderRadius: 10,
  },
  titleView: {
    backgroundColor: "red",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default App;
