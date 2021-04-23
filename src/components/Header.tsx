import React, { useEffect, useState } from 'react';
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { View, StyleSheet, Text, Image, } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import Logo from "../assets/Logo.jpeg";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header: React.FC = () => {
  const [name, setNamme] = useState("");

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user")
      setNamme(user || "")
    }

    loadStorageUserName();

  }, [])
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greenting}>Olá,</Text>
        <Text style={styles.userName}>{name}</Text>
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