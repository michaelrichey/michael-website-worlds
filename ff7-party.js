const party = [
  {
    name: "Cloud Strife",
    weapon: "Sword",
    class: "Red Mage"
  },
  {
    name: "Barrett Wallace",
    weapon: "Arm Gun",
    class: "Fighter"
  },
  {
    name: "Tifa Lockhart",
    weapon: "Fists",
    class: "Monk"
  },
  {
    name: "Aeris Gainsborough",
    weapon: "Pole",
    class: "Sage"
  },
  {
    name: "Red XIII",
    weapon: "Teeth",
    class: "Kitty"
  },
  {
    name: "Cait Sith",
    weapon: "Horn",
    class: "White Mage"
  },
  {
    name: "Cid Highwind",
    weapon: "Pole",
    class: "Dragoon"
  },
  {
    name: "Yuffie Kisagari",
    weapon: "Big Shuriken",
    class: "Ninja"
  },
  {
    name: "Vincent Valentine",
    weapon: "Gun",
    class: "Black Mage"
  },
]

const filters = {
  searchText: ''
}

const partyList = function (party, filters) {
  const filterParty = party.filter(function (member) {
    return member.name.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#name-zone').innerHTML = '<th>Name</th>'
  document.querySelector('#weapon-zone').innerHTML = '<th>Weapon</th>'
  document.querySelector('#class-zone').innerHTML = '<th>Class</th>'

  filterParty.forEach(function (member) {
    const generateParty = document.createElement('td')
    generateParty.textContent = member.name
    document.querySelector("#name-zone").appendChild(generateParty)

    const generateWeapon = document.createElement("td")
    generateWeapon.textContent = member.weapon
    document.querySelector("#weapon-zone").appendChild(generateWeapon)

    const generateClass = document.createElement('td')
    generateClass.textContent = member.class
    document.querySelector("#class-zone").appendChild(generateClass)
  })
}



const classList = function (party) {
  party.forEach(function (member) {
    const generateClass = document.createElement('td')
    generateClass.textContent = member.class
    document.querySelector("#class-zone").appendChild(generateClass)
  })
}

partyList(party, filters)

document.querySelector("#search").addEventListener('input', function (e) {
  filters.searchText = e.target.value
  partyList(party, filters)
})
