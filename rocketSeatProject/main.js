function criaJogo(timeUm, hora, timeDois){
return`       
<nav class="menu">
        <li>
            <button type="button" class="botao" >
                <img src="./imagens/bandeirasTimes/${timeUm}.svg" alt="Bandeira da ${timeUm}">       
            </button>
            <strong>${hora}</strong>        
            <button type="button" class="botao">
                <img src="./imagens/bandeirasTimes/${timeDois}.svg" alt="Bandeira do ${timeDois}">
            </button>        
        </li>
</nav>
`
}

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
        +
        criaCartao("","",
        criaJogo("","","")+criaJogo("","","")+criaJogo("","","")+criaJogo("","",""))
        
