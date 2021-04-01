const initialState = {
  dados: [
    {
      id: 1,
      nome: 'mario',
      especialidade: 'Cardiologista',
      fone: '(81) 3733-1171'
    },
    { id: 2, nome: 'joao', especialidade: 'Pediatra', fone: '(81) 9982-3437' }
  ]
};

export default function profissionais(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_ROFISSIONAIS': {
      return { ...state, dados: [...action.data] };
    }
    case 'ADD_PROFISSIONAL': {
      return { ...state, dados: [...state.dados, action.data] };
    }
    default:
      return state;
  }
}
