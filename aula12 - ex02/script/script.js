function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resu')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <12){
                // menino
                img.setAttribute('src', 'menino.png')
                }else if (idade >=12 && idade < 25){
                //Jovem
                img.setAttribute('src', 'jovemH.png')
                }else if (idade >= 25 && idade <50) {
                //Homem
                img.setAttribute('src', 'homem.png')
                }else {
                //idoso   
                img.setAttribute('src', 'idoso.png') 
                }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <12){
                // menina
                img.setAttribute('src', 'menina.png')
                }else if (idade >=12 && idade < 25){
                //Jovem
                img.setAttribute('src', 'jovemM.png')
                }else if (idade >= 25 && idade <50) {
                //Mulher
                img.setAttribute('src', 'mulher.png')
                }else {
                //idosa  
                img.setAttribute('src', 'idosa.png') 
                }  

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}