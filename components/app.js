const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

async function getPokemon(url) {
  const response = await fetch(url)
  const data = await response.json()
  var i = 0
  var pokemon = data.results.map((pokemon) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
    }
  })
  for (i = 0; i < 10; i++) {
    const response = await fetch(pokemon[i].url)
    const data = await response.json()
    pokemon[i].id = data.id
    pokemon[i].height = data.height
    pokemon[i].weight = data.weight
    pokemon[i].types = data.types.map((type) => type.type.name)
    pokemon[i].abilities = data.abilities.map((ability) => ability.ability.name)
    pokemon[i].stats = data.stats.map((stat) => stat.stat.name)
    pokemon[i].sprites = data.sprites
    //create div
    /*  console.log(pokemon[i].types[0]) */

    var div = document.createElement('div')
    div.className = 'divcriada'
    var div2 = document.createElement('div')
    div2.className = 'tipos'
    //create p
    var h1 = document.createElement('h1')
    h1.innerHTML = pokemon[i].id
    var p = document.createElement('p')
    p.innerHTML = pokemon[i].name
    p.className = 'pokemon'
    var p2 = document.createElement('p')
    p2.innerHTML = pokemon[i].types[0]
    //create img
    var img = document.createElement('img')
    img.src = pokemon[i].sprites.other.home.front_default
    img.height = 500
    //append p and img to div
    div.appendChild(h1)
    /*  div.appendChild(p2) */
    div.appendChild(img)
    div2.appendChild(p)

    //append div to board
    document.getElementsByClassName('board')[0].appendChild(div)
    document.getElementsByClassName('divcriada')[0].appendChild(div2)

    if (pokemon[i].types[0] === 'fire') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(250, 125, 41, 0.849)'
      div2.className = 'tipos is-fire'
    } else if (pokemon[i].types[0] === 'water') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(0, 125, 255, 0.849)'
      div2.className = 'tipos is-water'
    } else if (pokemon[i].types[0] === 'grass') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(63, 255, 63, 0.884)'
      div2.className = 'tipos is-grass'
    } else if (pokemon[i].types[0] === 'electric') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(255, 255, 0, 0.849)'
      div2.className = 'tipos is-electric'
    } else if (pokemon[i].types[0] === 'ice') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(0, 255, 255, 0.849)'
      div2.className = 'tipos is-ice'
    } else if (pokemon[i].types[0] === 'fighting') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(255, 0, 0, 0.849)'
      div2.className = 'tipos is-fighting'
    } else if (pokemon[i].types[0] === 'poison') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(255, 0, 255, 0.849)'
      div2.className = 'tipos is-poison'
    } else if (pokemon[i].types[0] === 'ground') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(125, 125, 0, 0.849)'
      div2.className = 'tipos is-ground'
    } else if (pokemon[i].types[0] === 'flying') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(125, 0, 255, 0.849)'
      div2.className = 'tipos is-flying'
    } else if (pokemon[i].types[0] === 'psychic') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(255, 0, 125, 0.849)'
      div2.className = 'tipos is-psychic'
    } else if (pokemon[i].types[0] === 'bug') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(0, 255, 125, 0.849)'
      div2.className = 'tipos is-bug'
    } else if (pokemon[i].types[0] === 'rock') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(255, 125, 0, 0.849)'
      div2.className = 'tipos is-rock'
    } else if (pokemon[i].types[0] === 'ghost') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(125, 0, 0, 0.849)'
      div2.className = 'tipos is-ghost'
    } else if (pokemon[i].types[0] === 'dragon') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(125, 0, 0, 0.849)'
      div2.className = 'tipos is-dragon'
    } else if (pokemon[i].types[0] === 'dark') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(20, 20, 20, 0.849)'
      div2.className = 'tipos is-dark'
    } else if (pokemon[i].types[0] === 'steel') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(125, 125, 125, 0.849)'
      div2.className = 'tipos is-steel'
    } else if (pokemon[i].types[0] === 'fairy') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(255, 255, 255, 0.849)'
      div2.className = 'tipos is-fairy'
    } else if (pokemon[i].types[0] === 'normal') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(175, 174, 174, 0.849)'
      div2.className = 'tipos is-normal'
    } else if (pokemon[i].types[0] === '???') {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(125, 125, 125, 0.849)'
      div2.className = 'tipos is-???'
    } else {
      div.className = 'column card is-3-desktop is-6-mobile'
      div.style.border = '2px solid rgba(0, 0, 0, 0.849)'
    }
  }
  var card = document.querySelector('.card img')
  card.addEventListener('click', function () {
    this.classList.toggle('is-flipped')
  })

  /* const btn = document.querySelector('button')
  btn.addEventListener('click', function () {
    var input = document.querySelector('input')
    var inputValue = input.value
    var url = 'https://pokeapi.co/api/v2/pokemon/' + inputValue + '/'
    var urlorigin = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    var click = 0

    if (inputValue === '' && click >= ) {
      console.log('entro')
      getPokemon(urlorigin)
      var divs = document.querySelectorAll('.column')
      for (var i = 0; i < divs.length; i++) {
        if (i === 0) {
          divs[i].style.display = 'none'
        } else {
          divs[i].style.display = 'initial'
        }
      }
    } else {
      fetch(url)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          var pokemon = data.sprites.other.home.front_default
          var img = document.querySelector('img')
          img.src = pokemon
          var name = document.querySelector('p')
          name.innerHTML = data.name
          var id = document.querySelector('h1')
          id.innerHTML = data.id
        })
      var divs = document.querySelectorAll('.column')
      for (var i = 0; i < divs.length; i++) {
        if (i === 0) {
          divs[i].style.display = 'initial'
        }
        if (i > 0) {
          divs[i].style.display = 'none'
        }
      }
      click++
    }
  }) */ //<___Trabalhar melhor o input de search___>
}
getPokemon(url)
