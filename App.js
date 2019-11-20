import React, {useState} from 'react';
import { StyleSheet, Image, CheckBox, Modal, Text, View , Button, TextInput, FlatList } from 'react-native';
const faker = require('faker');

export default function App() {
  const [submittedText, setText] = useState('');
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModal] = useState(false);

  const  inputHandler=(enteredText) => {
    setText(enteredText); 
  }
  
  const buttonHandler = () => {
    setGoals(currentgoalsAutomatic => [...currentgoalsAutomatic, {key:Math.random().toString(), value:submittedText}])
    setText('')
    // setGoals([]) //reset
    // console.log(goals)
  }
  const checkHandler = () => {
    setModal(visible => !modalVisible)
  }
  const closeModal = () => {
    setModal(visible => !modalVisible)
  }
  const images=['https://i.pinimg.com/564x/b8/5b/d5/b85bd54002500c38c36ac0e8c8f84c58.jpg', 'https://i.pinimg.com/564x/13/19/ee/1319ee591944524ec3ff9c6aa9362c72.jpg', 'https://i.pinimg.com/564x/3a/0e/e4/3a0ee4618ec692b65c4063801583af69.jpg', 'https://i.pinimg.com/564x/07/7f/0e/077f0edbfa1106d1da68928ee57ea097.jpg', 'https://i.pinimg.com/564x/b9/14/4c/b9144c241cb5dd9c7b4b3a7089ba4b7f.jpg']
  
  const randomImage=  () => {
    var num = 0 + Math.floor(Math.random() * Math.floor(4-0))
    //  var num = Math.random() * 4;
    // return images[num.toPrecision(1)]
    return images[num]
}



  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View>
          <Button title='Close' onPress= {() => closeModal()}/>
          <Image style={{width: 300, height: 500, margin:10}} source={{uri: randomImage()}} />
        </View>
      </Modal>
      <View style={styles.header}>
        <Image style={{width: 150, height: 150, margin:10}} source={{uri:'https://www.trickscity.com/wp-content/uploads/2018/02/cute-girl-profile-pics.jpg'}} />
      </View>
      <View style={styles.bottom}>
      <View style={styles.center}>
        <Text style={styles.user}>YOUR TO DO LIST FOR THE DAY </Text>
      </View>
      <View style={styles.wrapper}>  
        <View style={styles.container}>
          
          <TextInput 
            placeholder='Course Goal'
            style={styles.text} 
            onChangeText={inputHandler} value={submittedText}
            />  
          <Button title="ADD" onPress={buttonHandler}/>
        </View>
        <FlatList data={goals} renderItem={itemData => (  
          <View>
          <CheckBox value={modalVisible} onValueChange={checkHandler}/>
          <View style={styles.eachitem}>
              <Text>{itemData.item.value}</Text></View></View>)}>
        </FlatList>
      </View> 
      </View>
      
    </View>
  ); 
  
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E4A190'
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  user: {
    fontWeight: 'bold',
    fontSize: 15
  },
  bottom: {
    backgroundColor: '#FFDCCD'
  },
  wrapper : {
    padding:5
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