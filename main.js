let elemento = document.querySelectorAll('.tecla');
for(let i = 0; i < elemento.length; i++){
    const tecla = elemento[i]
    const instrumento = tecla.classList[1];/*irá retornar a segunda classe tecla_pom por exemplo*/
    const idAudio = `#som_${instrumento}`;
 
    tecla.onclick = ()=>{
        tocasom(idAudio);
    }
    tecla.onkeydown = (evento)=>{ /*Quando a tecla estiver abaixada*/
        console.log(evento);/*pegarmos qual o code estamos capturando das teclas*/
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');/*Adicionamos a classe ativa a esse elemento*/
        }
    }
    tecla.onkeyup = (evento)=>{
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.remove('ativa');
        }
    }
}

function tocasom(idelemento){
    document.querySelector(idelemento).play();
}

