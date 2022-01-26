// Improving basic skills

// the classic
console.log("Hello World!");

{ //dealing with variables
    let quantidade = 10;
    let valor = 4.5;
    let imposto = valor*0.3;
    let preco = valor + imposto;
    
    console.log("quantidade: ",quantidade)
    console.log("valor: ", valor,"R$")
    console.log("imposto: ", imposto)
    console.log("o preço é :", preco)
}

{ //type testing
    let num = 1
    
    if (typeof num !== NaN) {
        console.log(true)
    }else{
        console.log("erro")
    }
}