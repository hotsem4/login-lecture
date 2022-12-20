'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector('#name'),
  psword = document.querySelector('#psword'),
  confirmPsword = document.querySelector('#confirm-psword'),
  registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);
console.log(id);

function register() {
  if (!id.value) return alert('아이디를 입력하시오.');
  if (psword.value !== confirmPsword.value)
    return alert('비밀번호가 일치하지 않습니다.');

  const req = {
    name: name.value,
    id: id.value,
    psword: psword.value,
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
