import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Texto from '../../componentes/Texto';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import { Text, Card, Button, Icon } from '@rneui/themed';


{/* como objeto foi descontruido, agente pode pegar ele diretamente como se fossem props*/}
export default function Cesta({ topo, detalhes, itens }) {
  return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome }
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
          </View>
        </>
      }}
    />
     <View style={{display:'flex', alignItems:'center',}}>
    <Button
          icon={
            <Icon
              name="cart"
              type="ionicon"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            marginTop: 10,
            background: '#000000',
            width: 150,
            borderRadius: 5,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
          }}
          title="Comprar"
          color={'#cf7ccd'}
        />
        </View>
  </>
}
const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
