const container = document.querySelector('#container');

const love = document.querySelector('i');

container.addEventListener('dblclick', function () {
    love.style.transform = 'scale(1)';
    love.style.opacity = 1;
    setTimeout(function(){
        love.style.opacity = 0
    }, 1000);
    setTimeout(function(){
        love.style.transform = 'scale(1)';
    }, 3000);
})
  