import React, { useState, useEffect } from 'react';
import { View,ScrollView, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles/styles';
import Axios from 'axios';

const Editar = () => {

  const [produto, setProduto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [marca, setMarca] = useState('');
  const [codfabrica, setCodFabrica] = useState('');
  const [embalagem, setEmbalagem] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [estoque, setEstoque] = useState('');
  const [id, setId] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {

    const product = route.params.product;

    setProduto(product.produto);
    setCategoria(product.categoria);
    setDescricao(product.descricao);
    setMarca(product.marca);
    setCodFabrica(product.codfabrica);
    setEmbalagem(product.embalagem);
    setFornecedor(product.fornecedor);
    setDepartamento(product.departamento);
    setEstoque(product.estoque);
    setId(product.id);
  }, [])

  const salvarEdicao = () => {

      Axios.patch('http://192.168.1.37:3000/produtos/' + id, {
        produto,
        categoria,
        descricao,
        marca,
        codfabrica,
        embalagem,
        fornecedor,
        departamento,
        estoque
      }).then((res) => {
        alert("Salvo com sucesso!")
        navigation.navigate('Home', { res })
      }).catch((erro) => alert("Não foi possivel salvar:" + " " + erro))
    

  }

  const deletarProduto = () => {

    Axios.delete('http://192.168.1.37:3000/produtos/' + id).then((res) => {
      alert("Deletado com sucesso!")
      navigation.navigate('Home', { res })
    }).catch((erro) => alert("Não foi possivel deletar" + erro))

  }

  useEffect(() => { }, []);

  return (
    <ScrollView style={{ padding: 10,backgroundColor: "#f2dad3" }}>

      <TextInput value={produto}onChangeText={(txt) => setProduto(txt)}placeholder="Produto" style={styles.imputCadastro} placeholderTextColor="#f4511e" />
      <TextInput value={categoria} onChangeText={(txt) => setCategoria(txt)} placeholder="Categoria" style={styles.imputCadastro} placeholderTextColor="#f4511e"/>
      <TextInput value={descricao} onChangeText={(txt) => setDescricao(txt)} placeholder="Descricao Tecnica" style={styles.imputCadastro} placeholderTextColor="#f4511e" />
      <TextInput value={marca} onChangeText={(txt) =>setMarca(txt)} placeholder="Marca" style={styles.imputCadastro} placeholderTextColor="#f4511e"/>  
      <TextInput value={codfabrica} onChangeText={(txt) =>setCodFabrica(txt)} placeholder="Cod. Fabrica" style={styles.imputCadastro} placeholderTextColor="#f4511e"/>  
      <TextInput value={embalagem} onChangeText={(txt) =>setEmbalagem(txt)} placeholder="Embalagem (ex: PC / UN / RL)" style={styles.imputCadastro} placeholderTextColor="#f4511e"/>  
      <TextInput value={fornecedor} onChangeText={(txt) =>setFornecedor(txt)} placeholder="Fornecedor" style={styles.imputCadastro} placeholderTextColor="#f4511e"/>  
      <TextInput value={departamento} onChangeText={(txt) =>setDepartamento(txt)} placeholder="Departamento" style={styles.imputCadastro} placeholderTextColor="#f4511e"/>  
      <TextInput value={estoque} onChangeText={(txt) =>setEstoque(txt)} placeholder="Quantidade no Estoque" style={styles.imputCadastro} placeholderTextColor="#f4511e"/>  

    <View style={{justifyContent:"space-between",  paddingVertical:10, marginHorizontal:10 , flexDirection:"row",}}>
      <Button 
      disabled={produto.trim() === ""}
      title="Atualizar Produto" 
      color="#f4511e" 
      onPress={salvarEdicao} />
      <Button title="Deletar Produto" 
      color="red"
      onPress={deletarProduto} /> 
    </View>
    </ScrollView>

      
  )
}

export default Editar;

/**/