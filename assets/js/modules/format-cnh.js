function format (content) {
  const texto = content.split(/\r?\n/)
  let resultado = ''

  for (const linha of texto) {
    // nome mãe
    if (linha.includes('nomeMae: ')) {
      const nomeMae = linha.split('nomeMae: ')[1]
      resultado += 'Nome Mãe: ' + toTitleCase(nomeMae)
      resultado += '\n'
    }

    // nome pai
    if (linha.includes('nomePai: ')) {
      const nomePai = linha.split('nomePai: ')[1]
      resultado += 'Nome Pai: ' + toTitleCase(nomePai)
      resultado += '\n'
    }

    // endereco
    if (linha.includes('enderecoLogradouro: ')) {
      const endereco = linha.split('enderecoLogradouro: ')[1]
      resultado += 'Endereço Recente: ' + toTitleCase(endereco)
    }

    // numero
    if (linha.includes('enderecoNumero: ')) {
      const numero = linha.split('enderecoNumero: ')[1]
      resultado += ', ' + numero
    }

    // complemento
    if (linha.includes('enderecoComplemento: ')) {
      const complemento = linha.split('enderecoComplemento: ')[1]
      resultado += ', ' + toTitleCase(complemento)
    }

    // bairro
    if (linha.includes('enderecoBairro: ')) {
      const bairro = linha.split('enderecoBairro: ')[1]
      resultado += ', ' + toTitleCase(bairro)
    }

    // cep
    if (linha.includes('enderecoCep: ')) {
      const cep = linha.split('enderecoCep: ')[1]
      resultado += ', ' + cep
    }

    // cidade
    if (linha.includes('descricaoEnderecoMunicipio: ')) {
      const cidade = linha.split('descricaoEnderecoMunicipio: ')[1]
      resultado += ', ' + toTitleCase(cidade)
    }

    // estado
    if (linha.includes('enderecoUf: ')) {
      const estado = linha.split('enderecoUf: ')[1]
      resultado += ', ' + estado
      resultado += '\n'
    }

    // categoria
    if (linha.includes('categoriaAtual: ')) {
      const categoria = linha.split('categoriaAtual: ')[1]
      resultado += 'Categoria: ' + categoria
      resultado += '\n'
    }

    // data validade
    if (linha.includes('dataValidadeCnh: ')) {
      const dataValidade = linha.split('dataValidadeCnh: ')[1]
      resultado += 'Data Validade: ' + dataValidade
      resultado += '\n'
    }

    // data emissao
    if (linha.includes('dataUltimaEmissaoHistorico: ')) {
      const dataEmissao = linha.split('dataUltimaEmissaoHistorico: ')[1]
      resultado += 'Data Emissão: ' + dataEmissao
      resultado += '\n'
    }
  }

  navigator.clipboard.writeText(resultado)
  window.alert('Copiado!')
}

function toTitleCase (str) {
  return str.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  })
}

export { format }
