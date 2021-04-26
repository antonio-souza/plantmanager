

import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return (
        // SafeAreaView -> Coloca o conteudo dentro da area visivel do IPhone
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>

                {/* Exibe imagem PNG */}
                <Image source={wateringImg} style={styles.image} resizeMode='contain' />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                {/* Botao com efeito de opacidade ao clicar */}
                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    {/* Icone */}
                    <Entypo 
                        name='chevron-right' 
                        style={styles.buttonIcon} 
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around', //Distibiue os elementos com espacos iguais ente eles, sem colar nas bordas
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading, //Centralizar totas as cores num arquivo
        marginTop: 38,
        fontFamily: fonts.heading, //Centralizar totas as fontes num arquivo
        lineHeight: 34
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20,
        fontFamily: fonts.text
    },    
    image: {        
        height: Dimensions.get('window').width * 0.7 //Dimensions + resizeMode='contain' -> imagem com 70% das dimensoes da tela
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,  //Arredondamento de bordas
        marginBottom: 10,
        height:56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
});