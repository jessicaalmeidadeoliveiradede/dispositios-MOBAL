import React from 'react';
import {Dimensions, Image, StyleSheet, Linking} from 'react-native';

import Texto from '../../../componentes/Texto';

import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

{/* Pegando o que pertence ao topo */}

export default function Topo({titulo}) {
  return <>
    <Image source={topo} style={estilos.topo}/>

    {/* Pegando o texto que vem da prop para isso uso {var} */}
    <Texto style={estilos.titulo}>{titulo}</Texto>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
