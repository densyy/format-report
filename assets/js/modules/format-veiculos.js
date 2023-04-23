function format (content) {
  const texto = content.split(/\r?\n/)
  let resultado = ''
  const veiculo = {}

  for (const linha of texto) {
    // placa
    if (linha.includes('placa: ')) {
      const placa = linha.split('placa: ')[1]
      veiculo.placa = placa
    }

    // chassi
    if (linha.includes('chassi: ')) {
      const chassi = linha.split('chassi: ')[1]
      veiculo.chassi = chassi
    }

    // anoModelo
    if (linha.includes('anoModelo: ')) {
      const ano = linha.split('anoModelo: ')[1]
      veiculo.ano = ano
    }

    // renavam
    if (linha.includes('renavam: ')) {
      const renavam = linha.split('renavam: ')[1]
      veiculo.renavam = renavam
    }

    // marcaModeloDescricao
    if (linha.includes('marcaModeloDescricao: ')) {
      const modelo = linha.split('marcaModeloDescricao: ')[1]
      veiculo.modelo = modelo
    }
  }

  resultado += 'Placa: ' + veiculo.placa + '\n'
  resultado += 'Modelo: ' + veiculo.modelo + ' (' + veiculo.ano + ')' + '\n'
  resultado += 'Renavam: ' + veiculo.renavam + '\n'
  resultado += 'Chassi: ' + veiculo.chassi + '\n'

  navigator.clipboard.writeText(resultado)
  window.alert('Copiado!')
}

export { format }
