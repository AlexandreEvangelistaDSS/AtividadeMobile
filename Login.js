import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TextInput, StyleSheet, Text, View, Image} from 'react-native';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

import Button from './components/Button';



export default function App() {
  const [email,setemail] = useState('')
  const [senha,setsenha] = useState('')
  const Botaoaperta = () => {
    alert('Login realizado!');
    
  }

  return (
    <View style={styles.container}>
     
      <View style={styles.container2}> 
      <Text style={styles.pineapp}>  Pineapp</Text>  
        <View style={styles.container1}>
       <Image
      source={require('./assets/pineapple-bite-coasters.jpg')}
      style={styles.logo}
      />
    </View>
    </View>
    <View style={styles.email}>

        <TextInput
         style={styles.input}
         underlineColorAndroid="transparent"
         placeholder='Email:'
         onChangeText={setemail}        
         />
          <Entypo name="email" size={24} color="black" style={styles.icon} />

      </View>

      <View style={styles.password}>

         <TextInput
      style={styles.input}
      placeholder='Senha:'
      secureTextEntry
      onChangeText={setsenha}
       />
          <Entypo name="lock" size={24} color="black" style={styles.icon} />

          <TouchableOpacity>
              <Entypo name="eye" size={24} color="#4448" style={styles.iconesconde} />  
          </TouchableOpacity>
          
      </View>

      <View style={styles.buttonlogin}>
      <Button labelButton="Login" onpress={Botaoaperta}/>

      </View>

    <View>
    
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pineapp:{
    fontSize: 32,
    top:200,
    fontStyle:'italic',
    fontWeight:'bold',
    right:12,
    
  },

  input:{
  width: 350,
  height: 45,
  borderWidth: 1.5,
  borderRadius:25,
  borderColor: 'black',
  paddingLeft:40,
  fontSize:16,  
  fontWeight:'bold',
  margin:10,
 
  },

  icon:{
    right:350,
    top:20,
  },

  iconesconde:{
     top:20,
     right:70,
  },

  password:{
    flexDirection:'row',
    marginLeft:42,
     bottom:300,
  },

  email:{
    flexDirection:'row',
     marginLeft:20,
     bottom:300,
  },

   logo:{
  width:100,
  resizeMode:'contain',
  bottom:140, 
  },


  container1:{
    justifyContent:'center',
    alignItems:'center',
    bottom:40,
  },

  container2:{
    justifyContent:'center',
    alignItems:'center',
  },

  buttonlogin:{
    bottom:270,
  },

});
