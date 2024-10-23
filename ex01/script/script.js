function carregar(){
    var hora = new Date()
    var agora = hora.getHours()
    var infoh = document.getElementById('info')
    var img = document.getElementById('img')
    infoh.innerHTML = `<p> Agora são ${agora} Horas`
        if (agora > 12 && agora <= 18){
            img.innerHTML += '<style>body{ background-image: linear-gradient(#BA94B2,#F5A974);} div#img > img#manha {display: none;} div#img > img#noite {display: none;} </style><center><strong><p style="color:darkred; font-size: 1.5em;">Boa Tarde!</p></center>'
            
        }else if (agora > 18 || agora < 5){
            img.innerHTML += '<style>body{ background-image: linear-gradient(#49548C,#5C76B1);}  div#img > img#manha {display: none;} div#img > img#tarde {display: none;} </style><center><strong><p style="color:#49548C; font-size: 1.5em;">Boa Noite!</p></center>'
        }else{
            img.innerHTML += '<style>body{ background-image: linear-gradient(dodgerblue, white);} div#img > img#noite {display: none;} div#img > img#tarde {display: none;} </style><center><strong><p style="color:dodgerblue; font-size: 1.5em;">Bom Dia!</p></center>'
        } 
    }