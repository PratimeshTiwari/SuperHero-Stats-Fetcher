const superheroToken = '3496519250597080'
const baseUrl = `https://superheroapi.com/api.php/${superheroToken}`
const re = document.getElementById('refresh')
const heroImageDiv = document.getElementById('heroImage')
const searchBtn = document.getElementById('search')

const searchInput = document.getElementById('searchInput')

//version 1
// const showHeroInfo = (json) => {
//   const name = `<h2>${json.name}</h2>`
//   const statI = `<h2>Intelligence : ${json.powerstats.intelligence}</h2>`
//   const statS = `<h2>Intelligence : ${json.powerstats.strength}</h2>`
//   const statSp = `<h2>Speed : ${json.powerstats.speed}</h2>`
//   const statD = `<h2>Durability : ${json.powerstats.durability}</h2>`
//   const statP = `<h2>Power : ${json.powerstats.power}</h2>`
//   const statC = `<h2>Combat : ${json.powerstats.combat}</h2>`

//   heroImageDiv.innerHTML = `${name}${statI}${statSp}${statD}${statP}${statC}<br><img src='${json.image.url}' height=200 width=200>`
// }

// version 2 
// const showHeroInfo = (character) => {
//   for(stat in character.powerstats){
//      heroImageDiv.innerHTML += `<h3>${stat} :${character.powerstats[stat]}</h3>`
//   }
//   heroImageDiv.innerHTML += `<img src='${character.image.url}' height=200 width=200>`
// }

//version 3L
const showHeroInfo = (character) => {
const name=`<h2>${character.name}</h2>`
const img = `<img src='${character.image.url}' height=200 width=200>`
 let stats = Object.keys(character.powerstats).map(stat=>{
  return  `<p>${stat}: ${character.powerstats[stat]}</p>`
  }).join('')
  heroImageDiv.innerHTML=`${name}${img}${stats}`
}

const getSuperHero = (id, name) => {
  console.log(searchInput.value)
  fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .then(json => { 
     showHeroInfo(json)
      })

}

const getSearchSuperHero = (name) => {
  fetch(`${baseUrl}/search/${name}`)
    .then(response => response.json())
    .then(json => { 
     showHeroInfo(json.results[0])
      }
      )
}

const randomHero = () => {
  const heros = 731
  return Math.floor(Math.random() * heros) + 1
}

re.onclick = () => {

  getSuperHero(randomHero())
}


searchBtn.onclick = () => {
  getSearchSuperHero(searchInput.value)
}