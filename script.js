let time = prompt("Enter the time period in seconds");
const firstPictureClass=" firstPicture",
      secondPictureClass=" secondPicture",
      thirdPictureClass=" thirdPicture";
let state = 0;
let date= new Date;
let hours = date.getHours();

const changePicture = ()=>{
    state++;

    if (state===4){
        state=1;
    }
    console.log(state);
    switch (state) {
        case(1):
            document.getElementById("picture").className=firstPictureClass;
            break;
        case(2):
            document.getElementById("picture").className=secondPictureClass;
            break;
        case(3):
            document.getElementById("picture").className=thirdPictureClass;
            break;

    }
    return setStart();
}

const setStart=()=> {
    setTimeout(changePicture, time * 1000);

}

const mainFunc =() =>{
    console.log(hours);
    if ((hours >= 0) && (hours < 8)) {
        document.body.style.backgroundColor = "yellow";
    } else if ((hours >= 8) && (hours < 16)) {
        document.body.style.backgroundColor = "blue";
    } else if ((hours >= 16) && (hours < 23)) {
        document.body.style.backgroundColor = "red";
    }
    setStart();
}

const generateRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const createTable = () =>{
    document.querySelector('.cal').innerHTML = '<table class="table"></table>';
    document.querySelector('table').style.border = "solid black 1px";
    document.querySelector('table').style.backgroundColor = "white  ";
    let min;
    min = +document.querySelectorAll("input")[0].value;
    let max;
    max = +document.querySelectorAll("input")[1].value;
    console.log(min);
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        document.querySelector('table').appendChild(tr);
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            document.querySelectorAll('tr')[i].appendChild(td);
            document.querySelectorAll('tr')[i].querySelectorAll('td')[j].textContent = generateRandomIntegerInRange(min,max);
        }
    }
    let cells = document.querySelectorAll('td');
    for(let i = 0;i<10;i++){
        for(let j=0;j<10;j++){
            if (!(i%2 == 0)){
                if((j%2 == 0)){
                    document.querySelectorAll('td')[(i*10)+j].style.backgroundColor="black";
                    document.querySelectorAll('td')[(i*10)+j].style.color="white";
                }
            }else {
                if(!(j%2 == 0)){
                    document.querySelectorAll('td')[(i*10)+j].style.backgroundColor="black";
                    document.querySelectorAll('td')[(i*10)+j].style.color="white";
                }
            }
        }
    }
}






