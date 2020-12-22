const initialData = [
  // { id: 1, nome: "mario", pai: "manuel" },
  // { id: 2, nome: "joao", pai: "marcos" },
];

const ReducerProfissionais = (
  state = { profissionais: initialData },
  action,
) => {
  switch (action.type) {
    case "List": {
      //ler do banco de dados
      return { profissionais: action.data };
    }
    case "Add": {
      //Atualizar state e salvar no banco de dados
      return { profissionais: [...state.profissionais, action.data] };
    }
    case "Edit": {
      //Atualizar state e salvar no banco de dados
      return { profissionais: [...state.profissionais, action.data] };
    }
    default:
      return state;
  }
};

export default ReducerProfissionais;
