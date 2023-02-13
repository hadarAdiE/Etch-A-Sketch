let container = document.querySelector('.container');
let divs = [];
let btn = document.querySelector('.btn');
// let 

for (let index = 0; index < 256; index++) {
    divs.push(document.createElement('div'));
    container.appendChild(divs[index]);
    // divs[index].style = 'width: 50px; height: 50px; background-color: red; margin: 10px';
}


btn.addEventListener('click', grid);

function color(e) {
    e.target.style.background = 'blue';
}

function clear() {
    divs.forEach(div => {
        container.removeChild(div);
    });
    divs = [];
}

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
            container.appendChild(divs[index]);
            divs[index].style = `width: ${widthDiv}px; height: ${height}px; padding: 0px`;
        }
        container.style = `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr)`;
    }

    divs.forEach(div => {
        div.addEventListener('mouseover', color)
    });

}


divs.forEach(div => {
    div.addEventListener('mouseover', color)
});

// container.appendChild(divs);    

// divs.style.border = 'thick solid #0000FF';