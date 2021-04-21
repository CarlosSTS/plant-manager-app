import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import Button from "../components/Button"

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


const UserIdentication: React.FC = () => {
  const {navigate} = useNavigation()
  const [name , setName] = useState("")
const [isFocused, setIsFocused] = useState(false)
const [isFilled, setIsFilled] = useState(false)

function handleInputBlur() {
  setIsFocused(false)
  setIsFilled(!!name)
}
function handleInputFocus() {
  setIsFocused(true)
}
function handleInputChange(value: string) {
  setIsFilled(!!value)
  setName(value)
}

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>
                { isFilled ? '😄' : '😃'}
          </Text>
              <Text style={styles.title}> Como podemos{"\n"}
          chamar você?
          </Text>
            </View>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="Digite seu nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <View style={styles.footer}>
              <Button 
              title="Confirmar"
              onPress={() => navigate('Confirmation')} 
              />

            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default UserIdentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: "space-around",
  },

  content: {
    flex: 1,
    width: "100%",
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 54,
  },

  emoji: {
    fontSize: 44,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },

  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
  }
})