const initialData = [
  // { id: 1, nome: "mario", pai: "manuel" },
  // { id: 2, nome: "joao", pai: "marcos" },
];

const ReducerUsers = (state = { users: initialData }, action) => {
  switch (action.type) {
    case "List": {
      //ler do banco de dados
      return { users: action.data };
    }
    case "Add": {
      //Atualizar state e salvar no banco de dados
      return { users: [...state.users, action.data] };
    }
    case "Edit": {
      //Atualizar state e salvar no banco de dados
      return { users: [...state.users, action.data] };
    }
    default:
      return state;
  }
};

export default ReducerUsers;
