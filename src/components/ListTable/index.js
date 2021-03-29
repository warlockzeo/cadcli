import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ListTable = ({ children, data, onAdd, onEdit, onView }) => {
  if (data?.length > 0) {
    const keyFields = Object.keys(data[0]).filter((field) => field !== 'id'); //recupera nome dos campos

    const thead = keyFields.map((campo, index) => (
      <th key={index}>{campo.toUpperCase()}</th>
    ));

    const tbody = data.map((registro, index) => {
      const list = keyFields.map((campo, index) => {
        return (
          <td className="text-left" key={index}>
            {registro[campo]}
          </td>
        );
      });

      return (
        <tr key={index}>
          {list}
          <td className="text-right">
            {onEdit ? (
              <Button
                size="sm"
                variant="primary"
                className="buttonMargim"
                onClick={() => onEdit(registro)}
              >
                Editar
              </Button>
            ) : (
              ''
            )}
            {onView ? (
              <Button
                size="sm"
                variant="secondary"
                className="buttonMargim"
                onClick={() => onEdit(registro.id)}
              >
                Histórico
              </Button>
            ) : (
              ''
            )}
          </td>
        </tr>
      );
    });

    return (
      <>
        <h1>{children}</h1>
        <Table hover responsive>
          <thead>
            <tr>
              {thead}
              <th colSpan={2} className="text-right">
                <Button
                  size="sm"
                  variant="success"
                  className="buttonMargim"
                  onClick={onAdd}
                >
                  +
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </Table>
      </>
    );
  }
};

export default ListTable;
