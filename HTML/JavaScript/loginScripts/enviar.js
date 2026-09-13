const submit = document.getElementById('submit');
submit.addEventListener('click', takeAnswer);

async function  takeAnswer(){

    let usuario = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    
    const resposta = await sendDados(usuario, senha);


    if(!resposta.ok){
        let er = document.getElementById('errorLogin');
        er.style.display='flex';
        psswdInput.value=''

        setTimeout(()=>{
            er.style.display='none';
        }, 3800)
        
    }
    else{
        let dados = resposta.json();
        localStorage.setItem('token', dados.token)
        alert('arrasou')
    }

}