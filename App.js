import React from "react";
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

const App = () => {
  const actualite = [
    {
      id: "1",
      source: "BFMTV",
      date: "07/11/2023",
      description: "Sport - Comme Neymar, ces footballeurs brésiliens ont apporté leur soutien à Jair Bolsonaro",
      image:
        "https://media.ouest-france.fr/v1/pictures/MjAyMjA5ZTMxYzYyMDQzZDRmZGM0MmMyZmYyNWNkMDMzMjdlMTk?width=1260&height=708&focuspoint=60%2C47&cropresize=1&client_id=bpeditorial&sign=08239b295f82b450171772850ff21131211568e857a2a7c86ed91547c72e3d9f",
    },

    {
      id: "2",
      source: "FRANCE 2",
      date: "08/11/2023",
      description: "Ivanka Trump témoigne à New York,dle procès our fraude de Donald Trump en images!",
      image:
      "https://th.bing.com/th?id=ORMS.d4496e6c372a1e95df328120bf50e33c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=2&p=0",
    },

    {
      id: "3",
      source: "AFRICMAG",
      date: "09/11/2023",
      description: "Effondrement du faux plafond à l'Aéroport inter ational de Monastir ; Une mission d'audit",
      image:
      "https://th.bing.com/th?id=ORMS.5828fba9fd1f6e1b5f052d75613b5de1&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=2&p=0",
    },

    {
      id: "4",
      source: "INEWS",
      date: "10/11/2023",
      description: "Les bienfaits de la douche froide : 16 bonnesxaisons de vous y mettre !",
      image:
        "https://th.bing.com/th?id=ORMS.2d10af28e4baef3904ebcc6233af420c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=2&p=0",
    },

    {
      id: "5",
      source: "FRANCE24",
      date: "11/11/2023",
      description: "David Beckham révèle cette obsession à laquelle il pense dès le matin",
      image:
      "https://th.bing.com/th?id=ORMS.845b637ccae0aecd98e242bb18509b10&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=2&p=0",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="grey" />

      {/* Titre de l'application */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ACTUALITE</Text>
      </View>

      {/* FlashList contenant la liste des actualités */}
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
              <View style={styles.newsContainer}>
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.imageContainer}
                  imageStyle={styles.image}
                >
                  <View style={styles.imageTextContainer}>
                    <View style={styles.titleView}>
                      <Text style={styles.titleText}>{item.source}</Text>
                    </View>
                    <Text style={styles.imageText}>{item.date}</Text>
                    <Text style={styles.imageText}>{item.description}</Text>
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
