import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header, HeaderDistructing } from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const name="My Aswesome App 001"
  // Distructing from useState
  //use normal var CANT trigger rerender
  const [appTxt, appSetTxt] = useState("Type sth")
  function callbackSetTxt(newTxt) {
    appSetTxt(newTxt)
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* use header component */}
      {/*V== self close*/}
      
      <Header appName="testApp"/>
      <HeaderDistructing appName="testApp" another="test"/>
      <StatusBar style="auto" />
      <Input callbackF={callbackSetTxt} txtValue={appTxt}/>
      <Text>{appTxt}</Text>
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
    backgroundColor: 'yellow',
  }
});


// <------- callback function------ (passed to child by props )
//App                         Child component
// ------- props ------> (could be var or function)