'use strict';

// write your code here
const logo = document.querySelector('.logo');

// Promise 1 — виконується при кліку на .logo
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// Promise 2 — відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Обробник успіху
function handleSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

// Обробник помилки
function handleError(error) {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error.message || 'Promise was rejected!';
  document.body.appendChild(div);
}

// Додаємо обробники до обох промісів
promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
