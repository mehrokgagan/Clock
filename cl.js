let toggle = document.createElement('button');
document.body.appendChild(toggle)
toggle.innerHTML='<big> Theme </big>';
toggle.style.padding='1rem'
toggle.style.marginLeft='47%'
toggle.style.marginTop='10px'
toggle.style.borderRadius='60%'
toggle.style.background='black'
toggle.style.color='white'

let bcg = document.querySelector('.headclock');
let color = 1

toggle.addEventListener('click', ()=>{
    if(color === 1){
        bcg.style.background = 'red'
        toggle.style.background='red'
        color= 2
    }
    else if(color === 2){
        bcg.style.background='blue'
        toggle.style.background='blue'
        color = 3
    }
    else if(color === 3){
        bcg.style.background='green'
        toggle.style.background='green'
        color = 4
    }
    else if(color === 4){
        bcg.style.background='yellow'
        toggle.style.background='yellow'
        color = 5
    }
    else if(color === 5){
        bcg.style.background='black'
        toggle.style.background='black'
        color = 1
    }
})
