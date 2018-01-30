import { takeLatest } from 'redux-saga/effects'
import { getToDos } from './ToDosSagas'
import createApi from './Services/Api'


const api = createApi()

export default function * rootSagas () {
  yield takeLatest('TODOS_REQUEST', getToDos, api)
}