score=0;
cross=true;
temp=1;
document.onkeydown=function(e){
   console.log(e.keyCode)
   if(e.keyCode==52){
       dinothunder=document.querySelector('.thunder');
       dinothunder.classList.add('thunder24');
       setTimeout(() => {
        dinothunder.classList.remove('thunder24');
    }, 2000);
   }
   else if(e.keyCode==51){
    capshield=document.querySelector('.shield');
    capshield.classList.add('thunder23');
    setTimeout(() => {
     capshield.classList.remove('thunder23');
 }, 2000);
   }
   else if(e.keyCode==50){
    arrow=document.querySelector('.arrow');
    arrow.classList.add('thunder22');
    setTimeout(() => {
     arrow.classList.remove('thunder22');
 }, 2000);
   }
   else if(e.keyCode==49){
    laser=document.querySelector('.laser');
    laser.classList.add('thunder21');
    setTimeout(() => {
     laser.classList.remove('thunder21');
 }, 2000);
   }
} 


setInterval(()=>{
   let x=Math.floor((Math.random() * 4) + 1);
    //console.log(x);
    if(temp==1){
    if(x==1){
        obstacle1 = document.querySelector('.obstacle1');
        obstacle1.classList.add('obstacleAni1');
    }
    else if(x==2){
        obstacle2 = document.querySelector('.obstacle2');
        obstacle2.classList.add('obstacleAni2');
    }
    else if(x==3){
        obstacle3 = document.querySelector('.obstacle3');
        obstacle3.classList.add('obstacleAni3');
    }
    else if(x==4){
        obstacle4 = document.querySelector('.obstacle4');
        obstacle4.classList.add('obstacleAni4');
    }
}
},1000);

setInterval(()=>{
   dino=document.querySelector('.dino');
   ironman=document.querySelector('.ironman');
   hawkeye=document.querySelector('.hawkeye');
   captain=document.querySelector('.captain');

   gameOver = document.querySelector('.gameOver');

   obstacle1 = document.querySelector('.obstacle1');
   obstacle2 = document.querySelector('.obstacle2');
   obstacle3 = document.querySelector('.obstacle3');
   obstacle4 = document.querySelector('.obstacle4');

   laser=document.querySelector('.laser');
   arrow=document.querySelector('.arrow');
   capshield=document.querySelector('.shield');
   dinothunder=document.querySelector('.thunder');

   dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
   ix = parseInt(window.getComputedStyle(ironman, null).getPropertyValue('left'));
   hx = parseInt(window.getComputedStyle(hawkeye, null).getPropertyValue('left'));
   cx = parseInt(window.getComputedStyle(captain, null).getPropertyValue('left'));
   //dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
   //console.log(dx);
   tix=  parseInt(window.getComputedStyle(laser, null).getPropertyValue('left'));
   tax=  parseInt(window.getComputedStyle(arrow, null).getPropertyValue('left'));
   tcx=  parseInt(window.getComputedStyle(capshield, null).getPropertyValue('left'));
   tdx=  parseInt(window.getComputedStyle(dinothunder, null).getPropertyValue('left'));
   //console.log(tx);

    oix = parseInt(window.getComputedStyle(obstacle1, null).getPropertyValue('left'));
    oax = parseInt(window.getComputedStyle(obstacle2, null).getPropertyValue('left'));
    ocx = parseInt(window.getComputedStyle(obstacle3, null).getPropertyValue('left'));
    odx = parseInt(window.getComputedStyle(obstacle4, null).getPropertyValue('left'));
    //oy = parseInt(window.getComputedStyle(obstacle4, null).getPropertyValue('bottom'));

    //console.log(ox);
    if(odx>=dx-100 && odx<=dx+100){
        gameOver.classList.add('gameOVER');
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle1.classList.remove('obstacleAni1');
        obstacle2.classList.remove('obstacleAni2');
        obstacle3.classList.remove('obstacleAni3');
        obstacle4.classList.remove('obstacleAni4');
        temp=0;
        //obstacle.style.left=dx+"px";
    }
    if(oix>=ix-100 && oix<=ix+100){
        gameOver.classList.add('gameOVER');
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle1.classList.remove('obstacleAni1');
        obstacle2.classList.remove('obstacleAni2');
        obstacle3.classList.remove('obstacleAni3');
        obstacle4.classList.remove('obstacleAni4');
        temp=0;
        //obstacle.style.left=dx+"px";
    }
    if(oax>=hx-100 && oax<=hx+100){
        gameOver.classList.add('gameOVER');
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle1.classList.remove('obstacleAni1');
        obstacle2.classList.remove('obstacleAni2');
        obstacle3.classList.remove('obstacleAni3');
        obstacle4.classList.remove('obstacleAni4');
        temp=0;
        //obstacle.style.left=dx+"px";
    }
    if(ocx>=cx-100 && ocx<=cx+100){
        gameOver.classList.add('gameOVER');
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle1.classList.remove('obstacleAni1');
        obstacle2.classList.remove('obstacleAni2');
        obstacle3.classList.remove('obstacleAni3');
        obstacle4.classList.remove('obstacleAni4');
        temp=0;
        //obstacle.style.left=dx+"px";
    }

    if(tdx>=odx && tdx<=odx+200){
        dinothunder.classList.remove('thunder24')
        obstacle4.classList.remove('obstacleAni4')
        obstacle4.style.left="-110vw";
        score=score+1;
        updateScore(score);
    }
    else if(tix>=oix && tix<=oix+200){
        laser.classList.remove('thunder21')
        obstacle1.classList.remove('obstacleAni1')
        obstacle1.style.left="-110vw";
        score=score+1;
        updateScore(score);
    }
    else if(tax>=oax && tax<=oax+200){
        arrow.classList.remove('thunder22')
        obstacle2.classList.remove('obstacleAni2')
        obstacle2.style.left="-110vw";
        score=score+1;
        updateScore(score);
    }
    else if(tcx>=ocx && tcx<=ocx+200){
        capshield.classList.remove('thunder23')
        obstacle3.classList.remove('obstacleAni3')
        obstacle3.style.left="-110vw";
        score=score+1;
        updateScore(score);
    }
    
},100)

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
