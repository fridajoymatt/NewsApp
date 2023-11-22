import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
import { AntDesign } from "@expo/vector-icons";
import { A } from "@expo/html-elements";
import Moment from "react-moment";
import "moment-timezone";
import * as Linking from "expo-linking";
import * as Sharing from "expo-sharing";

const NewsDetails = () => {
  const route = useRoute();
  const { actualiteDetails } = route.params;
  const navigation = useNavigation();
  const publish = actualiteDetails.publishedAt;
  const share = Sharing.isAvailableAsync(true);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "grey",
            width: 80,
            height: 40,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
          <Text onPress={() => navigation.goBack()} style={{ color: "#fff" }}>
            {" "}
            Retour{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.newsContainer}>
        <ImageBackground
          source={
            actualiteDetails.image
              ? { uri: actualiteDetails.image }
              : {
                  uri: "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900030/86470279-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg",
                }
          }
          style={styles.imageContainer}
          imageStyle={styles.image}
        ></ImageBackground>
      </View>
      {/* Vue du rendu niveau de recuperation des données texte et lien */}

      <View>
        {/* <View style={{ fontWeight: "none", marginBottom: 20   }}>
        <Text>A propos de l'actualité </Text>
        </View> */}
        {/* Vue de la source de la new */}
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={{ fontWeight: "none", fontSize: 18 }}>
            Nom de la source :{" "}
          </Text>{" "}
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {" "}
            {actualiteDetails.sourceName}
          </Text>
        </View>
        {/* Vue du titre de la new */}
        <View style={{ flexDirection: "column", marginBottom: 20 }}>
          <Text style={{ fontWeight: "none", fontSize: 18 }}>Titre : </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {" "}
            {actualiteDetails.title}
          </Text>
        </View>
        {/* Vue de la date de publication de la new */}
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={{ fontWeight: "none", fontSize: 18 }}>
            Date de publication :{" "}
          </Text>{" "}
          <Moment
            format="YYYY/MM/DD"
            style={{ fontWeight: "bold", fontSize: 18 }}
          >
            {publish}
          </Moment>
        </View>
        {/* Vue du lien de la new */}
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={{ fontWeight: "none", fontSize: 18 }}>
            Lien de l'actualité :{" "}
          </Text>
          <Text style={{ color: "red", fontWeight: "none" }}>
            <A
              href={actualiteDetails.link}
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Cliquez-ici
            </A>
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              fontSize: 18,
              backgroundColor: "#6ba5ff",
              width: 90,
              height: 40,
              borderRadius: 10,
              padding: 2,
            }}

            onPress = { share }
          >
            <AntDesign name="sharealt" size={24} color="#fff" />
            <Text style={{ color: "#fff" }}> Partager</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  newsContainer: {
    marginVertical: 20,
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  image: {
    opacity: 1, // Modifier l'opacité de l'image au besoin
  },

  titleView: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    paddingBottom: 5,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "none",
    color: "#FFFFFF",
  },
});

export default NewsDetails;
