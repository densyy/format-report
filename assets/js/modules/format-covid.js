function format (content) {
  const texto = content.split(/\r?\n/)
  let resultado = ''

  for (const linha of texto) {
    // vacina
    if (linha.includes('-Nome: Vacina')) {
      const vacina = linha.split('-Nome: Vacina')[1]
      resultado += 'Vacina:' + toTitleCase(vacina) + '\n'
    }

    // data aplicacao
    if (linha.includes('Data Aplicação: ')) {
      const dataAplicacao = linha.split('Data Aplicação: ')[1]
      resultado += 'Data Aplicação: ' + toTitleCase(dataAplicacao) + '\n'
    }

    // dose
    if (linha.includes('Dose: ')) {
      const dose = linha.split('Dose: ')[1]
      resultado += 'Dose: ' + toTitleCase(dose) + '\n'
    }

    // estabelecimento
    if (linha.includes('-Razão social: ')) {
      const estabelecimento = linha.split('-Razão social: ')[1]
      resultado += 'Estabelecimento: ' + toTitleCase(estabelecimento) + '\n'
      resultado += '\n---\n\n'
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
