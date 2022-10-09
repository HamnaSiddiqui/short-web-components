const body = document.querySelector("body");
const ball = document.querySelector(".ball");
const btns = document.querySelectorAll(".btns");
const screen = document.querySelector(".screen");
const equalbtn = document.querySelector(".btn-equal");
const resetbtn = document.querySelector(".btn-reset");
const delbtn = document.querySelector('.btn-del');
const mainbtns = document.querySelectorAll('.main-btns');

// styling references
// const btnprim = document.querySelectorAll(".btn-prim");
const keypadbackground = document.querySelector(".main");
const togglebackground = document.querySelector(".toggle");
const display = document.querySelector(".display");
const lst = document.querySelectorAll(".txt");
const font1 = document.querySelector(".font1");
const font2 = document.querySelectorAll(".font2");
const toggleid = document.querySelectorAll(".toggle-id");



ball.addEventListener('click', function () {
    let active = ball.classList.contains('active');
    let pro = ball.classList.contains('pro');
    let initial = ball.classList.contains('initial');


    if(!active && !pro){
        ball.classList.add('active');
        ball.classList.add('initial');
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
        keypadbackground.style.backgroundColor = "hsl(0, 5%, 81%)";
        togglebackground.style.backgroundColor = "hsl(0, 5%, 81%)";
        display.style.backgroundColor = "hsl(0, 0%, 93%)";
        screen.style.backgroundColor = "hsl(0, 0%, 93%)";
        ball.style.backgroundColor = "hsl(25, 98%, 40%)";
        equalbtn.style.backgroundColor = "hsl(25, 98%, 40%)";
        screen.style.color = "black";
        for(let i=0; i<toggleid.length; i++){
            toggleid[i].style.color = "black";
        }
        for(let j=0; j<btns.length; j++){
            btns[j].style.backgroundColor = "hsl(45, 7%, 89%)";
            btns[j].style.color = "black";
            btns[j].style.border = "none";
            btns[j].style.boxShadow = "0 2px 0 0 hsl(35, 11%, 61%)";
            btns[j].addEventListener('mouseover', function () {
                btns[j].style.backgroundColor = "white";
            })
            btns[j].addEventListener('mouseout', function () {
                btns[j].style.backgroundColor = "hsl(45, 7%, 89%)";
            })
        }
        for(let x=0; x<mainbtns.length; x++){
            mainbtns[x].style.backgroundColor = "hsl(185, 42%, 37%)";
            mainbtns[x].style.boxShadow = "0 4px 0 0 hsl(185, 58%, 25%)";
            mainbtns[x].addEventListener('mouseover', function () {
                mainbtns[x].style.backgroundColor = "hsl(185, 42%, 30%)";
            })
            mainbtns[x].addEventListener('mouseout', function () {
                mainbtns[x].style.backgroundColor = "hsl(185, 42%, 37%)";
            })
        }
        for(let y=0; y<lst.length; y++){
            lst[y].style.color = "black";
        }

    }
    else if(active && !pro && initial){
        ball.classList.remove('active');
        ball.classList.remove('initial');
        ball.classList.add('pro');
        body.style.backgroundColor = "hsl(268, 75%, 9%)";
        togglebackground.style.backgroundColor = "hsl(268, 71%, 12%)";
        keypadbackground.style.backgroundColor = "hsl(268, 71%, 12%)";
        screen.style.backgroundColor = "hsl(268, 71%, 12%)";
        display.style.backgroundColor = "hsl(268, 71%, 12%)";
        screen.style.color = "yellow";
        for(let i=0; i<toggleid.length; i++){
            toggleid[i].style.color = "yellow";
        }

        equalbtn.style.backgroundColor = "hsl(176, 100%, 44%)";
        equalbtn.style.boxShadow = "0 4px 0 0 hsl(177, 92%, 70%)";
        equalbtn.addEventListener('mouseover', function () {
            equalbtn.style.backgroundColor = "hsl(176, 100%, 69%)";
        })
        equalbtn.addEventListener('mouseout', function () {
            equalbtn.style.backgroundColor = "hsl(176, 100%, 44%)";
        })

        ball.style.backgroundColor = "hsl(176, 100%, 44%)";

        for(let j=0; j<btns.length; j++){
            btns[j].style.backgroundColor = "hsl(268, 47%, 21%)";
            btns[j].style.color = "yellow";
            btns[j].style.border = "none";
            btns[j].style.boxShadow = "0 2px 0 0 hsl(290, 70%, 36%)";
            btns[j].addEventListener('mouseover', function () {
                btns[j].style.backgroundColor = "hsl(268, 47%, 33%)";
            })
            btns[j].addEventListener('mouseout', function () {
                btns[j].style.backgroundColor = "hsl(268, 47%, 21%)";
            })
        }
        for(let x=0; x<mainbtns.length; x++){
            mainbtns[x].style.backgroundColor = "hsl(281, 89%, 26%)";
            mainbtns[x].style.boxShadow = "0 4px 0 0 hsl(285, 91%, 52%)";
            mainbtns[x].addEventListener('mouseover', function () {
                mainbtns[x].style.backgroundColor = "hsl(281, 89%, 35%)";
            })
            mainbtns[x].addEventListener('mouseout', function () {
                mainbtns[x].style.backgroundColor = "hsl(281, 89%, 26%)";
            })
        }
        for(let y=0; y<lst.length; y++){
            lst[y].style.color = "yellow";
        }
    }
    else if(pro && !active){
        ball.classList.remove('pro');
        ball.classList.add('active');
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
        keypadbackground.style.backgroundColor = "hsl(0, 5%, 81%)";
        togglebackground.style.backgroundColor = "hsl(0, 5%, 81%)";
        display.style.backgroundColor = "hsl(0, 0%, 93%)";
        screen.style.backgroundColor = "hsl(0, 0%, 93%)";
        ball.style.backgroundColor = "hsl(25, 98%, 40%)";
        equalbtn.style.backgroundColor = "hsl(25, 98%, 40%)";
        equalbtn.style.boxShadow = "0 4px 0 0 hsl(25, 99%, 27%)";
        equalbtn.addEventListener('mouseover', function () {
            equalbtn.style.backgroundColor = "hsl(25, 98%, 49%)";
        })
        equalbtn.addEventListener('mouseout', function () {
            equalbtn.style.backgroundColor = "hsl(25, 98%, 40%)";
        })
        screen.style.color = "black";
        for(let i=0; i<toggleid.length; i++){
            toggleid[i].style.color = "black";
        }
        for(let j=0; j<btns.length; j++){
            btns[j].style.backgroundColor = "hsl(45, 7%, 89%)";
            btns[j].style.color = "black";
            btns[j].style.border = "none";
            btns[j].style.boxShadow = "0 2px 0 0 hsl(35, 11%, 61%)";
            btns[j].addEventListener('mouseover', function () {
                btns[j].style.backgroundColor = "white";
            })
            btns[j].addEventListener('mouseout', function () {
                btns[j].style.backgroundColor = "hsl(45, 7%, 89%)";
            })
        }
        for(let x=0; x<mainbtns.length; x++){
            mainbtns[x].style.backgroundColor = "hsl(185, 42%, 37%)";
            mainbtns[x].style.boxShadow = "0 4px 0 0 hsl(185, 58%, 25%)";
            mainbtns[x].addEventListener('mouseover', function () {
                mainbtns[x].style.backgroundColor = "hsl(185, 42%, 30%)";
            })
            mainbtns[x].addEventListener('mouseout', function () {
                mainbtns[x].style.backgroundColor = "hsl(185, 42%, 37%)";
            })
        }
        for(let y=0; y<lst.length; y++){
            lst[y].style.color = "black";
        }
    }
    else{
        ball.classList.remove('active');
        body.style.backgroundColor = "hsl(222, 26%, 31%)";
        keypadbackground.style.backgroundColor = "hsl(223, 31%, 20%)";
        togglebackground.style.backgroundColor = "hsl(223, 31%, 20%)";
        display.style.backgroundColor = "hsl(224, 36%, 15%)";
        screen.style.backgroundColor = "hsl(224, 36%, 15%)";
        ball.style.backgroundColor = "hsl(6, 63%, 50%)";
        equalbtn.style.backgroundColor = "hsl(6, 63%, 50%)";
        equalbtn.style.boxShadow = "0 2px 0 0 hsl(6, 70%, 34%)";
        equalbtn.addEventListener('mouseover', function () {
            equalbtn.style.backgroundColor = "hsl(6, 63%, 40%)";
        })
        equalbtn.addEventListener('mouseout', function () {
            equalbtn.style.backgroundColor = "hsl(6, 63%, 50%)";
        })
        screen.style.color = "white";
        for(let i=0; i<toggleid.length; i++){
            toggleid[i].style.color = "white";
        }
        for(let j=0; j<btns.length; j++){
            btns[j].style.backgroundColor = "hsl(30, 25%, 89%)";
            btns[j].style.color = "hsl(221, 14%, 31%)";
            btns[j].style.border = "none";
            btns[j].style.boxShadow = "0 2px 0 0 hsl(28, 16%, 65%)";
            btns[j].addEventListener('mouseover', function () {
                btns[j].style.backgroundColor = "white";
            })
            btns[j].addEventListener('mouseout', function () {
                btns[j].style.backgroundColor = "hsl(45, 7%, 89%)";
            })
        }
        for(let x=0; x<mainbtns.length; x++){
            mainbtns[x].style.backgroundColor = "hsl(225, 21%, 49%)";
            mainbtns[x].style.boxShadow = "0 4px 0 0 hsl(224, 28%, 35%)";
            mainbtns[x].addEventListener('mouseover', function () {
                mainbtns[x].style.backgroundColor = "hsl(225, 21%, 41%)";
            })
            mainbtns[x].addEventListener('mouseout', function () {
                mainbtns[x].style.backgroundColor = "hsl(225, 21%, 49%)";
            })
        }
        for(let y=0; y<lst.length; y++){
            lst[y].style.color = "white";
        }
    }
})

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function () {
        let res = btns[i].getAttribute('data-num');
        screen.value += res;
    })
}

equalbtn.addEventListener('click', function () {
    let val = eval(screen.value);
    if(!screen.value){return}
    else{screen.value = val;}
})

resetbtn.addEventListener('click', function () {
    screen.value = '';
})

delbtn.addEventListener('click',function () {
    // for(let i=0; i<screen.value;i++){
        
    // }
    screen.value = screen.value.slice(0,-1);
})