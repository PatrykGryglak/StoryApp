const startPage = document.querySelector('.start-page');

function starCreator(){    
    const starNum = Math.floor(Math.random() * (200 - 140 + 1) + 140);
    console.log(starNum);

    
    for(i = 0; i<starNum; i++ ){
        const randTop = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        const randLeft = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = randTop + '%';
        star.style.left = randLeft + '%';
        startPage.append(star);
    }
}
starCreator();


const powerButton = document.querySelector('.fa-solid, fa-power-off');

function countDown(){
    const powerButton = document.querySelector('.fa-solid, fa-power-off');
    const earth = document.querySelector('.earth');
    powerButton.addEventListener('mouseover', ()=>{
        for(let i=1; i<=3; i++){
            const num = document.createElement('p');
            num.innerText = i;
            earth.append(num);
            setInterval(()=>{
                num.remove(num);
            }, 1000);
        }
    })
}
countDown();

// function rocketMouse(){
//     const rocket = document.querySelector('.rocket');
//     startPage.addEventListener('mousemove', (e)=>{
//         x = e.offsetX;
//         y = e.offsetY;
//         rocket.style.left = x + 'px';
//         rocket.style.top = y + 'px';
//     })
// }

// rocketMouse();

