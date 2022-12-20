'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector('#name'),
  psword = document.querySelector('#psword'),
  confirmPsword = document.querySelector('#confirm-psword'),
  registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);
console.log(id);

function register() {
  const req = {
    name: name.value,
    id: id.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  fetch('./register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((error) => {
      console.log('회원가입 중 에러 발생');
    });
}
