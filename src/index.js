const password = document.getElementById("password");
// const passwordToggle = document.getElementsByClassName("password_icon")[0]
const passwordToggle = document.querySelector(".password_icon");

console.log(password);
console.log(passwordToggle);
/**两种function写法:
function cycling() {
  console.log('Hello');
}

const func = () => {
}
*/
passwordToggle.addEventListener('click', () => {
  if(password.type === 'password') {
    password.setAttribute('type', 'text')
    passwordToggle.classList.remove('show')
    passwordToggle.classList.add('show')
  } else {
    password.setAttribute('type', 'password')
    passwordToggle.classList.remove('show')
  }
})


password.addEventListener('keyup', () => {
  // console.log(password.value);
  checkPassword(password.value);
})

function checkPassword(info) {
  const passwordMsg = document.getElementById("password_msg")
  passwordMsg.textContent = 'must have'
  const lower = new RegExp('(?=.*[a-z])')
  const upper = new RegExp('(?=.*[A-Z])')
  const number = new RegExp('(?=.*[0-9])')
  const special = new RegExp('(?=.*[!@#\$%\^&\*])')
  const length = new RegExp('(?=.{8,})')

  let flag = false;

  if(!lower.test(info)) {
    passwordMsg.textContent += " at least one lowercase "
    flag = true;
  }
  if(!upper.test(info)) {
    passwordMsg.textContent += " at least one uppercase "
    flag = true;
  }
  if(!number.test(info)) {
    passwordMsg.textContent += " at least one number "
    flag = true;
  }
  if(!special.test(info)) {
    passwordMsg.textContent += " at least one special symbol "
    flag = true;
  }
  if(!length.test(info)) {
    passwordMsg.textContent += " length should not be less than 8"
    flag = true;
  }

  const passwordGroup = document.getElementById("password_group")
  if (flag) {
    passwordGroup.classList.remove('success')
    passwordGroup.classList.add('error')
  } else {
    passwordMsg.textContent = 'all requires satisfied'
    passwordGroup.classList.add('success')
    passwordGroup.classList.remove('error')
  }
}

const email = document.getElementById("email");
email.addEventListener('keyup', () => {
  // console.log(password.value);
  checkEmail(email.value);
})


function checkEmail(info) {
  const emailMsg = document.getElementById("email_msg")
  emailMsg.textContent = ' '
  const email = new RegExp('(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)')

  const emailGroup = document.getElementById("email_group")
  if(!email.test(info)) {
    emailMsg.textContent = "invalid email format"
    emailGroup.classList.remove('success')
    emailGroup.classList.add('error')
  } else {
    emailMsg.textContent = 'valid email format'
    emailGroup.classList.add('success')
    emailGroup.classList.remove('error')
  }
}
console.log('22222222');


