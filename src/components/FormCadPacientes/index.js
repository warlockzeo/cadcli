import React from "react";
import { Col, Button } from "react-bootstrap";

const FormCadPacientes = ({ onSubmit, onCancel, edit }) => {
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
        <div className='form-group col-sm-12'>
          Nome:{" "}
          <input
            type='text'
            id='nome'
            placeholder='Nome do paciente'
            className='form-control'
            required
          />
        </div>
        <div className='form-group col-sm-1'>
          Sexo:{" "}
          <select id='sexo' className='form-control' required>
            <option value='M'>M</option>
            <option value='F'>F</option>
          </select>
        </div>
        <div className='form-group col-sm-1'>
          Idade:{" "}
          <input
            type='text'
            id='idade'
            className='form-control'
            data-mask='000'
          />
        </div>
        <div className='form-group col-sm-3'>
          Data Nasc:{" "}
          <input
            type='date'
            className='form-control'
            ng-change='paciente.idade = calculaIdade()'
          />
        </div>

        <div className='form-group col-sm-2'>
          Cor:{" "}
          <select id='cor' className='form-control'>
            <option value=''>Escolha um</option>
            <option value='Indígena'>Indígena</option>
            <option value='Branca'>Branca</option>
            <option value='Negra'>Negra</option>
            <option value='Amarela'>Amarelo</option>
            <option value='Parda'>Parda</option>
            <option value='Não informada'>Não informada</option>
          </select>
        </div>
        <div className='form-group col-sm-2'>
          Estado civil:{" "}
          <select id='estCivil' className='form-control'>
            <option value=''>Escolha um</option>
            <option value='Casado'>Casado</option>
            <option value='Solteiro'>Solteiro</option>
            <option value='Divorciado'>Divorciado</option>
            <option value='Viúvo'>Viúvo</option>
            <option value='Outros'>Outros</option>
            <option value='Concubinato'>Concubinato</option>
            <option value='Desquitado'>Desquitado</option>
            <option value='Separado'>Separado</option>
          </select>
        </div>
        <div className='form-group col-sm-4'>
          Profissão:{" "}
          <input
            type='text'
            id='profissao'
            placeholder='Profissão'
            className='form-control'
          />
        </div>
        <div className='form-group col-sm-2'>
          CPF:{" "}
          <input
            type='text'
            maxLength='14'
            name='cpf'
            id='cpf'
            className='form-control'
            data-mask='000.000.000-00'
            placeholder='Nº do CPF'
          />
        </div>
        <div className='form-group col-sm-2'>
          SUS:{" "}
          <input
            type='text'
            id='sus'
            placeholder='Cartão do SUS'
            className='form-control'
            data-mask='000000000000000'
          />
        </div>

        <div className='form-group col-sm-6'>
          Pai:{" "}
          <input
            type='text'
            id='pai'
            className='form-control'
            placeholder='Nome do Pai completo'
          />
        </div>
        <div className='form-group col-sm-6'>
          Mãe:{" "}
          <input
            type='text'
            id='mae'
            className='form-control'
            placeholder='Nome da Mãe completo'
          />
        </div>

        <div className='form-group col-sm-7'>
          Endereço:{" "}
          <input
            type='text'
            id='endereco'
            placeholder='Rua'
            className='form-control'
          />
        </div>
        <div className='form-group col-sm-1'>
          nº: <input type='text' id='num' className='form-control' />
        </div>
        <div className='form-group col-sm-4'>
          Bairro:{" "}
          <input
            type='text'
            id='bairro'
            placeholder='Bairro'
            className='form-control'
          />
        </div>

        <div className='form-group col-sm-7'>
          Cidade:{" "}
          <input
            type='text'
            id='cidade'
            placeholder='Cidade'
            className='form-control'
          />
        </div>
        <div className='form-group col-sm-1'>
          UF:{" "}
          <select id='uf' className='form-control'>
            <option value=''>UF</option>
            <option value='AC'>AC</option>
            <option value='AL'>AL</option>
            <option value='AM'>AM</option>
            <option value='AP'>AP</option>
            <option value='BA'>BA</option>
            <option value='CE'>CE</option>
            <option value='DF'>DF</option>
            <option value='ES'>ES</option>
            <option value='GO'>GO</option>
            <option value='MA'>MA</option>
            <option value='MG'>MG</option>
            <option value='MS'>MS</option>
            <option value='MT'>MT</option>
            <option value='PA'>PA</option>
            <option value='PB'>PB</option>
            <option value='PE'>PE</option>
            <option value='PI'>PI</option>
            <option value='PR'>PR</option>
            <option value='RJ'>RJ</option>
            <option value='RN'>RN</option>
            <option value='RO'>RO</option>
            <option value='RR'>RR</option>
            <option value='RS'>RS</option>
            <option value='SC'>SC</option>
            <option value='SE'>SE</option>
            <option value='SP'>SP</option>
            <option value='TO'>TO</option>
          </select>
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
        <div className='form-group col-sm-3'>
          <input type='radio' id='ocorrencia1' name='ocorrencia' /> Atendimento
          Clínico
        </div>
        <div className='form-group col-sm-3'>
          <input type='radio' id='ocorrencia2' name='ocorrencia' /> Acidente de
          Trabalho
        </div>
        <div className='form-group col-sm-3'>
          <input type='radio' id='ocorrencia3' name='ocorrencia' /> Acidente de
          Trânsito
        </div>
        <div className='form-group col-sm-3'>
          <input type='radio' id='ocorrencia4' name='ocorrencia' /> Gestante
        </div>
        <div className='form-group col-sm-12'>
          <input type='radio' id='ocorrencia5' name='ocorrencia' /> Outros
          <input
            type='text'
            id='ocorrencia_outros'
            className='form-control'
            ng-show="ocorrencia=='Outros'"
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

export default FormCadPacientes;
