/* eslint-disable no-unused-vars */
// DOM Elements
const modalName = document.getElementById('first')
const modalNameDiv = document.getElementsByClassName('formData')[0]
const modalLastName = document.getElementById('last')
const modalLastNameDiv = document.getElementsByClassName('formData')[1]
const modalMail = document.getElementById('email')
const modalMailDiv = document.getElementsByClassName('formData')[2]
const modalMessage = document.getElementById('message')
const modalMessageDiv = document.getElementsByClassName('formData')[3]

const validationbg = document.querySelector('.bground-validation') // représente la div contenant le message de validation
const validationClose = document.getElementsByClassName('close')[0] // bouton close de la fenêtre de validation

// fonction qui réinitialise le formulaire : messages d'erreur et variables
function modalReset () {
  // on réinitialise les variables
  checkPrenomResult = false
  checkNomResult = false
  checkMailResult = false
  checkMessageResult = false

  // on réinitialise le formulaire en enlevant les messages d'erreur
  modalNameDiv.setAttribute('data-error-visible', 'false')
  modalLastNameDiv.setAttribute('data-error-visible', 'false')
  modalMailDiv.setAttribute('data-error-visible', 'false')
  modalMessageDiv.setAttribute('data-error-visible', 'false')
}

/* Affiche le formulaire */
function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  modalName.focus()
}

const closeForm = document.getElementById('lienFormulaire')
closeForm.addEventListener('click', closeModal)

const formulaire = document.getElementById('contact_modal')
formulaire.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal()
  }
})

/* ferme le formulaire */
function closeModal () {
  const modal = document.getElementById('contact_modal')
  const form = document.getElementById('contact_form')
  modalReset()
  form.reset()
  modal.style.display = 'none'
}

/* ferme la fenêtre de validation */
function closeModalValidation () {
  const modal = document.querySelector('.bground-validation')
  modal.style.display = 'none'
}

// validation formulaire
function validate (event) {
  event.preventDefault()
  const modal = document.getElementById('contact_modal')
  if (checkPrenomResult && checkNomResult && checkMailResult && checkMessageResult) {
    console.log('message envoyé : ', [modalName.value, modalLastName.value, modalMail.value, modalMessage.value])
    event.target.reset()
    modalReset()
    modal.style.display = 'none'
    validationbg.style.display = 'block'
  } else {
    // on rappelle toutes les fonctions pour que le message d'erreur s'affiche au niveau de la case qui pose problème
    checkPrenom()
    checkNom()
    checkMail()
    checkMessage()
  }
}

const regName = /^[a-zéèë]+(?:[\s-]?[a-zéèë])+$/i
// contrôler le champ prénom
modalName.addEventListener('input', checkPrenom)
let checkPrenomResult = false
function checkPrenom (event) {
  if ((regName.test(modalName.value)) === false) {
    modalNameDiv.setAttribute('data-error-visible', 'true')
    checkPrenomResult = false
    if (modalName.value.length < 2) {
      modalNameDiv.setAttribute('data-error', '2 caractères minimum')
    } else {
      modalNameDiv.setAttribute('data-error', 'prénom non conforme')
    }
  } else {
    modalNameDiv.setAttribute('data-error-visible', 'false')
    checkPrenomResult = true
  }
  return checkPrenomResult
}

// contrôler le champ nom
modalLastName.addEventListener('input', checkNom)

let checkNomResult = false
function checkNom (event) {
  if ((regName.test(modalLastName.value)) === false) {
    modalLastNameDiv.setAttribute('data-error-visible', 'true')
    checkNomResult = false
    if (modalLastName.value.length < 2) {
      modalLastNameDiv.setAttribute('data-error', '2 caractères minimum')
    } else {
      modalLastNameDiv.setAttribute('data-error', 'nom non conforme')
    }
  } else {
    modalLastNameDiv.setAttribute('data-error-visible', 'false')
    checkNomResult = true
  }
  return checkNomResult
}

// contrôler le champ mail
modalMail.addEventListener('input', checkMail)

let checkMailResult = false
function checkMail (event) {
  const regMail = /^[0-9a-z._-]+@{1}[0-9a-z]{2,}[.]{1}[a-z]{2,5}$/i
  if ((regMail.test(modalMail.value)) === false) {
    modalMailDiv.setAttribute('data-error-visible', 'true')
    modalMailDiv.setAttribute('data-error', 'format non valide')
    checkMailResult = false
  } else {
    modalMailDiv.setAttribute('data-error-visible', 'false')
    checkMailResult = true
  }
  return checkMailResult
}

// contrôler le champ message
modalMessage.addEventListener('input', checkMessage)

let checkMessageResult = false
function checkMessage (event) {
  // console.log(modalMessage.value)
  if (modalMessage.value === '') {
    modalMessageDiv.setAttribute('data-error-visible', 'true')
    modalMessageDiv.setAttribute('data-error', 'Entrer un message')
    checkMessageResult = false
  } else {
    modalMessageDiv.setAttribute('data-error-visible', 'false')
    checkMessageResult = true
  }
  return checkMessageResult
}

function modalValidate () {
  validationbg.style.display = 'none'
}
