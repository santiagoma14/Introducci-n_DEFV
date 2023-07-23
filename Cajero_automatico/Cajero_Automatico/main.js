
//Ingresar montos

function ingresar_Monto1() {

    let saldo_cuenta1 = parseInt(document.getElementById("saldo_1").value);
    let monto_Ingresado = parseInt(document.getElementById("monto_1").value);

    if((saldo_cuenta1 + monto_Ingresado) > 990){
        alert("No puede Ingresar más dinero más dinero")
    }else {
        saldo_cuenta1 += monto_Ingresado;
        document.getElementById("saldo_1").value = saldo_cuenta1;
        localStorage.setItem("saldo_cuenta1", saldo_cuenta1);
    }
    
}

function ingresar_Monto2() {

    let saldo_cuenta2 = parseInt(document.getElementById("saldo_2").value);
    let monto_Ingresado2 = parseInt(document.getElementById("monto_2").value);
   

    if((saldo_cuenta2 += monto_Ingresado2) > 990){
        alert("No puede Ingresar más dinero más dinero")
    }else {
        document.getElementById("saldo_2").value = (monto_Ingresado2 + saldo_cuenta2)
    }

}

function ingresar_Monto3() {

    let saldo_cuenta3 = parseInt(document.getElementById("saldo_3").value);
    let monto_Ingresado3 = parseInt(document.getElementById("monto_3").value);
    

    if((saldo_cuenta3 + monto_Ingresado3) > 990){
        alert("No puede Ingresar más dinero más dinero")
    }else {
        document.getElementById("saldo_3").value = (monto_Ingresado3 + saldo_cuenta3)
    }

}

//Retirar montos

function retirar_Monto1() {

    let saldo_cuenta1 = parseInt(document.getElementById("saldo_1").value);
    let monto_Ingresado = parseInt(document.getElementById("monto_1").value);

    if((saldo_cuenta1 - monto_Ingresado) < 10){
        alert("No puede retirar más dinero")
    }else {
        document.getElementById("saldo_1").value = (saldo_cuenta1 - monto_Ingresado)
    }
    
}

function retirar_Monto2() {

    let saldo_cuenta2 = parseInt(document.getElementById("saldo_2").value);
    let monto_Ingresado2 = parseInt(document.getElementById("monto_2").value);

    
    if((saldo_cuenta2 - monto_Ingresado2) < 10){
        alert("No puede retirar más dinero")
    }else {
        document.getElementById("saldo_2").value = (saldo_cuenta2 - monto_Ingresado2)
    }

}

function retirar_Monto3() {

    let saldo_cuenta3 = parseInt(document.getElementById("saldo_3").value);
    let monto_Ingresado3 = parseInt(document.getElementById("monto_3").value);


    if((saldo_cuenta3 - monto_Ingresado3) < 10){
        alert("No puede retirar más dinero")
    }else {
        document.getElementById("saldo_3").value = (saldo_cuenta3 - monto_Ingresado3)

    }
    
}