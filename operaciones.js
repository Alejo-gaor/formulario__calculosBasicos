
function operacion(signo){
    function procedimiento(signoOperador){
        let numero1 = parseInt(document.getElementById('num1').value);
        let numero2 = parseInt(document.getElementById('num2').value);
        let m = eval(`${numero1} ${signoOperador} ${numero2}`).toFixed(2)
        document.getElementById('operadorFormula').innerHTML = signoOperador
        document.getElementById('resultado').value = m;
    }
    procedimiento(signo)

}

function promedio(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    let prom = (numero1 + numero2)/2
    document.getElementById('resultado').value = prom;
}

// ------------ DATOS PERSONALES ------------------
function datos(identi, campo, text){
    let elementoHTML = document.getElementById(identi).value;
    let input = document.getElementById(campo);
    input.innerHTML = `${text}: ${elementoHTML}`;

}

function registrar(){
    datos('name', 'campo1', 'Nombre')
    datos('age', 'campo2', 'Edad')
    datos('address', 'campo3','Direccion')
    datos('city', 'campo4','Ciudad')
    datos('food', 'campo5', 'Comida Favorita')
}
