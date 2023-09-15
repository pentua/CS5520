import { TextInput, View , StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react';

const Input = (props) => {
  const [txt, setTxt] = useState("Type sth") 
  function changeTextHandler(input) {
    console.log(input);
    setTxt(input)
  }
  return (
    <View>
      <TextInput style={styles.input} onChangeText={props.callbackF} value={props.txtValue}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    width: 200,
  },
});