import React from 'react';
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string,
  active?: boolean,
}

const EnvironmentButton: React.FC<EnviromentButtonProps> = ({ title, active = false, ...rest }) => {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.containerActive
      ]}>
        {title}
      </Text>


    </RectButton>
  )
}

export default EnvironmentButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 12,
marginRight: 5,
  },
  containerActive: {
    fontFamily: fonts.heading,
    color: colors.green,
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
})