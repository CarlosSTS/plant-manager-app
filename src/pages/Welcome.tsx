import React from 'react';
import { Feather } from "@expo/vector-icons"
import {
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  View
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import wateringImg from "../assets/watering.png"

const Welcome: React.FC = () => {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Gerencie {'\n'}
       suas plantas de {'\n'}
         forma fácil
         </Text>

        <Image style={styles.image} source={wateringImg} />

        <Text style={styles.subTitle}>
          não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>


        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
        >
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
            color="" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,

  },

  subTitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },

  image: {
    height: Dimensions.get("window").width * 0.7
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white
  },

});