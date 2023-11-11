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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: 'POST',
      url: 'https://newsnow.p.rapidapi.com/newsv2',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '975d89bfc5msha6afce769395d0cp16aad1jsn2c4d822f8378',
        'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
      },
      data: {
        query: 'AI',
        page: 1,
        time_bounded: true,
        from_date: '01/02/2021',
        to_date: '05/06/2021',
        location: '',
        category: '',
        source: ''
      }
    };

    try {
      const response = await axios.request(options);
      setNewsData(response.data);
      console.log(response.data);

    } catch (error) {
      if (error.response.status === 429) {
        console.log('Trop de requêtes. Atttendre que l\'api soit à nouveau accessible en free');
      } else {
        console.error(error);
      }    
    }
  };
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
          renderItem={({ item }) => (
            <View>
              <Text>Title: {item.title}</Text>
              <Text>URL: {item.url}</Text>
              <Text>Published At: {item.PublishedAt}</Text>
              <Text>Source: {item.source}</Text>
            </View>
          )}

          // renderItem={({ item }) => {
          //   return (
          //     <ScrollView>
          //       <View style={styles.newsContainer}>
          //         <ImageBackground
          //           source={{ uri: item.image }}
          //           style={styles.imageContainer}
          //           imageStyle={styles.image}
          //         >
          //           <View style={styles.imageTextContainer}>
          //             <View style={styles.titleView}>
          //               <Text style={styles.titleText}>{item.title}</Text>
          //             </View>
          //             <Text style={styles.imageText}>{item.date}</Text>
          //             <Text style={styles.imageText}>{item.description}</Text>
          //           </View>
          //         </ImageBackground>
          //       </View>
          //     </ScrollView>
          //   );
          // }}
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
