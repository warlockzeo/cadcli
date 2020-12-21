import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormCad from "../../components/FormCad";
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
    dispatch({
      type: "Add",
      data: { nome: "ana", pai: "joao" },
    });

    dispatch({
      type: "Edit",
      data,
    });
  };
  useEffect(() => {
    setMarcacoes(reduxStateMarcacoes?.Marcacoes);
  }, [reduxStateMarcacoes]);

  switch (show) {
    case "add":
      return (
        <FormCad
          onSubmit={handleSubmit}
          onCancel={onCancel}
          edit={marcacaoToEdit}
        />
      );
    case "edit":
      return <FormCad onSubmit={handleSubmit} onCancel={onCancel} />;
    default:
      return (
        <ListMarcacoes Marcacoes={marcacoes} onAdd={onAdd} onEdit={onEdit} />
      );
  }
};

export default Marcacoes;
