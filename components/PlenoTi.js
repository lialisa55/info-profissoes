import * as React from 'react';
import {Text, View, Style, FlatList, Image, StyleSheet, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoMono_400Regular } from '@expo-google-fonts/dev';

export default function JuniorTi(){
    let [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
    <View>
    <Text style={styles.title}> Função de um pleno em programação </Text>
<ScrollView>
    <Image style={styles.img} resizeMode={'contain'} source={require('../assets/junior.png')}/>

    <Text style={styles.paragraph}> No nível pleno, existe uma maior complexidade de tarefas. Aqui , o profissional precisa ter maior maturidade e também mais capacidade de tomar de decisões, o que era raramente é exigido no nível júnior.  </Text>
    <Text style={styles.title}>Empregos</Text>

        <FlatList
          data={arrayEmpregos}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.items}><AntDesign name="codesquareo" size={24} color="white" /> {item.nome} Pleno</Text>
            </View>)}/>
            </ScrollView>
    </View>
  )
}}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 350,
    margin: 12,
  },
  container: {
    flex: 1,
    padding: 8,
  },
  items: {
    padding: 10,
    margin: 2,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue',
    fontFamily: 'RobotoMono_400Regular',
  },
  paragraph: {
    margin: 5,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'RobotoMono_400Regular',
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    fontFamily: 'RobotoMono_400Regular',
  },
});

const arrayEmpregos = [
  {nome: 'Programador'}, {nome: 'Programador Front-End'}, {nome: 'Programador Back-End'}, {nome: 'Programador Desktop'}, {nome: 'Programador Mobile'}, {nome: 'Analista de Dados'}, {nome: 'Cloud Computing'}
]