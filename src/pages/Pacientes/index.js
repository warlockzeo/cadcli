import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormCadPacientes from "../../components/FormCadPacientes";
import ListPacientes from "../../components/ListPacientes";

const Pacientes = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState("list");
  const [userToEdit, setUserToEdit] = useState({});

  const reduxStateUsers = useSelector((state) => state);
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
    setUserToEdit(data);
  };

  const onView = () => {};

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
    setUsers(reduxStateUsers?.users);
  }, [reduxStateUsers]);

  switch (show) {
    case "add":
      return (
        <FormCadPacientes
          onSubmit={handleSubmit}
          onCancel={onCancel}
          edit={userToEdit}
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
