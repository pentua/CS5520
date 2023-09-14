import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View>
      <Text>Welcome to {props.appName}</Text>
    </View>
  )
}

// use {}for disctuting props: {appName} will just get appName form props, rather than get props first then get appName
const HeaderDistructing = ({appName, another}) => {
    console.log(another);
    return (
      <View>
        <Text>Welcome to {another}</Text>
      </View>
    )
  }


export default Header