import React, {useState} from 'react';
import {  Text, View , Button, TextInput } from 'react-native';

export default function App() {
  // const [outputText, setOutputText] = useState('First text to appear on screen') //this is what state is first set as aka state: {} 
  return (
    <View style={{padding:30}}> 

      <View style={{flexDirection:'row', justifyContent:'space'}}>
        <TextInput 
          placeholder='Course Goal'
          style={{borderColor:'f0f', borderWidth:1, margin:10}} 
          />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   Wrapper = {
//     padding:30
//   }

// });