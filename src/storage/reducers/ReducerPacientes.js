const initialState = { pacientes: [] };

const ReducerPacientes = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD': {
      //ler do banco de dados
      return {
        ...state,
        pacientes: action.data
      };
    }
    case 'ADD': {
      //Atualizar state e salvar no banco de dados
      return { pacientes: [...state.pacientes, action.data] };
    }
    case 'EDIT': {
      //Atualizar state e salvar no banco de dados
      return { pacientes: [...state.pacientes, action.data] };
    }
    case 'DELETE': {
      //Deletar um paciente
      return { ...state.pacientes };
    }
    default:
      return state;
  }
};

export default ReducerPacientes;
