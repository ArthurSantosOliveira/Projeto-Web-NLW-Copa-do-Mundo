function criaJogo(timeUm, hora, timeDois){
return`       
<li>
    <img src="./imagens/bandeirasTimes/${timeUm}.svg" alt="Bandeira da ${timeUm}">       
    <strong>${hora}</strong>        
    <img src="./imagens/bandeirasTimes/${timeDois}.svg" alt="Bandeira do ${timeDois}">             
</li>
`
}

function criaCartao(data,dia,criaJogo){
return`
<div class="card">
    <h2>${data}<span>${dia}</span></h2>
    <ul>
        ${criaJogo}
    </ul>
</div>
`
}

document.querySelector('#app').innerHTML = `
<header>
    <img src="./imagens/logoNLW/logoNLW.svg" alt="Logotipo NLW">
</header>
    <main id="cartoes">
        ${
        criaCartao("20/11","Domingo",
        criaJogo("qatar", "13:00", "ecuador") 
        )}
    
        ${
        criaCartao("21/11", "Segunda",
        criaJogo("england", "10:00", "iran") + criaJogo("united states", "16:00", "wales")
        )}
    </main>
`