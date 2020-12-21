import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormCad from "../../components/FormCad";
import ListProfissionais from "../../components/ListProfissionais";

const Profissionais = () => {
  const [profissionais, setProfissionais] = useState([]);
  const [show, setShow] = useState("list");
  const [profissionalToEdit, setProfissionalToEdit] = useState({});

  const reduxStateProfissionais = useSelector((state) => state);
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
    setProfissionalToEdit(data);
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
    setProfissionais(reduxStateProfissionais?.profissionais);
  }, [reduxStateProfissionais]);

  switch (show) {
    case "add":
      return (
        <FormCad
          onSubmit={handleSubmit}
          onCancel={onCancel}
          edit={profissionalToEdit}
        />
      );
    case "edit":
      return <FormCad onSubmit={handleSubmit} onCancel={onCancel} />;
    default:
      return (
        <ListProfissionais
          Profissionais={profissionais}
          onAdd={onAdd}
          onEdit={onEdit}
        />
      );
  }
};

export default Profissionais;
