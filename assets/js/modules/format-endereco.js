function format (content) {
  const texto = content.split(/\r?\n/)

  const enderecos = []
  let resultado = ''

  for (const linha of texto) {
    // rua
    if (linha.includes('Endereco: ')) {
      const rua = linha.split('Endereco: ')[1]
      enderecos.push(rua)
    }

    // numero
    if (linha.includes('Numero: ')) {
      const numero = linha.split('Numero: ')[1]
      enderecos[enderecos.length - 1] = enderecos[enderecos.length - 1] + ', ' + numero
    }

    // complemento
    if (linha.includes('Complemento: ')) {
      const complemento = linha.split('Complemento: ')[1]
      enderecos[enderecos.length - 1] = enderecos[enderecos.length - 1] + ', ' + complemento
    }

    // bairro
    if (linha.includes('Bairro: ')) {
      const bairro = linha.split('Bairro: ')[1]
      enderecos[enderecos.length - 1] = enderecos[enderecos.length - 1] + ', ' + bairro
    }

    // cep
    if (linha.includes('CEP: ')) {
      const cep = linha.split('CEP: ')[1].replace(/\.|-/g, '')
      enderecos[enderecos.length - 1] = enderecos[enderecos.length - 1] + ', ' + cep
    }

    // cidade
    if (linha.includes('Cidade: ')) {
      const cidade = linha.split('Cidade: ')[1].replace(' - ', '-')
      enderecos[enderecos.length - 1] = enderecos[enderecos.length - 1] + ', ' + cidade
    }
  }

  for (const index in enderecos) {
    enderecos[index] = toTitleCase(enderecos[index])
  }

  for (const endereco of enderecos) {
    resultado += `Endereço: ${endereco}`
    resultado += '\n'
    resultado += `[Link](https://www.google.com.br/maps/place/${encodeURI(endereco)})`
    resultado += '\n'
    resultado += '\n'
    resultado += '---'
    resultado += '\n'
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
