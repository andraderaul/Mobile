import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Styles/FullButtonStyle'

const FullButton = ({ text, icon }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentContainer}>
        {icon}
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

FullButton.defaultProps = {
  icon: <Icon name={'ios-checkmark'} size={50} color={'#fff'} />
}

export default FullButton
