import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const button = ({ labelButton, onpress}) => {
  return (
    <TouchableOpacity style={styles.button}
        onPress={onpress}
    >
        <Text style={styles.textobotao}>{labelButton}</Text>
    </TouchableOpacity>
  )
}

export default button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'black',
        width: 250,
        height: 45,
        borderWidth: 1,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center',
        color:'white',

    },
    textobotao:{
        color:'white',
        fontWeight: 'bold',
        fontSize:17,
    }
})