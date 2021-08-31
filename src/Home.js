import React from 'react';
import { View, Button,Alert,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';

const Home = () => {
const navigation = useNavigation();

  return (
   
   <View style={styles.viewPrinc}>
    
    <View>
      <Image
        style={{ width: '100%', height: '80%' }}
        resizeMode="cover"
        source={require('../images/estoque.jpg')}>
      </Image>

      <View style={{margin:10}}>
      <Button style={{}}
        title="Cadastrar Produtos"
        color="#f4511e"
        onPress={() => navigation.navigate('Cadastro')}
      />
      
      <View style={{margin:10}}></View>
      <Button
        title="Produtos Cadastrados"
        color="#f4511e"
        onPress={() => navigation.navigate('Listar')}
      />
      </View>
    </View>
    </View>
  );
}

export default Home;