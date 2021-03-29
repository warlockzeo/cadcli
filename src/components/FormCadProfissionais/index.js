import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const FormCadProfissionais = ({ onSubmit, onCancel, edit }) => {
  const onClickSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <form
        name="cadastroForm"
        id="cadastroForm"
        method="post"
        onSubmit={onClickSubmit}
      >
        <Container fluid>
          <Row>
            <Col md="6">
              Nome:{''}
              <input
                type="text"
                id="nome"
                placeholder="Nome do profissional"
                className="form-control"
                required
              />
            </Col>
            <Col md="6">
              Especialidade:{' '}
              <input
                type="text"
                id="especialidade"
                placeholder="Especialidade do profissional"
                className="form-control"
                required
              />
            </Col>
            <Col md="4">
              Telefone:{' '}
              <input
                type="text"
                id="fone"
                placeholder="(00)00000-0000"
                className="form-control"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="form-control btn btn-success" type="submit">
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
