import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Styles/HeaderStyle'

export default class Header extends Component {
  render () {
    const { title, onRigthPress } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.placeholder} />
        <TouchableOpacity onPress={onRigthPress} style={styles.icon}>
          <Icon name={'ios-add'} size={34} color={'#000'} />
        </TouchableOpacity>
      </View>
    )
  }
}
