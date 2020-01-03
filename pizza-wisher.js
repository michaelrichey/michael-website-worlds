const cheatz = [{
  name: 'Unlock 2X Bazooka',
  code: 'A + B + ↓C + L + R + START'
}, {
  name: 'Tiny Ammo Crates',
  code: 'Z + A + ←C + R + R + START'
}]

document.querySelector('#output').addEventListener('click', function (e) {
  cheatz.forEach(function (cheatObject, index) {
    const showText = document.createElement('p')
    showText.textContent = `${cheatObject.name} --> ${cheatObject.code}`
    document.querySelector('body').appendChild(showText)
  })

})
