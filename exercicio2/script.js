const numbers = [20, 30, 40, 50, 60, 70, 80, 90]


const triplo = numbers.map(function(elemento){
    const triplos = elemento * 3 
    return triplos

    
})
  
console.log(triplo)


const divisao = numbers.map(function(number, index, array){
const metades = number/2
return metades

})
console.log(divisao)