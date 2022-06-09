// for (let i; i <= 1; i++) { }
// if (algoesverdadero) { }
// switch (algunValor) { }
// while (aqui) { }
// do { } while (aqui)
//Funciones 
//Definicion de una funcion
function paisDondeEstan(pais) {
    if (pais == "MX") {
        console.log("Hola!")
    } else {
        console.log("Hello!")
    }
}

function verificarRol(usuario, pais, edad) {
    //Lo que pongamos dentro de las llaves
    //es lo que se va a ejecutar
    //Vamos recibir el nombre del usuario
    //console.log(usuario.toLowerCase(), pais, String(edad))
    //Necesitamos saber si(if) el usuario es staff o alumno

    if (usuario == "Yanni") {
        console.log("staff")
        paisDondeEstan(pais)
    } else {
        console.log("alumno")
    }
}





// let usuario = "Yanni"
// let pais = "USA"
// let usuarioHoracio = "Horacio"

// verificarRol(usuario, "USA", 33)
// verificarRol(usuarioHoracio, "MX", 47)
// verificarRol("Fernanda", "MX", 29)
// verificarRol("Sandra", "MX", 30)
// verificarRol("Jesus", "ES", 21)
// verificarRol("Vale", "MX", 16)
// verificarRol("Moises", "MX", 26)
// verificarRol("Enrique", "USA", 28)
// verificarRol("Sam", "MX", 29)
// verificarRol("Yanni", "COL", 19)


//Decir hola si es antes de las 12
function hola(hora) {

    let esDeDia = "Si, es de dia"
    if (hora < 12) {
        console.log("Hola Mundo")
    } else {
        esDeDia = false
        console.log("Adios Mundo")
    }

}

let laHoraEs = 10

let elResultadoEs = hola(laHoraEs)



//Arrays o Arreglos [  ]

let usuarios = ["Yanni", 33, "Horacio", 47, true, false]

// console.log(usuarios)

usuarios.push("Ernesto", "Sam", "Vale")
// console.log(usuarios)
usuarios.pop()

usuarios.shift()
usuarios.unshift("")



let edades = [32, 28, 30, 5, 29, 30, 29, 34]
//Mostrar el valor del arreglo a partir del index
//console.log(edades[0])
console.log(edades)

for (let indice = 0; indice < edades.length; indice++) {
    console.log("For: ", edades[indice])
}

let indice = 0

do {
    console.log("Do: ", edades[indice])
    indice++
} while (indice < edades.length)

edades.forEach(function (edad, posicion, arreglo) {
    console.log("forEach: ", edad, posicion)
    console.log(arreglo)
})

edades.map((edad) => console.log(edad))
edades.map(function (edad) {
    console.log(edad)
})
// usuarios.push("Vale")
// console.log(usuarios)


let edadesMayores = edades.filter(function (edad) {
    console.log("filter: ", edad > 30)
    if (edad > 30) {
        return edad
    }
})