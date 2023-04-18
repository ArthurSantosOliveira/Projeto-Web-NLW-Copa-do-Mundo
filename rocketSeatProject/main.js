function criaJogo(timeUm, hora, timeDois){
return`       
<nav class="menu">
        <li>
            <img src="./imagens/bandeirasTimes/${timeUm}.svg" alt="Bandeira da ${timeUm}">       
            <strong>${hora}</strong>        
            <img src="./imagens/bandeirasTimes/${timeDois}.svg" alt="Bandeira do ${timeDois}">
        </li>     
</nav>
`
}


/* testando funcionalidade do botao
function alerta(){
    alert("ok")
}
*/


let delay = -0.3;
function criaCartao(data,dia,criaJogo){
    delay = delay + 0.3;
    return`
<div class="cartao" style="animation-delay: ${delay}s">
    <h2>${data}<span>${dia}</span></h2>
    <ul>
        ${criaJogo}
    </ul>
</div>
`
}

function criaResultado(timeUm, resultado, timeDois){
return`
<nav class="menu">
    <li>
    <img src"./imagensbandeirasTimes/${timeUm}.svg" alt="bandeira do ${timeUm}">
    <strong>${resultado}></strong>
    <img src="./imagensbandeirasTimes/${timeUm}.svg" alt="bandeira do ${timeDois}">
    </li>
`
}

document.querySelector('#cartoes').innerHTML = 
        criaCartao("20/11","Domingo",
        criaJogo("qatar", "13:00", "ecuador") ) 
        +
        criaCartao("21/11", "Segunda",
        criaJogo("england", "10:00", "iran") + criaJogo("united states", "16:00", "wales") + criaJogo("senegal", "13:00","netherlands"))
        +
        criaCartao("22/11", "Terça",
        criaJogo("argentina", "07:00", "saudi arabia") + criaJogo("denmark","10:00","tunisia") + criaJogo("mexico","13:00","poland")  + criaJogo("france","16:00","australia"))
        +
        criaCartao("23/11", "Quarta",
        criaJogo("morocco", "07:00", "croatia") + criaJogo("germany", "10:00", "japan") + 
        criaJogo("spain", "13:00", "costa rica") + criaJogo("belgium","16:00","canada"))
        +
        criaCartao("24/11","Quinta",
        criaJogo("switzerland","07:00","cameroon")+criaJogo("uruguay","10:00","south korea")+criaJogo("portugal","13:00","ghana")+criaJogo("brazil","16:00","serbia"))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))

