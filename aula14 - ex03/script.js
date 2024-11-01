function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = '  Contando: <br>'
        var nini = Number(ini.value)
        var nfim = Number(fim.value)
        var npasso = Number(passo.value)
        if (npasso <=0){
            window.alert ('Passo inválido, considerando passo 1')
            npasso = 1
        }
        if (nini < nfim ) {
            for(var c  = nini; c <= nfim; c+= npasso){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        } else {
            for(var c = nini; c>= nfim; c-= npasso){
                res.innerHTML += ` ${c} \u{1F449}`
        }   
     }
     res.innerHTML += ` \u{1F3C1}`
    }
}