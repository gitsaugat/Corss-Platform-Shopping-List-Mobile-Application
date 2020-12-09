import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
const Header = ({title}) => {
  return (
    <View >
      <Text style ={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  title : {
    color : '#fff',
    fontSize:32,
    fontWeight:'700',
    textAlign:'center',
    marginBottom:20
  }
})