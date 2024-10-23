var hora = new Date()
var agora = 14
var infoh = document.getElementById('info')
var img = document.getElementById('img')
infoh.innerHTML = `<p> Agora são ${agora} Horas`
if (agora > 6 && agora < 12){
        img.innerHTML += '<style> div#img > #manha { display: block;} </style>'
    }else if (agora > 12 && agora < 18) {
        img.innerHTML += '<style> div#img > #manha { display: none;} </style> <style> div#img > #tarde { display: block;} </style>'}
    else (agora > 18 && agora < 6) {
        img.innerHTML += '<style> div#img > #manha { display: none;} </style> <style> div#img > #tarde { display: none;} </style> <style> div#img > #noite { display: block;} </style>'
    }
    