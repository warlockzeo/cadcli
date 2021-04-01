import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const FormCadProfissionais = ({ onSubmit, onCancel, edit }) => {
  const [data, setData] = useState({});
  const onClickSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  const onChange = (newData) => {
    const target = newData.target;
    const { name, value } = target;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  return (
    <>
      <form name="cadastroForm" id="cadastroForm" method="post">
        <Container fluid>
          <Row>
            <Col md="6">
              Nome:{''}
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome do profissional"
                className="form-control"
                required
                onChange={onChange}
              />
            </Col>
            <Col md="6">
              Especialidade:{' '}
              <input
                type="text"
                name="especialidade"
                id="especialidade"
                placeholder="Especialidade do profissional"
                className="form-control"
                required
                onChange={onChange}
              />
            </Col>
            <Col md="4">
              Telefone:{' '}
              <input
                type="text"
                name="fone"
                id="fone"
                placeholder="(00)00000-0000"
                className="form-control"
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="form-control btn btn-success"
                type="submit"
                onClick={(evt) => onClickSubmit(evt)}
              >
                Concluir
              </Button>
            </Col>
            <Col>
              <Button
                className="form-control btn btn-danger"
                onClick={onCancel}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
};

export default FormCadProfissionais;
