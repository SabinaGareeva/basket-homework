const counter = document.querySelector('.counter')
const counterInput = document.querySelector('.counter__input')
const counterBtnUp = document.querySelector('.counter__btn--up')
const counterBtnDown = document.querySelector('.counter__btn--down')

let COUNT = Number.parseInt(counterInput.value, 10) // Получение значения

// Увеличение значения
counterBtnUp.addEventListener('click', () => {
  COUNT++

  updateCounterState()
})

// Уменьшение значения
counterBtnDown.addEventListener('click', () => {
  COUNT--

  updateCounterState()
})

// Обновление состояния счетчика
// function updateCounterState() {
//   if (COUNT === 1) {
//     counterBtnDown.setAttribute('disabled', '')
//   } else {
//     counterBtnDown.removeAttribute('disabled')
//   }

//   if (COUNT === 10) {
//     counterBtnUp.setAttribute('disabled', '')
//   } else {
//     counterBtnUp.removeAttribute('disabled')
//   }

//   counterInput.value = COUNT
// }
function updateCounterState() {
  counterBtnDown.toggleAttribute('disabled', COUNT === 1)
  counterBtnUp.toggleAttribute('disabled', COUNT === 10)
  counterInput.value = COUNT
}
