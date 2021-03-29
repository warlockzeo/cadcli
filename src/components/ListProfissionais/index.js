import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ListProfissionais = ({ data, onAdd, onEdit }) => {
  if (Array.isArray(data) && data?.length > 0) {
    const keyFields = Object.keys(data[0]).filter(
      (field) => field !== 'id' && field !== 'nivel'
    ); //recupera nome das propriedades

    const thead = keyFields.map((campo, index) => (
      <th key={index}>{campo.toUpperCase()}</th>
    ));

    const tbody = data.map((profissional, index) => {
      const list = keyFields.map((campo, index) => {
        return (
          <td className="text-left" key={index}>
            {profissional[campo]}
          </td>
        );
      });
      return (
        <tr key={index}>
          {list}
          <td className="text-right">
            <Button
              size="sm"
              variant="primary"
              className="buttonMargim"
              onClick={() => onEdit(profissional.id)}
            >
              Editar
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <>
        <h1>Profissionais</h1>
        <Table hover responsive>
          <thead>
            <tr>
              {thead}
              <th colSpan={2} className="text-right">
                <Button
                  size="sm"
                  variant="success"
                  className="buttonMargim"
                  onClick={() => onAdd()}
                >
                  Novo Profissional
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
      <h1>Nenhum Profissional cadastrado</h1>
      <Button
        size="sm"
        variant="success"
        className="buttonMargim"
        onClick={() => onAdd()}
      >
        Novo profissional
      </Button>
    </>
  );
};

export default ListProfissionais;
