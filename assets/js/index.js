/* ---- Requires ---- */

import * as FormatTelefone from './modules/format-telefone.js'
import * as FormatEndereco from './modules/format-endereco.js'
import * as FormatCNH from './modules/format-cnh.js'
import * as FormatVeiculos from './modules/format-veiculos.js'

/* ---- Elements ---- */

const textareaContent = document.querySelector('textarea[name="content"]')
const buttonTelefone = document.querySelector('button[name="telefone"]')
const buttonEndereco = document.querySelector('button[name="endereco"]')
const buttonCNH = document.querySelector('button[name="cnh"]')
const buttonVeiculos = document.querySelector('button[name="veiculos"]')

/* ---- Events ---- */

buttonTelefone.addEventListener('click', callbackClickTelefone)
buttonEndereco.addEventListener('click', callbackClickEndereco)
buttonCNH.addEventListener('click', callbackClickCNH)
buttonVeiculos.addEventListener('click', callbackClickVeiculos)

function callbackClickTelefone () {
  FormatTelefone.format(textareaContent.value)
}

function callbackClickEndereco () {
  FormatEndereco.format(textareaContent.value)
}

function callbackClickCNH () {
  FormatCNH.format(textareaContent.value)
}

function callbackClickVeiculos () {
  FormatVeiculos.format(textareaContent.value)
}
