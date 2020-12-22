import React from "react";
import { Col, Button } from "react-bootstrap";

const FormCadProfissionais = ({ onSubmit, onCancel, edit }) => {
  const onClickSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <form
        name='cadastroForm'
        id='cadastroForm'
        method='post'
        onSubmit={onClickSubmit}>
        <div className='form-group col-sm-6'>
          Nome:{" "}
          <input
            type='text'
            id='nome'
            placeholder='Nome do profissional'
            className='form-control'
            required
          />
        </div>
        <div className='form-group col-sm-6'>
          Especialidade:{" "}
          <input
            type='text'
            id='especialidade'
            placeholder='Especialidade do profissional'
            className='form-control'
            required
          />
        </div>
        <div className='form-group col-sm-4'>
          Telefone:{" "}
          <input
            type='text'
            id='fone'
            placeholder='(00)00000-0000'
            className='form-control'
          />
        </div>

        <Col md={12}>
          <Col md={6}>
            <Button className='form-control btn btn-success' type='submit'>
              Concluir
            </Button>
          </Col>
          <Col md={6}>
            <Button className='form-control btn btn-danger' onClick={onCancel}>
              Cancelar
            </Button>
          </Col>
        </Col>
      </form>
    </>
  );
};

export default FormCadProfissionais;
