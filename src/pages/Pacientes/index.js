import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormCadPacientes from '../../components/FormCadPacientes';
import ListTable from '../../components/ListTable';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [show, setShow] = useState('list');
  const [pacienteToEdit, setPacienteToEdit] = useState({});

  const reduxStatePacientes = useSelector((state) => state?.pacientes);

  const onAdd = () => {
    setShow('add');
  };

  const onEdit = (data) => {
    setShow('edit');
    setPacienteToEdit(data);
  };

  const onView = () => {};

  const onSearch = () => {};

  const onCancel = () => setShow('list');

  const handleSubmit = (data) => {};

  useEffect(() => {
    setPacientes([reduxStatePacientes]);
  }, [reduxStatePacientes]);

  const renderListTable = (
    <ListTable
      data={pacientes}
      onAdd={onAdd}
      onEdit={onEdit}
      onView={onView}
      onSearch={onSearch}
    >
      Pacientes
    </ListTable>
  );

  const renderNoPacientes = () => {
    <Container>
      <h1>Nenhum Paciente cadastrado</h1>
      <Button
        size="sm"
        variant="success"
        className="buttonMargim"
        onClick={() => onAdd()}
      >
        Novo Paciente
      </Button>
    </Container>;
  };

  switch (show) {
    case 'add':
      return <FormCadPacientes onSubmit={handleSubmit} onCancel={onCancel} />;
    case 'edit':
      return (
        <FormCadPacientes
          onSubmit={handleSubmit}
          onCancel={onCancel}
          edit={pacienteToEdit}
        />
      );
    default:
      return pacientes.length > 0 ? renderListTable : renderNoPacientes;
  }
};

export default Pacientes;
