const flip =document.getElementById("color");
const flip_2=document.getElementById("color1");
const dummy =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let res = '#'
flip_2.addEventListener('click',()=>{
    //let res = '#'
    for(let i=0;i<6;i++){
        res+=dummy[newfunc()];
        console.log(res)
    }
    flip.textContent = res;
    document.body.style.backgroundColor= res;
});
//flip.textContent = res;
//document.body.style.backgroundColor= res;
const newfunc=()=>{
    return Math.floor(Math.random() * dummy.length);
}