import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Axios from 'axios';

const Listar = () => {

  const [products, setProducts] = useState([]);
  const route = useRoute();
  useEffect(() => {
    Axios.get("http://192.168.1.37:3000/produtos").then((res) => {
      setProducts(res.data)
    }).catch((erro) => alert("Erro ao consultar produtos: " + erro))
  }, [route.params?.res])

  const navigation = useNavigation();

  return (
   <View>
      <FlatList nestedScrollEnabled={true}
        style={{ padding: 5 }}
        keyExtractor={(item, index) => item.id}
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Editar', { product: item })} style={{ flexDirection: "row", backgroundColor: 'white', marginBottom: 5 }}>
            <View style={{ paddingHorizontal: 10, marginTop: 10}}>
              <Text style={{color:"#f4511e"}}>Produto: {item.produto} </Text>
              <Text style={{color:"#f4511e"}}>Codigo: {item.id} </Text>

            </View>

          </TouchableOpacity>

        )} />
    </View>  
  );
}

export default Listar;