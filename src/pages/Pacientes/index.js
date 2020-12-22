import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormCadPacientes from "../../components/FormCadPacientes";
import ListPacientes from "../../components/ListPacientes";

const Pacientes = () => {
  const [users, setPacientes] = useState([]);
  const [show, setShow] = useState("list");
  const [pacienteToEdit, setPacienteToEdit] = useState({});

  const reduxStatePacientes = useSelector((state) => state);
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
    setPacienteToEdit(data);
  };

  const onView = () => {};

  const onCancel = () => setShow("list");

  const handleSubmit = (data) => {
    dispatch({
      type: "AddPaciente",
      data: { nome: "ana", pai: "joao" },
    });

    dispatch({
      type: "EditPaciente",
      data,
    });
  };
  useEffect(() => {
    setPacientes(reduxStatePacientes?.pacientes);
  }, [reduxStatePacientes]);

  switch (show) {
    case "add":
      return (
        <FormCadPacientes
          onSubmit={handleSubmit}
          onCancel={onCancel}
          edit={pacienteToEdit}
        />
      );
    case "edit":
      return <FormCadPacientes onSubmit={handleSubmit} onCancel={onCancel} />;
    default:
      return (
        <ListPacientes
          data={users}
          onAdd={onAdd}
          onEdit={onEdit}
          onView={onView}
        />
      );
  }
};

export default Pacientes;
