import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const Link = (props) => {
  return(
      <TouchableOpacity onPress = {props.onPress} style={styles.container}>
          <Image
              style={styles.icon}
              source={props.icon}/>
          <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    tintColor: '#19B89B',
  },
  title: {
    color: '#19B89B',
    fontSize: 20,
    fontWeight: '200',
    paddingLeft: 5,
  }
})

export default Link
