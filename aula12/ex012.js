var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas`)
if (hora < 12 && hora > 5){
    console.log('Bom dia')
}else if (hora <= 18){
    console.log('Boa Tarde')
}else {
    console.log('Boa noite')
}