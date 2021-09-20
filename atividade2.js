function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3 ) {
        console.log("Triângulo equilátero")
    } else if( lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log("Triângulo escaleno")
    } else {
        console.log("Triângulo isósceles")
    }
}

triangulo(1, 2, 2)