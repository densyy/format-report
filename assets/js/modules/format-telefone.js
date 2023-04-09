function format (content) {
  const texto = content.split(/\r?\n/)

  const telefones = []
  let resultado = ''

  for (const linha of texto) {
    // telefone
    if (linha.includes('Telefone: ')) {
      const telefone = linha.split('Telefone: ')[1]
      telefones.push(telefone)
    }
  }

  for (const telefone of telefones) {
    resultado += `[${telefone}](https://wa.me/55${telefone})`
    resultado += '\n'
    resultado += '\n'
    resultado += '---'
    resultado += '\n'
  }

  navigator.clipboard.writeText(resultado)
  window.alert('Copiado!')
}

export { format }
