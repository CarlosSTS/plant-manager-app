import React from 'react';
import { View, StyleSheet } from 'react-native';
import  Header  from "../components/Header";
import colors from '../../styles/colors';

// import { Container } from './styles';

const PlantSelect: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default PlantSelect;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: colors.background
  }
})