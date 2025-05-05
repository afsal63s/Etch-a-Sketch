const main=document.querySelector(".main-container");

const buttonChange=document.querySelector("#change-grid");
const gridFormat=document.querySelector("#format");

main.style.display="none";

buttonChange.addEventListener("click",()=>{
    main.innerHTML='';
    gridSize=parseInt(prompt("Enter a value (max 64)."));
    format.textContent=`Grid Format: ${gridSize} x ${gridSize}`;
    main.style.display="flex";
    main.style.width="960px";
    
    for(let i = 0; i<gridSize ; i++){
        const row=document.createElement("div");
        row.classList.add("row-container");
        for(let j=0; j<gridSize; j++){
            const square=document.createElement("div");
            square.classList.add("square-container");
            square.style.width=`${960/gridSize}px`;
            square.style.height=`${960/gridSize}px`;
            row.appendChild(square);
            square.addEventListener("mouseover",()=>{
                const randomColor=getRandomColor();
                    square.style.backgroundColor=randomColor;
            });

            square.addEventListener("mouseout",()=>{
                square.style.backgroundColor="";
            });
            
        }
        main.appendChild(row);
    }


});

function getRandomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}



