const initialData = [
  // { id: 1, nome: "mario", pai: "manuel" },
  // { id: 2, nome: "joao", pai: "marcos" },
];

const ReducerMarcacoes = (state = { marcacoes: initialData }, action) => {
  switch (action.type) {
    case "List": {
      //ler do banco de dados
      return { marcacoes: action.data };
    }
    case "Add": {
      //Atualizar state e salvar no banco de dados
      return { marcacoes: [...state.marcacoes, action.data] };
    }
    case "Edit": {
      //Atualizar state e salvar no banco de dados
      return { marcacoes: [...state.marcacoes, action.data] };
    }
    default:
      return state;
  }
};

export default ReducerMarcacoes;
