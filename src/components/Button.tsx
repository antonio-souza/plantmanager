import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// ...rest -> propriedades de TouchableOpacity
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

// ...rest -> adiciona o resto  das  propriedades de TouchableOpacity (exemplo: onPress)
export function Button({ title, ...rest }: ButtonProps) {

  return (
    <TouchableOpacity 
        style={styles.container} 
        {...rest}
    >
        <Text style={styles.text}>
            { title }
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
});