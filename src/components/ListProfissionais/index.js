import React from "react";
import { Table, Button } from "react-bootstrap";

const ListProfissionais = ({ users, onAdd, onEdit }) => {
  if (Array.isArray(users) && users?.length > 0) {
    const keyFields = Object.keys(users[0]).filter(
      (field) => field !== "id" && field !== "nivel",
    ); //recupera nome das propriedades

    const thead = keyFields.map((campo, index) => (
      <th key={index}>{campo.toUpperCase()}</th>
    ));

    const tbody = users.map((user, index) => {
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
            <Button
              size='sm'
              variant='primary'
              className='buttonMargim'
              onClick={() => onEdit(user.id)}>
              Editar
            </Button>
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

export default ListProfissionais;
