const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  body = document.querySelector('body')
  let index = 0
  body.addEventListener('keydown', e => {
    if (e.key === codes[index]) {
      index++
      if (codes.length === index) {
        alert("yo u did it")
      }
    } else {
      index = 0
    }
  })
}
