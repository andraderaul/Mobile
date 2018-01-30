import React, { Component } from 'react'
import Header from '../Components/Header'
import { View, FlatList, TextInput } from 'react-native'
import { connect } from 'react-redux'


// Styles
import styles from './Styles/ToDosScreenStyle'
import ToDoItem from '../Components/ToDoItem'
import Button from '../Components/Button'

class AddToDosScreen extends Component {
  render () {
    const { todos, toggleTodo } = this.props
    return (
      <View style={styles.mainContainer}>
        <Header title={'Add a Todo'} />
        <TextInput placeholder={'Workout... '} />
        <Button icon={'ios-add'} text={'Add'} />
        <Button icone={'ios-close'} text={'Cancel'} />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>({})

export default connect(mapStateToProps, mapDispatchToProps)(AddToDosScreen)