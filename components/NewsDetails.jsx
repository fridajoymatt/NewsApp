import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const NewsDetails = () => {
  const route = useRoute();
  const { actualiteDetails } = route.params;

  return (
    <View style={styles.container}>
    <Text>A propos de l'actualité :</Text>
    <Text>Nom de la source : {actualiteDetails.sourceName}</Text>
    <Text>Titre : {actualiteDetails.title}</Text>

    <View style={styles.newsContainer}>
      <ImageBackground
        source={
          item.image
            ? { uri: item.image }
            : {
                uri: 'https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900030/86470279-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg',
              }
        }
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.imageTextContainer}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{item.sourceName}</Text>
          </View>
          {/* Ajoutez vos Texts supplémentaires ici si nécessaire */}
        </View>
      </ImageBackground>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  newsContainer: {
    marginVertical: 20,
    height: 200,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    opacity: 0.7, // Modifier l'opacité de l'image au besoin
  },
  imageTextContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent pour les textes
  },
  titleView: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default NewsDetails;