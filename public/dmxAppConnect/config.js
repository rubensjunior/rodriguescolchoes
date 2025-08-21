dmx.config({
  "inicialcolaborador": {
    "data_detail_veiculo": {
      "meta": [
        {
          "type": "number",
          "name": "id_motorista"
        },
        {
          "type": "number",
          "name": "id_veiculo"
        },
        {
          "type": "text",
          "name": "nome_colaborador"
        },
        {
          "type": "text",
          "name": "cpf_colaborador"
        },
        {
          "type": "text",
          "name": "placa_veiculo"
        },
        {
          "type": "text",
          "name": "modelo_veiculo"
        },
        {
          "type": "text",
          "name": "cor_veiculo"
        },
        {
          "type": "text",
          "name": "base64"
        }
      ],
      "outputType": "array"
    }
  },
  "filainauguracoes": {
    "data_fila": {
      "meta": [
        {
          "type": "text",
          "name": "id_inauguracao"
        },
        {
          "type": "datetime",
          "name": "created_at_inauguracao"
        },
        {
          "type": "text",
          "name": "nome_loja"
        },
        {
          "type": "text",
          "name": "cidade"
        },
        {
          "type": "text",
          "name": "uf"
        },
        {
          "type": "text",
          "name": "endereco_completo"
        },
        {
          "type": "text",
          "name": "complemento"
        },
        {
          "type": "text",
          "name": "cep"
        },
        {
          "type": "text",
          "name": "cod_filial"
        },
        {
          "type": "datetime",
          "name": "data_inicio"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "data_fim"
        },
        {
          "type": "number",
          "name": "total_senhas"
        },
        {
          "type": "number",
          "name": "regional"
        },
        {
          "type": "text",
          "name": "bairro"
        },
        {
          "name": "produto",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "id_inaug_produto"
            },
            {
              "type": "datetime",
              "name": "created_at_inaug_produto"
            },
            {
              "type": "number",
              "name": "produto_inaug_id"
            },
            {
              "type": "number",
              "name": "inauguracao_id"
            },
            {
              "type": "number",
              "name": "unidades_disponiveis"
            },
            {
              "type": "number",
              "name": "limite_por_pessoa"
            },
            {
              "type": "number",
              "name": "quantidade_consumida"
            },
            {
              "type": "text",
              "name": "status"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  }
});
