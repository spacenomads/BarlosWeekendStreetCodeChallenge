'use strict';

const PASS = '91u2dhjk';

const passwordBtn = document.querySelector('.js__password-visibility');

function togglePasswordVisibility(event) {
  const fieldContainer = event.currentTarget.parentElement;
  const field = fieldContainer.querySelector('.js__password-field');

  if (field.type === 'password') {
    field.type = 'text';
    // añadir la clase de molar
    fieldContainer.classList.add('password--visible');
  } else {
    field.type = 'password';
    // eliminar la clase de molar
    fieldContainer.classList.remove('password--visible');
  }
}

passwordBtn.addEventListener('click', togglePasswordVisibility);