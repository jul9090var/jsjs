var elegirplaneta = prompt("Que planeta eliges  \n 1 Mercurio \n 2 Venus \n 3 Marte \n 4 Jupiter \n 5 Saturno \n 6 Urano")
var usuario = parseInt(prompt("Cual es tu peso"))
var g_tierra = 9.8, g_marte = 3.7, g_Jupiter = 24.8, g_Mercurio = 3.7, g_Venus = 8.8, g_Saturno = 10.4. g_Urano = 8.87
var pesocalculado 

if (elegirplaneta == 1) {
    pesocalculado = usuario * g_Mercurio / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en <Strong> Mercurio </Strong> es de Kg  " + peso_real)
}

else if( elegirplaneta == 2){
    pesocalculado = usuario * g_Venus / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en <Strong> Venus </Strong> es de Kg " + peso_real)
}

else if( elegirplaneta == 3){
    pesocalculado = usuario * g_marte / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en <Strong> Marte </Strong> es de Kg " + peso_real)
}

else if( elegirplaneta == 4){
    pesocalculado = usuario * g_Jupiter / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en <Strong> Jupiter </Strong> es de Kg " + peso_real)
}

else if( elegirplaneta == 5){
    pesocalculado = usuario * g_Saturno / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en <Strong> Saturno </Strong> es de Kg " + peso_real)
}

else if( elegirplaneta == 6){
    pesocalculado = usuario * g_Urano / g_tierra
    peso_real = pesocalculado.toFixed(2)
    document.write("El peso en <Strong> Urano </Strong> es de Kg " + peso_real)
}

else{
    alert("Entrada no valida")
}




