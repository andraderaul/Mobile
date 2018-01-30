import React, { Component } from 'react'
import Header from '../Components/Header'
import { View, FlatList} from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/ToDosScreenStyle'
import ToDoItem from '../Components/ToDoItem'

class ToDosScreen extends Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render () {
    const { todos, toggleTodo } = this.props
    return (
      <View style={styles.mainContainer}>
        <Header title={'ToDos'} onRigthPress={() => { this.props.navigation.navigate('AddToDos') }} />
        <FlatList
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <ToDoItem
              onPress={() => toggleTodo(index)}
              task={item.task}
              completed={item.completed} />
          )}
          data={todos} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (index) =>
      dispatch({ type: 'TOGGLE_TODO', index }),
    getTodos: () =>
      dispatch({ type: 'TODOS_REQUEST' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDosScreen)