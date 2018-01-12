import React from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native'

const Reminders = (props) => {
  return(
    <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={props.icon}
          />
        </View>
        <Text>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    tintColor: '#8F8E94',
  },
  iconContainer: {
      paddingHorizontal: 10,
      paddingBottom:10,

    //backgroundColor: 'green'
  },
  title: {
    color: '#8F8E94',
    fontSize: 20,
    fontWeight: '200',
  }
})

export default Reminders
