//Copiado de un ejercicio
try {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => {
      return res.json()
    }}
    .then(res => {
      console.log(res)
    }}
    .catch(err => console.warn(err))
} catch (error) {
  console.warn(error)
}
