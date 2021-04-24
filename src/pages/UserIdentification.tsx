import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from "@expo/vector-icons"
import * as imagePicker from "expo-image-picker"

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const [Photo, setPhoto] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setName(value);
    setIsFilled(!!value)
  }

  async function handleUserImage() {
    const { status } = await imagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      return Alert.alert("Aviso", "Você não pode Adicionar uma imagem 🥲")
    }
    const result = await imagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: imagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result
    await AsyncStorage.setItem('@plantmanager:image', image);
    setPhoto(image)
  }

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Me diz como chamar você 😢');

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: `Agora vamos começar a cuidar das suas plantinhas com muito cuidado.`,
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😢');
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😃'}
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>

              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green }
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

                <Text style={styles.title}>Adicione uma imagem!</Text>
                <View style={styles.uploaded}>

                <TouchableOpacity onPress={handleUserImage}>
                  {Photo ? (
                    <Image source={{ uri: Photo }}
                    style={styles.image}
                    />
                  ) : (
                    <MaterialIcons style={styles.iconPhoto} name="add-a-photo" size={45} />
                  )}
                </TouchableOpacity>
              </View>


              <View style={styles.footer}>
                <Button
                  title="Confirmar"
                  onPress={handleSubmit}
                />
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  },
  iconPhoto: {
    color: colors.body_dark,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  },
  uploaded : {
    alignSelf: 'center',
    paddingTop: 10,

  }
})