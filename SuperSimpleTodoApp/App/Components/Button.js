import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Styles/ButtonStyle'

export default class Button extends Component {
  static defaultProps = {
    color: '#222'
  }
  render () {
    const {text, icon, color, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={[ styles.container, {backgroundColor: color} ]} >
        {icon ? (
          <Icon size={35} style={styles.icon} name={icon} />
        ) : null}
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}
