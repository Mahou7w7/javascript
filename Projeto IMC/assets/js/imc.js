function myFunction() {

    var Vnome = document.getElementById("Nome").value
    var Vsnome = document.getElementById("Sobrenome").value
    var Valtura = document.getElementById("Altura").value
    Valtura = Valtura.replace(",", ".")
    var Vpeso = document.getElementById("Peso").value    
    Vpeso = Vpeso.replace(",", ".")
    var gen = parseInt(document.getElementById("genero").value)
    var imc = Vpeso/(Valtura*Valtura)
    imc = imc.toFixed(2)

    switch(gen){
        case 1:
            if(imc < 20 && imc > 0){
                document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Seu peso está abaixo do normal."
            }else if(imc >= 20 && imc <=24.9){
                document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Seu peso está normal."
            }else if(imc >= 25 && imc <=29.9){
                document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Você tem obesidade leve."
            }else if(imc >= 30 && imc <= 39.9){
                document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Você tem obesidade moderada."
            }else if(imc > 43){
                document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Você tem obesidade mórbida."
            }else{  document.getElementById("mostra").innerHTML = "Valor inválido"}
            break;
            case 2:
                if(imc < 19 && imc > 0){
                    document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Seu peso está abaixo do normal."
                }else if(imc >= 19 && imc <=23.9){
                    document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Seu peso está normal."
                }else if(imc >= 24 && imc <=28.9){
                    document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Você tem obesidade leve."
                }else if(imc >= 29 && imc <= 38.9){
                    document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Você tem obesidade moderada."
                }else if(imc > 39){
                    document.getElementById("mostra").innerHTML = Vnome+" "+Vsnome+", seu IMC é: "+imc.replace(",", ".")+". Você tem obesidade mórbida."
                }else{  document.getElementById("mostra").innerHTML = "Valor inválido"}
                break;
                default:
                    document.getElementById("mostra").innerHTML = "escolha um genero"
                    break;
    }

}