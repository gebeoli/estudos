function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 6 && hora < 13) {
        //Bom dia
        img.src = 'img/manha.png'
        msg.innerHTML = `Bom dia, agora são ${hora} horas!`
        document.body.style.backgroundColor = '#FFC18C'
    } else if (hora >= 13 && hora < 18) {
        //Boa Tarde
        img.src = 'img/tarde.png'
        msg.innerHTML = `Boa tarde, agora são ${hora} horas!`
        document.body.style.backgroundColor = '#D75413'
    } else {
        //Boa noite
        img.src = 'img/noite.png'
        msg.innerHTML = `Boa noite, agora são ${hora} horas!`
        document.body.style.backgroundColor = '#241A32'
    }
}