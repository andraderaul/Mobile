import React, { Component } from 'react'
import {createStore, combineReducers, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import ToDosScreen from './App/Containers/ToDosScreen'
import AddToDosScreen from './App/Containers/AddToDosScreen'
import todos from './App/Redux/ToDosRedux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './App/Sagas/Index'

/*
*{
*   todos: []
*}
*/

const AppNavigator = StackNavigator({
  ToDos: {
    screen: ToDosScreen
  },
  AddToDos: {
    screen: AddToDosScreen
  }
},{
  headerMode: 'none'
})

const navReducer = (state, action) => {
  const newState =
    AppNavigator.router.getStateForAction(
      action,
      state
    )
  return newState || state
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
  todos,
  nav: navReducer
}),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSagas)

class AppNavigation extends Component {
  render () {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

const AppWhitNavigationState = connect(mapStateToProps)(AppNavigation)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWhitNavigationState />
      </Provider>
    )
  }
}
