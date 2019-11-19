import React, {useState} from 'react';
import { StyleSheet, Image, CheckBox, Text, View , Button, TextInput, FlatList } from 'react-native';
const faker = require('faker');

export default function App() {
  const [submittedText, setText] = useState('');
  const [goals, setGoals] = useState([]);

  const  inputHandler=(enteredText) => {
    setText(enteredText); 
  }
  
  const buttonHandler = () => {
    setGoals(currentgoalsAutomatic => [...currentgoalsAutomatic, {key:Math.random().toString(), value:submittedText}])
  
    // setGoals([]) //reset
    // console.log(goals)
  }
  
  return (
    <View>
      <Image style={{width: 150, height: 150, margin:50}} source={{uri:'https://www.trickscity.com/wp-content/uploads/2018/02/cute-girl-profile-pics.jpg'}} />
      <Text>User:  </Text>
      <View style={styles.wrapper}>  
        

        <View style={styles.container}>
          <CheckBox />
          <TextInput 
            placeholder='Course Goal'
            style={styles.text} 
            onChangeText={inputHandler} value={submittedText}
            />  
          <Button title="ADD" onPress={buttonHandler}/>
        </View>
        <FlatList data={goals} renderItem={itemData => (  <View style={styles.eachitem}><Text>{itemData.item.value}</Text></View>)}>
        </FlatList>
      </View> 
    </View>
  ); 
  
}

const styles = StyleSheet.create({
  wrapper : {
    padding:30
  },
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text: {
    width:'80%',
    borderColor:'black', 
    borderWidth:1, 
    marginVertical:10
  },
  eachitem: {
    borderColor: 'black',
    borderWidth: 1,
    margin:10
  }


});