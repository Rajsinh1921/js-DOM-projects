const arr = [{dp : "1.jpg", story : "2.jpg"}, {dp : "3.jpg", story : "4.jpg"},{dp : "5.jpg", story : "6.jpg"},{dp : "7.jpg", story : "8.jpg"},{dp : "9.jpg", story : "10.jpg"}];

let story = document.querySelector('#storybar')
let clutter = '';

arr.forEach(function(ele,idx){
    clutter += `<div class = "story">
    <img id = "${idx}" src="${ele.dp}" alt="">
</div>`
})

document.querySelector('#storybar').innerHTML = clutter;

story.addEventListener('click',function(debt){
    document.querySelector('#fullscreen').style.display = 'block';
    document.querySelector('#fullscreen').style.backgroundImage = `url(${arr[debt.target.id].story})`

    setTimeout(() => {
    document.querySelector('#fullscreen').style.display = 'none';
    }, 3000);
});