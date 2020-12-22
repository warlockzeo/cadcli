import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";

const FormCadMarcacao = ({ onSubmit, onCancel, edit, data }) => {
  const reduxState = useSelector((state) => state);

  const pacientes = reduxState.pacientes;
  const profissionais = reduxState.profissionais;

  const onClickSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <Formik
        initialValues={{ paciente: "", profissional: "", date: "" }}
        //initialValues={data}
        onSubmit={(values, { setSubmitting }) => {
          onClickSubmit(values);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              type='text'
              list='pacientes'
              name='paciente'
              id='paciente'
              required
            />
            <datalist id='pacientes'>
              {pacientes.length
                ? pacientes.map((paciente, index) => {
                    return <option key={index} value={paciente.nome} />;
                  })
                : ""}
            </datalist>
            <ErrorMessage name='paciente' component='div' />
            <Field
              type='text'
              list='profissionais'
              name='profissional'
              id='profissional'
              required
            />
            <datalist id='profissionais'>
              {profissionais.length
                ? profissionais.map((profissional, index) => {
                    return <option key={index} value={profissional.nome} />;
                  })
                : ""}
            </datalist>
            <ErrorMessage name='profissional' component='div' />
            <Field type='date' name='date' required />
            <ErrorMessage name='date' component='div' />

            <Button
              className='form-control btn btn-success'
              type='submit'
              disabled={isSubmitting}>
              Concluir
            </Button>
            <Button className='form-control btn btn-danger' onClick={onCancel}>
              Cancelar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCadMarcacao;
