import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import HeaderDistructing from './components/Header';
import { useState } from 'react';

export default function App() {
  const name="My Aswesome App 001"
  // Distructing from useState
  //use normal var CANT trigger rerender
  const [txt, setTxt] = useState("Type sth") 
  function changeTextHandler(input) {
    console.log(input);
    setTxt(input)
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* use header component */}
      {/*V== self close*/}
      
      <Header />
      <HeaderDistructing appName="testApp" another="test"/>
      <StatusBar style="auto" />
      <TextInput style={styles.textInput} onChangeText={changeTextHandler} value={txt}/>
      <Text>{txt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: "blue",
    // backgroundColor: 'blue',
  }
});
