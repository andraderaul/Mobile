import * as React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, TouchableOpacity, View } from 'react-native'
import _ from 'lodash'

import styles from './Styles/ToDoItemStyle'

export default class ToDoItem extends React.Component {
  render () {
    const { task, completed, onPress } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.check}>
          <View style={styles.circle}>
            {completed ? <Icon name={'ios-checkmark'} size={45} color={'#000'} /> : null}
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>{_.truncate(task, {
          'length': 45,
          'separator': /,? +/
        })}</Text>
      </View>
    )
  }
}
