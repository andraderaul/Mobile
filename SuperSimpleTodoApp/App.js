import React, { Component } from 'react'
import {createStore, combineReducers }from 'redux'
import  { Provider } from 'react-redux'
import { View } from 'react-native'
import ToDosScreen from './App/Containers/ToDosScreen'
import  todos from './App/Redux/ToDosRedux'

/*
*{
*   todos: []
*}
*/

const store = createStore(combineReducers({
  todos
}))


export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <ToDosScreen />
        </View>
      </Provider>
    )
  }
}
