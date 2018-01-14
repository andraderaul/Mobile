import React from 'react'
import { View, TextInput, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FullButton from './FullButton'

import styles from './Styles/AddToDoModalStyle'

export default function AddToDoModal () {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add ToDo</Text>
        <Icon name={'ios-close'} size={50} color={'#000'} />
      </View>
    </View>
  )
}
