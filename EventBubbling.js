document.getElementById('child').addEventListener("click",(event)=>{
    console.log("Button clicked");
    event.stopPropagation();  //stopping propagation 
})
document.getElementById('parent').addEventListener("click",()=>{
    console.log("Button clicked");
})

document.getElementById('list').addEventListener('click',(event)=>{
    console.log('List clicked',event.target.innerText);
    event.stopPropagation();  //stopping propation
})
document.getElementById('languages').addEventListener('click',()=>{
    console.log('parent clicked');
})