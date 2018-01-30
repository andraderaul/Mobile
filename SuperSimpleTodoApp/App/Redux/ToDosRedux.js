export default function todos(state = [], action) {
  switch (action.type){
    case 'ADD_TODO':
      return [...state, { task: action.task, completed: false }]
    case 'TOGGLE_TODO':
      const newState = [...state]
      newState[action.index].completed = !newState[action.index].completed
      return newState
    case 'TODOS_SUCCESS':
      return action.todos
    //case 'TODOS_FAILED':
  }
  return state
}