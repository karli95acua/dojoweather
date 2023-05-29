
// función para alerta por cambio de ciudad 
function changeCity(element) {
    alert("Loading weather report...");
}


// función para remover la cookie por completo
function acceptCookie(element) {
    let contCookies = element.closest(".contcookies");
    contCookies.remove();
}

//función para hacer el cambio de C° a F°
function changeMetric(element) {
    let temperatures = document.querySelectorAll (".tempmax, .tempmin");


    for (let i = 0; i < temperatures.length; i++){
        let currentTemp = Number ( temperatures[i].textContent ); 
        if ( element.value === "celcius" ) {
            let celciusResult = ( currentTemp - 32 ) / 1.8; 
            temperatures[i].textContent = parseInt( celciusResult );
        }
        else{
            let farenheitResult = (9 / 5 ) * currentTemp + 32; 
            temperatures[i].textContent = parseInt( farenheitResult );


        }
    }
}
