import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormCadMarcacao from "../../components/FormCadMarcacao";
import ListMarcacoes from "../../components/ListMarcacoes";

const Marcacoes = () => {
  const [marcacoes, setMarcacoes] = useState([]);
  const [show, setShow] = useState("list");
  const [marcacaoToEdit, setMarcacaoToEdit] = useState({});

  const reduxStateMarcacoes = useSelector((state) => state);
  const dispatch = useDispatch();

  const onAdd = () => {
    setShow("add");
    dispatch({
      type: "Add",
      data: { id: 3, nome: "ana", pai: "joao" },
    });
  };

  const onEdit = (data) => {
    setShow("edit");
    setMarcacaoToEdit(data);
  };

  const onCancel = () => setShow("list");

  const handleSubmit = (data) => {
    console.log(data);
    setShow("list");
  };

  useEffect(() => {
    setMarcacoes(reduxStateMarcacoes?.marcacoes);
  }, [reduxStateMarcacoes]);

  switch (show) {
    case "add":
      return (
        <FormCadMarcacao
          onSubmit={handleSubmit}
          onCancel={onCancel}
          edit={marcacaoToEdit}
        />
      );
    case "edit":
      return (
        <FormCadMarcacao
          onSubmit={handleSubmit}
          onCancel={onCancel}
          data={marcacaoToEdit}
        />
      );
    default:
      return <ListMarcacoes data={marcacoes} onAdd={onAdd} onEdit={onEdit} />;
  }
};

export default Marcacoes;
