import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import FormCadProfissionais from '../../components/FormCadProfissionais';
import ListTable from '../../components/ListTable';

const Profissionais = () => {
  const [profissionais, setProfissionais] = useState([]);
  const [show, setShow] = useState('list');
  const [profissionalToEdit, setProfissionalToEdit] = useState({});

  const dispatch = useDispatch();

  const reduxStateProfissionais = useSelector(
    (state) => state?.profissionais.dados
  );

  const onAdd = () => {
    setShow('add');
  };

  const onEdit = (data) => {
    setShow('edit');
    setProfissionalToEdit(data);
    console.log(data);
  };

  const onView = (id) => {
    console.log(id);
  };

  const onSearch = (data) => {};

  const onCancel = () => {
    setProfissionalToEdit({});
    setShow('list');
  };

  const handleSubmit = (data) => {
    dispatch({
      type: 'ADD_PROFISSIONAL',
      data
    });
    setShow('list');
  };

  useEffect(() => {
    setProfissionais(reduxStateProfissionais);
  }, [reduxStateProfissionais]);

  const renderListTable = (
    <ListTable
      data={profissionais}
      onAdd={onAdd}
      onEdit={onEdit}
      onView={onView}
      onSearch={onSearch}
    >
      Profissionais
    </ListTable>
  );

  const renderNoProfissionais = (
    <Container>
      <h1>Nenhum Profissional cadastrado</h1>
      <Button
        size="sm"
        variant="success"
        className="buttonMargim"
        onClick={() => onAdd()}
      >
        Novo Profissional
      </Button>
    </Container>
  );

  switch (show) {
    case 'add':
      return (
        <FormCadProfissionais onSubmit={handleSubmit} onCancel={onCancel} />
      );
    case 'edit':
      return (
        <FormCadProfissionais
          onSubmit={handleSubmit}
          onCancel={onCancel}
          edit={profissionalToEdit}
        />
      );
    default:
      return profissionais.length > 0 ? renderListTable : renderNoProfissionais;
  }
};

export default Profissionais;
