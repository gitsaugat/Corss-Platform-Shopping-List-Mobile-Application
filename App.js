import React from 'react';
import { View , Text ,Image, StyleSheet, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import axios from 'axios';
import { AppButton } from './components/Button';

const App = () => {
  const APIKEY = 'http://www.omdbapi.com/?apikey=c806c46f&s='
  const [myquery , setQuery] = React.useState("")
  const [data , setData]  = React.useState(null)
  const [loading , setLoading] = React.useState(true)
  function fetchApi(){
     fetch(APIKEY+myquery)
     .then(response => response.json())
     .then(data => {
       setData(data)
       setLoading(false)
     })
  }
 
  return (
    <View style = {styles.container}>
     <Header title = {'Movie Database'} />
     <TextInput 
      blurOnSubmit ={true}
      style = {styles.textInput}
      onChangeText = {text => setQuery(text)}
      value = {myquery}
      placeholder = {'Search a Movie .... '}
     />
     <AppButton  onPress = {fetchApi} title = {"Search"}/>
     
    {loading ? (
      <Text>Loading ..... </Text>
    ) : (
        <ScrollView style ={styles.scrollviews}>
        {data.Search.map((result)=> (
          <TouchableOpacity key = {result.imdbID}>
          <View style ={styles.scrollview}  >
            <Image source = {{uri : result.Poster}} style = {{
              width:'100%',
              height :300,
              borderTopRightRadius:10,
              borderTopLeftRadius:10
            }} />
            <Text style = {styles.heading}>{result.Title} </Text>
          </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
    )}
    
    </View>
  )
}


export default App

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'darkslateblue',
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    paddingTop : 70
  },
  title : {
    color : '#fff',
    fontSize:32,
    fontWeight:'700',
    textAlign:'center',
    marginBottom:20
  },
  textInput:{
    fontSize:20 , 
    fontWeight:'300',
    padding:20,
    width:'90%',
    backgroundColor:'#fff',
    borderRadius:8,
    marginBottom:15
  },
  scrollviews:{
    flex:1,
  },
  scrollview:{
    flex:1,
    width:'95%',
    marginLeft:10,
    marginBottom:40,
    borderWidth:1,
    borderColor : 'gray',
    height:368,
    borderRadius:10
  },
  heading :{
    color : '#fff',
    fontSize:18 , 
    fontWeight:'700',
    padding : 20 ,
    marginBottom:10,
    backgroundColor:'#445565',
      borderTopRightRadius:10,
              borderTopLeftRadius:10
  },

})