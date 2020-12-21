import React from "react";
import { Table, Button } from "react-bootstrap";

const ListPacientes = ({ data, onAdd, onEdit, onView }) => {
  if (Array.isArray(data) && data?.length > 0) {
    const keyFields = Object.keys(data[0]).filter(
      (field) => field !== "id" && field !== "nivel",
    ); //recupera nome das propriedades

    const thead = keyFields.map((campo, index) => (
      <th key={index}>{campo.toUpperCase()}</th>
    ));

    const tbody = data.map((user, index) => {
      const list = keyFields.map((campo, index) => {
        return (
          <td className='text-left' key={index}>
            {user[campo]}
          </td>
        );
      });

      return (
        <tr
          key={index}
          className={
            user.nivel === "0"
              ? "table-danger"
              : user.nivel === "10"
              ? "table-success"
              : ""
          }>
          {list}
          <td className='text-right'>
            {onEdit ? (
              <Button
                size='sm'
                variant='primary'
                className='buttonMargim'
                onClick={() => onEdit(user.id)}>
                Editar
              </Button>
            ) : (
              ""
            )}
            {onView ? (
              <Button
                size='sm'
                variant='secondary'
                className='buttonMargim'
                onClick={() => onEdit(user.id)}>
                Histórico
              </Button>
            ) : (
              ""
            )}
          </td>
        </tr>
      );
    });

    return (
      <>
        <h1>Usuários</h1>
        <Table hover responsive>
          <thead>
            <tr>
              {thead}
              <th colSpan={2} className='text-right'>
                <Button
                  size='sm'
                  variant='success'
                  className='buttonMargim'
                  onClick={() => onAdd()}>
                  Novo Usuário
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </Table>
      </>
    );
  }

  return (
    <>
      <h1>Nenhum usuário cadastrado</h1>
      <Button
        size='sm'
        variant='success'
        className='buttonMargim'
        onClick={() => onAdd()}>
        Novo Usuário
      </Button>
    </>
  );
};

export default ListPacientes;
