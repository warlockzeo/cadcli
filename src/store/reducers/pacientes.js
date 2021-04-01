const initialState = {
  dados: [
    { id: 1, nome: 'mario', status: 'x' },
    { id: 2, nome: 'joao', status: 'y' },
    { id: 3, nome: 'marcos', status: 'y' }
  ]
};

export default function pacientes(state = initialState, action) {
  switch (action.type) {
    case 'LOADPACIENTES': {
      return {
        ...state,
        dados: [...action.data]
      };
    }
    case 'ADD_PACIENTE': {
      return { ...state, dados: [...state.dados, action.data] };
    }
    default:
      return state;
  }
}
