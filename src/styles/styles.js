import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    viewPrinc:{
      backgroundColor:"#f2dad3"
    },
    
    image: {
      flex: 1,
      justifyContent: "center"},
      
    imputCadastro:{
      marginBottom: 10, 
      fontSize: 16, 
      marginTop: 10, 
      borderWidth: 1,
      borderColor:"#f4511e" ,
      width: '100%', 
      height: 40, 
      padding: 10, 
      borderRadius: 15   
    },

    viewBotoesHome:{
      padding:50,
      marginBottom: 10,
    },
     button:{
      marginBottom: 10,
      color:"#f4511e"
    },
    
  })
  
  export default styles;


  /*
              <Text style={{color:"#f4511e"}}>Modelo: {item.modelo}</Text>
              <Text style={{color:"#f4511e"}}>Categoria: {item.categoria}</Text>
              <Text style={{color:"#f4511e"}}>Quantidade: {item.quantidade}</Text>
  */