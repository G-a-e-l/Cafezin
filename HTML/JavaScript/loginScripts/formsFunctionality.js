
const forms = document.getElementsByTagName('input')
for(inps of forms){
    inps.addEventListener('keydown',(e)=>{
        if(e.key=='Enter'){
            takeAnswer();
        }
    })
}

let olho = document.getElementById('psswdEye');
let psswdInput = document.getElementById('password');
let clicks=true;

olho.addEventListener('click',()=>{
    clicks = !clicks;
    if(clicks===false){
        olho.src='icones/FormIcons/olhoSemBarreiras.svg';
        psswdInput.type='text'
    }
    else if(clicks===true){
        olho.src='icones/FormIcons/psswdEye.svg'
        psswdInput.type='password'
    }
})