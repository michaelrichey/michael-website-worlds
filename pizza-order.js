const ingredients = []


const message = function (x) {

  document.querySelector('#welcome').innerHTML = ''

  x.forEach(function (item) {
    const generateText = document.createElement('p')
    generateText.innerText = `You have added: ${item.name}`
    document.querySelector("#welcome").appendChild(generateText)
  })
}

message(ingredients)

document.querySelector("#form").addEventListener('submit', function (e) {
  e.preventDefault()
  ingredients.push(
    {
      name: e.target.elements.toppings.value,
      price: 'asdf'
    }
  )
  console.log(ingredients)
  e.target.elements.toppings.value = ''
  message(ingredients)
})



// const generateText = document.createElement('p')
// generateText.textContent = `you have todos left to do`
// document.querySelector('#welcome').appendChild(generateText)
