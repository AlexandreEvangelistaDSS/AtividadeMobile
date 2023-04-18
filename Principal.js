import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList, ScrollView, Image} from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

export default function App() {
   const [itens,setItens] = useState([  
    {name: 'PiPhone', key:1},
    {name: 'Smart home', key:2},
    {name: 'Pineapple car', key:3},
    {name: 'Pineapple store', key:4},
    {name: 'Pineapple watch', key:5},
    {name: 'PiPod', key:6},
    
   ])
  return (
     <View style={styles.container}>
<Image
     source={require('./assets/pineapple-bite-coasters.jpg')}
     style={styles.logo}
     />
      <View style={styles.container1}>
      <TextInput 
     multiline
     style={styles.input}
     underlineColorAndroid="transparent"
     placeholder='Pesquisar'
     />
     <Feather name="search" size={24} color="black"  style={styles.icon}/>
     </View>
     
   
      <View style={styles.containerbusca}>
        <Text style={styles.pineapple}>Pineapp</Text>
        </View>
      
      <ScrollView style={styles.box}>
      <FlatList
     numColumns={1}
     keyExtractor={(item)=> item.key}
     data={itens}
     renderItem={({item}) => (     
      
     <Text style={styles.item}> {item.name} </Text> 
     )}
     
     />
     
      </ScrollView>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'white',
   justifyContent:'center',
   alignContent:'center',
   paddingTop:40,
  },

  container1:{
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    marginTop:20,
    flexDirection:'row',
  },

  containerbusca:{
   marginLeft:20,
   marginBottom:-45,
  },

  pineapple:{
    fontSize:30,
    color: 'black',
    textAlign:'center',
    bottom:120,
    right:10,
    fontWeight:'bold',
    fontStyle:'italic',
  },

  input:{
    borderWidth: 2 ,
    borderRadius: 25,
    paddingLeft:40,
    fontSize:14,
    borderColor: 'black',
    width:320,
    height: 40,
    backgroundColor:'white',
    marginBottom:15,
    left:40,
    elevation:5,
    bottom:10,
  },

  icon:{
    right:270,
    bottom:18,
  },
  
  logo:{
    width:100,
    height:100,
    resizeMode:'contain',
    top:80,
    marginTop:-65,
  },
  
  item:{
    fontSize:20,
    width:'97%',
    height: 170,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: '#fff',
    margin: 10,
    padding:10,
    flexGrow: 1,
    borderRadius: 15,
    paddingTop:10,
    elevation:5,
  },
  box:{
    flex:0,
    marginTop:10,
    
  },
  
});