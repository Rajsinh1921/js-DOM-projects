const sat = document.querySelector('#p');
const addtofriend = document.querySelector('#Add');
let state = 0;

addtofriend.addEventListener('click',function(){
    if (state == 0){
        sat.innerHTML = "Mitra";
        sat.style.color = "green";
        addtofriend.innerHTML = 'remove'
        state = 1; 
   
    } else {

        sat.innerHTML = 'cant';
        sat.style.color = 'red';
        addtofriend.innerHTML = '+ Add'

        state = 0;
    }
})
