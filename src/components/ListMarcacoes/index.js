import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ListMarcacoes = ({ data, onAdd, onEdit }) => {
  if (Array.isArray(data) && data?.length > 0) {
    const keyFields = Object.keys(data[0]).filter(
      (field) => field !== 'id' && field !== 'nivel'
    ); //recupera nome das propriedades

    const thead = keyFields.map((campo, index) => (
      <th key={index}>{campo.toUpperCase()}</th>
    ));

    const tbody = data.map((marcacao, index) => {
      const list = keyFields.map((campo, index) => {
        return (
          <td className="text-left" key={index}>
            {marcacao[campo]}
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
              onClick={() => onEdit(marcacao)}
            >
              Remarcar
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <>
        <h1>Marcações</h1>
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
                  Nova marcação
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
      <h1>Nenhuma marcação cadastrada</h1>
      <Button
        size="sm"
        variant="success"
        className="buttonMargim"
        onClick={() => onAdd()}
      >
        Nova marcação
      </Button>
    </>
  );
};

export default ListMarcacoes;
