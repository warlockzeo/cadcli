import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const FormCadPacientes = ({ onSubmit, onCancel, edit }) => {
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
            <Col sm="6">
              Nome:{''}
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome do paciente"
                className="form-control"
                required
              />
            </Col>
            <Col sm="1">
              Sexo:{' '}
              <select id="sexo" className="form-control" required>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </Col>
            <Col sm="2">
              Data Nasc:{' '}
              <input
                type="date"
                className="form-control"
                ng-change="paciente.idade = calculaIdade()"
              />
            </Col>

            <Col sm="3">
              Estado civil:{' '}
              <select id="estCivil" className="form-control">
                <option value="">Escolha um</option>
                <option value="Casado">Casado</option>
                <option value="Solteiro">Solteiro</option>
                <option value="Divorciado">Divorciado</option>
                <option value="Viúvo">Viúvo</option>
                <option value="Outros">Outros</option>
                <option value="Concubinato">Concubinato</option>
                <option value="Desquitado">Desquitado</option>
                <option value="Separado">Separado</option>
              </select>
            </Col>

            <Col sm="6">
              Pai:{' '}
              <input
                type="text"
                id="pai"
                className="form-control"
                placeholder="Nome do Pai completo"
              />
            </Col>
            <Col sm="6">
              Mãe:{' '}
              <input
                type="text"
                id="mae"
                className="form-control"
                placeholder="Nome da Mãe completo"
              />
            </Col>

            <Col sm="7">
              Endereço:{' '}
              <input
                type="text"
                id="endereco"
                placeholder="Rua"
                className="form-control"
              />
            </Col>
            <Col sm="1">
              nº: <input type="text" id="num" className="form-control" />
            </Col>
            <Col sm="4">
              Bairro:{' '}
              <input
                type="text"
                id="bairro"
                placeholder="Bairro"
                className="form-control"
              />
            </Col>

            <Col sm="7">
              Cidade:{' '}
              <input
                type="text"
                id="cidade"
                placeholder="Cidade"
                className="form-control"
              />
            </Col>
            <Col sm="1">
              UF:{' '}
              <select id="uf" className="form-control">
                <option value="">UF</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="RS">RS</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
              </select>
            </Col>
            <Col sm="4">
              Telefone:{' '}
              <input
                type="text"
                id="fone"
                placeholder="(00)00000-0000"
                className="form-control"
              />
            </Col>
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

export default FormCadPacientes;
