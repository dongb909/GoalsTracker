import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput, FlatList } from 'react-native';


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
    <View style={styles.wrapper}>  

      <View style={styles.container}>
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