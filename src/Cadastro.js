import React, { useState, useEffect } from 'react';
import { View,ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';
import Axios from 'axios';

const Cadastro = () => {

  const [produto, setProduto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [marca, setMarca] = useState('');
  const [codfabrica, setCodFabrica] = useState('');
  const [embalagem, setEmbalagem] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [estoque, setEstoque] = useState('');


  const navigation = useNavigation();

  const salvarProduto = () => {
      Axios.post('http://192.168.1.37:3000/produtos', {
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
        alert("Produto salvo com sucesso!")
        navigation.navigate('Home', { res })
      }).catch((erro) => alert("Erro ao salvar Produto"))
    }
  
  useEffect(() => {}, []);

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

    <View style={{paddingVertical:10, marginHorizontal:80}}>
      <Button 
      disabled={produto.trim() === ""}
      title="Cadastrar Produto" 
      color="#f4511e" 
      onPress={salvarProduto} />
    </View>

    </ScrollView>
  )
}

export default Cadastro;