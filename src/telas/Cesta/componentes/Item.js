import React from 'react';
import { View, Image, StyleSheet, FlatList, Linking,Text } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem, link } }) {
  return <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{''}
    <Text style={estilos.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(link);
            }}>{nome}</Text>
            </Texto>
  </View>
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  },
    hyperlinkStyle: {
    color: 'orange',
  },
});