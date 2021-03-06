const $value = document.querySelector('#value')
const getValue = () => $value.value
const setValue = value => ($value.value = value)
const appendValue = value => ($value.value += value)

const $numbers = document.querySelectorAll('.number')
$numbers.forEach(number =>
  number.addEventListener('click', ({target}) => {
    appendValue(target.textContent)
  })
)

const $dot = document.querySelector('#dot')
$dot.addEventListener('click', e => {
  const value = getValue()
  if (value.indexOf('.') === -1) {
    if (value.length === 0 || value === '-') {
      appendValue(0)
    }
    appendValue('.')
  }
})

const $history = document.querySelector('#history')
const setHistory = (memory, operation) =>
  ($history.textContent = `${memory} ${operation}`)
const clearHistory = () => ($history.textContent = ' ')

const $reset = document.querySelector('#reset')
$reset.addEventListener('click', e => {
  setValue('')
  clearHistory()
})

let operation
let memory

function hasState() {
  return operation && (memory || memory === 0)
}

const $operations = document.querySelectorAll('.operation')
$operations.forEach(op =>
  op.addEventListener('click', ({target}) => {
    if (getValue().length > 0 && !hasState()) {
      operation = target.textContent
      memory = parseFloat(getValue())
      setValue('')
      setHistory(memory, operation)
    } else if (hasState()) {
      operation = target.textContent
      setHistory(memory, operation)
    }
  })
)

const $equal = document.querySelector('#equal')
$equal.addEventListener('click', e => {
  if (hasState() && getValue().length > 0) {
    const value = parseFloat(getValue())
    let result
    switch (operation) {
      case '+':
        result = memory + value
        break
      case '-':
        result = memory - value
        break
      case '*':
        result = memory * value
        break
      case '/':
        result = memory / value
        break
    }
    setValue(result)
    clearHistory()
    memory = null
    operation = null
  }
})

const $revert = document.querySelector('#revert')
$revert.addEventListener('click', e => {
  const value = getValue()
  if (value[0] === '-') {
    setValue(value.substring(1))
  } else {
    setValue('-' + value)
  }
})
