export default  function todos(state = [
  { task: 'Correr', completed: true },
  { task: 'Comer', completed: true },
  { task: 'Exercicio', completed: false },
  { task: 'Andar de bike', completed: true }
], action) {
  switch (action.type){
    case 'ADD_TODO':
      return [...state, { task: action.task, completed: false }]
    case 'TOGGLE_TODO':
      const newState = [...state]
      newState[action.index].completed = !newState[action.index].completed
      return newState
  }
  return state
}