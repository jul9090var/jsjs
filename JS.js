var elegirplaneta = prompt("Que planeta eliges  \n 1 Marte \n 2 Jupiter")
var usuario = parseInt(prompt("Cual es tu peso"))
var g_tierra = 9.8, g_marte = 3.7, g_Jupiter = 24.8
var pesocalculado 

if (elegirplaneta == 1) {
    pesocalculado = usuario * g_marte / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en marte es de " + peso_real)
}

else if( elegirplaneta == 2){
    pesocalculado = usuario * g_Jupiter / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en Jupiter es de " + peso_real)
}

else{
    alert("Entrada no valida")
}




