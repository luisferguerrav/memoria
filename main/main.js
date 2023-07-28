//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerIncial = 30;
let tiempoRegresivoId = null;

//apuntando a documento html
let mostrarMovimientos = document.getElementById("movimientos")
let mostrarAciertos = document.getElementById("aciertos")
let mostrarTiempo = document.getElementById("t-restante")

//generacion de numeros aleatorios
let numero = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8] 
numero = numero.sort( () => { return Math.random()-0.5 })
console.log(numero);

//funciones

function contarTiempo() {
    tiempoRegresivoId =  setInterval ( ()=> {
        timer--; 
        mostrarTiempo.innerHTML= `tiempo: ${timer} segundos `

        if (timer == 0) {
                clearInterval(tiempoRegresivoId);
                bloquearTarjetas();
        }
    },1000);
    
}
function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById (i);
        tarjetaBloqueada.innerHTML = numero[i];
        tarjetaBloqueada.disabled = true;
    }
     
}

//funcion principal

function destapar(id) {

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
        
    }

tarjetasDestapadas ++;
console.log(tarjetasDestapadas);


if (tarjetasDestapadas == 1) {
    //mostrar primer numero
    tarjeta1 = document.getElementById(id);
    primerResultado = numero [id];
    tarjeta1.innerHTML = primerResultado;
    
    //deshabilitar el primer boton

    tarjeta1.disabled = true;

} else if (tarjetasDestapadas == 2) {
    //mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = numero [id];
    tarjeta2.innerHTML = segundoResultado;

    // deshabilitar el segundo boton

    tarjeta2.disabled = true;

    //incrementar movimientos

    movimientos ++;
    mostrarMovimientos.innerHTML= `movimientos: ${movimientos}`;
    

    if (primerResultado == segundoResultado) {
        //encerar contaddor tarjetas destapadas
        tarjetasDestapadas = 0;

        //Aumentar aciertos 
        aciertos ++;
        mostrarAciertos.innerHTML = `aciertos: ${aciertos}`

            if (aciertos == 8) {
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `aciertos: ${aciertos} los lograste`
                mostrarTiempo.innerHTML = `solo tardaste ${ timerIncial - timer} segundos`
                mostrarMovimientos.innerHTML = `movimientos: ${movimientos} yujjuuu`
                
            }


    }else{
        //mostrar y volver a tapar 
        setTimeout(()=>{
            tarjeta1.innerHTML= "  ";
            tarjeta2.innerHTML= "  ";
            tarjeta1.disabled= false;
            tarjeta2.disabled= false;
            tarjetasDestapadas= 0;
        }, 800);

    }
}
    
}