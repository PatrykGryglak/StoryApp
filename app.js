
const startPage = document.querySelector('.start-page');
const titleContainer = document.querySelector('.title-container');
const firstChapter = document.querySelector('.first-chapter');


function titleMove(){
    startPage.addEventListener('mousemove', (e)=>{
        let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 35;
        titleContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
}

titleMove();

function starCreator(){    
    const starNum = Math.floor(Math.random() * (200 - 140 + 1) + 140);
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


function countDown(){
    const powerButton = document.querySelector('.fa-solid, fa-power-off');
    const earth = document.querySelector('.earth');

    powerButton.addEventListener('click', ()=>{
        let timeLeft = 3;
        const timer = document.createElement('p');
        timer.classList.add('timer');
        timer.innerHTML = timeLeft;
        startPage.append(timer);
        powerButton.style['pointer-events'] = 'none';
        // black bg spreading
        let blackPrecent = 40;
        const blackOut = setInterval(()=>{
            if(blackPrecent>=100){
                clearInterval(blackOut);
                earth.style.opacity = '0';
                earth.style.transition = '1s ease';
                // Main title hiding
                let titleSize = 56;
                const titleH = document.querySelector('.main-title');
                const titleHide = setInterval(()=>{
                    if(titleSize<=0){
                        clearInterval(titleHide);
                    }   
                    titleH.style['font-size'] = `${titleSize}px`;
                    titleSize -= 1;
                },30);
            };
            startPage.style.background = `radial-gradient(circle, rgba(34,33,33,1) ${blackPrecent}%,
            rgba(115,23,90,1) 100%)`;
            blackPrecent += 1;
        },50);
        // timer and boom
        const cntDwn = setInterval(()=>{
            if(timeLeft<=1){
                clearInterval(cntDwn);
                timer.remove(timer);
                const boom = document.createElement('p');
                boom.classList.add('timer');
                boom.innerHTML = 'BOOM';
                startPage.append(boom);
                setTimeout(()=>{
                    boom.style.opacity = '0';
                    boom.style.transition = '1s ease';
                }, 1500);
            }
            timer.innerHTML = timeLeft - 1;
            timeLeft -= 1;
        }, 1000);
    })
}
countDown();

