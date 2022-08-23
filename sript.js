function insert (num){
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

function back(){
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);

}

function calcular()
{
    var tudo = document.getElementById('display').innerHTML;
    
    if(display)
    {
        document.getElementById('display').innerHTML = eval(tudo);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Error";
    }
}
