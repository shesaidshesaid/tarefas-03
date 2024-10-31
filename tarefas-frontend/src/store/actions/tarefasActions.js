// Tipos de ação
export const FETCH_TAREFAS_REQUEST = 'FETCH_TAREFAS_REQUEST';
export const FETCH_TAREFAS_SUCCESS = 'FETCH_TAREFAS_SUCCESS';
export const FETCH_TAREFAS_FAILURE = 'FETCH_TAREFAS_FAILURE';

export const ADD_TAREFA_REQUEST = 'ADD_TAREFA_REQUEST';
export const ADD_TAREFA_SUCCESS = 'ADD_TAREFA_SUCCESS';
export const ADD_TAREFA_FAILURE = 'ADD_TAREFA_FAILURE';

export const DELETE_TAREFA_REQUEST = 'DELETE_TAREFA_REQUEST';
export const DELETE_TAREFA_SUCCESS = 'DELETE_TAREFA_SUCCESS';
export const DELETE_TAREFA_FAILURE = 'DELETE_TAREFA_FAILURE';

export const UPDATE_TAREFA_REQUEST = 'UPDATE_TAREFA_REQUEST';
export const UPDATE_TAREFA_SUCCESS = 'UPDATE_TAREFA_SUCCESS';
export const UPDATE_TAREFA_FAILURE = 'UPDATE_TAREFA_FAILURE';

// Ações para buscar tarefas
export const fetchTarefas = () => ({
  type: FETCH_TAREFAS_REQUEST,
});

// Ações para adicionar tarefa
export const addTarefa = (tarefaData) => ({
  type: ADD_TAREFA_REQUEST,
  payload: tarefaData,
});

// Ações para deletar tarefa
export const deleteTarefa = (id) => ({
  type: DELETE_TAREFA_REQUEST,
  payload: id,
});

// Ações para atualizar tarefa
export const updateTarefa = (tarefaData) => ({
  type: UPDATE_TAREFA_REQUEST,
  payload: tarefaData,
});

// Demais ações permanecem iguais...
