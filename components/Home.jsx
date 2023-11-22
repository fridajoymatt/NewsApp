import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Home = () => {

  const navigation = useNavigation();

  const [actualite, setActualite] = useState([]);

const options = {
  method: 'GET',
  url: 'https://newsi-api.p.rapidapi.com/api/category',
  params: {
    category: 'world',
    language: 'en',
    country: 'us',
    sort: 'top',
    page: '1',
    limit: '20'
  },
  headers: {
    'X-RapidAPI-Key': '975d89bfc5msha6afce769395d0cp16aad1jsn2c4d822f8378',
    'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
  }
};

const fetchData = async () => {
  try {
    const response = await axios.request(options);
    setActualite(response.data); // Mettre à jour l'état avec les données récupérées
  } catch (error) {
    console.error(error);
  }
};

  useEffect( () => {
    fetchData();
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
              <ScrollView>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => navigation.navigate("newsDetails", { actualiteDetails: item })}
                    >
              <View style={styles.newsContainer}>
                <ImageBackground
                source={item.image ? { uri: item.image } : {uri: "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900030/86470279-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg"}}                  
                  style={styles.imageContainer}
                  imageStyle={styles.image}
                >
                  <View style={styles.imageTextContainer}>
                    <View style={styles.titleView}>
                      <Text style={styles.titleText}>{item.sourceName}</Text>
                    </View>
                    <Text style={styles.imageText}>{}</Text>
                    <Text style={styles.imageText}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </View>
              </TouchableOpacity>
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
  logo: {
    width: 100, 
    height: 100,
    resizeMode: 'contain', 
  },
  
});

export default Home;
