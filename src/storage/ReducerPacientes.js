const ReducerPacientes = (
  state = {
    pacientes: [],
    profissionais: [],
    marcacoes: [],
  },
  action,
) => {
  switch (action.type) {
    case "ListPacientes": {
      //ler do banco de dados
      return {
        ...state,
        pacientes: action.data,
        // profissionais: [...state.profissionais],
        // marcacoes: [...state.marcacoes],
      };
    }
    case "AddPaciente": {
      //Atualizar state e salvar no banco de dados
      return { pacientes: [...state.pacientes, action.data] };
    }
    case "EditPaciente": {
      //Atualizar state e salvar no banco de dados
      return { pacientes: [...state.pacientes, action.data] };
    }
    case "ListProfissionais": {
      //ler do banco de dados
      return {
        ...state,
        profissionais: action.data,
      };
    }
    case "AddProfissional": {
      //Atualizar state e salvar no banco de dados
      return { profissionais: [...state.profissionais, action.data] };
    }
    case "EditProfissional": {
      //Atualizar state e salvar no banco de dados
      return { profissionais: [...state.profissionais, action.data] };
    }
    case "ListMarcacoes": {
      //ler do banco de dados
      return { ...state, marcacoes: action.data };
    }
    case "AddMarcacao": {
      //Atualizar state e salvar no banco de dados
      return { profissionais: [...state.profissionais, action.data] };
    }
    case "EditMarcacao": {
      //Atualizar state e salvar no banco de dados
      return { profissionais: [...state.profissionais, action.data] };
    }
    default:
      return state;
  }
};

export default ReducerPacientes;
