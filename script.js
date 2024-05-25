let toggled = document.getElementById("container");
let ids=document.querySelector("body");
let img=document.getElementById("image")
let circle=document.getElementById("circle");
let h1=document.getElementById("h1");

function changed(){
    // circle.style.transform="translateX(4.5vw)";
    // ids.style.background="black";
    // ids.style.color="white"
    // circle.classList.toggle("active");
    toggled.classList.toggle("active");
    ids.classList.toggle("active");
    img.classList.toggle("active");
    h1.classList.toggle("active");
    circle.classList.toggle("active");
    let originalText ="I am Batman!"
    if(h1.innerHTML === originalText){
        h1.innerHTML="I am vengeance!";
    }else{
        h1.innerHTML=originalText;
    }
}

// function toggle(){
//     toggled.classList.toggle("active");
//     let str="I am vengeance!";
//     h1.innerHTML=str;
// }
toggled.addEventListener("click",changed);


