import { call, put } from 'redux-saga/effects'

export function * getToDos (api) {
  const response = yield call(api.getTodos)
  if (response.ok) {
    yield put({
      type: 'TODOS_SUCCESS',
      todos: response.data
    })
  } else {
    yield put({
      type: 'TODOS_FAILED'
    })
  }
}