let body = document.querySelector('body');
let container = document.querySelector('.container');
let divs = [];
let btn = document.querySelector('.btn');
let rgbColors = [];


// let 

for (let index = 0; index < 256; index++) {
    divs.push(document.createElement('div'));
    container.appendChild(divs[index]);
    // divs[index].style = 'width: 50px; height: 50px; background-color: red; margin: 10px';
}




btn.addEventListener('click', grid);
divs.forEach(div => {
    div.addEventListener('mouseover', color, {once:true})
});

function grid() {
    let num = prompt('how many squares do you want in this grid (number has to be between 0-100)?');
    if (num != null) {
        clear();
        num = Math.abs(num);
        while (num > 100) {
            num = Math.abs(prompt('how many squares do you want in this grid (number has to be between 0-100)?'));
        }

        let total = num * num;
        let widthDiv = 960 / num;
        let height = 600 / num;
        for (let index = 0; index < total; index++) {
            divs.push(document.createElement('div'));
            // body.appendChild(divs[index]);
            container.appendChild(divs[index]);
            divs[index].style = `width: ${widthDiv}px; height: ${height}px; padding: 0px`;
        }
        container.style = `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr)`;
    }

    divs.forEach(div => {
        div.addEventListener('mouseover', color, {once: true})
    });

}

function clear() {
    divs.forEach(div => {
        container.removeChild(div);
    });
    divs = [];
}
function randomNum() {
    let num1 = Math.floor(Math.random() * 256);
    // console.log(`num1 is `+num1);
    return num1;
}


function color(e) {
    dark = 100;
    for (i = 0; i < 3; i++) {
        rgbColors[i] = randomNum();
    }
    e.target.style.background = `rgb(${rgbColors[0]},${rgbColors[1]},${rgbColors[2]})`;
    //initializing brightness
    e.target.style.filter = `brightness(100%)`;
    
    e.target.addEventListener('mouseover', goBlackColor);
    
}


function goBlackColor(e) {
   
    let initialB = e.target.style.filter;
    let filterNum = Number(initialB.replace(/\D|\s/g, ""));
    e.target.style.filter = `brightness(${filterNum - 10}%)`;
   
   
    
    
    console.log(e.target.style.filter);


}
















// container.appendChild(divs);    

// divs.style.border = 'thick solid #0000FF';