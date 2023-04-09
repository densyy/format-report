/* ---- Requires ---- */

import * as FormatTelefone from './modules/format-telefone.js'
import * as FormatEndereco from './modules/format-endereco.js'
import * as FormatCNH from './modules/format-cnh.js'

/* ---- Elements ---- */

const textareaContent = document.querySelector('textarea[name="content"]')
const buttonTelefone = document.querySelector('button[name="telefone"]')
const buttonEndereco = document.querySelector('button[name="endereco"]')
const buttonCNH = document.querySelector('button[name="cnh"]')

/* ---- Events ---- */

buttonTelefone.addEventListener('click', callbackClickTelefone)
buttonEndereco.addEventListener('click', callbackClickEndereco)
buttonCNH.addEventListener('click', callbackClickCNH)

function callbackClickTelefone () {
  FormatTelefone.format(textareaContent.value)
}

function callbackClickEndereco () {
  FormatEndereco.format(textareaContent.value)
}

function callbackClickCNH () {
  FormatCNH.format(textareaContent.value)
}
