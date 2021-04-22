import React from 'react';
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { View, StyleSheet, Text, Image, } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import Logo from "../assets/Logo.jpeg";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greenting}>Olá,</Text>
        <Text style={styles.userName}>Carlos</Text>
      </View>

      <Image
        style={styles.image}
        source={Logo}
      />

    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  greenting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,

  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  }
})