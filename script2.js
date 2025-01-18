function listOfColours(colours) {
  // Write your code here...
const dive=document.querySelector("#content");
const select=document.createElement("select");
dive.append(select);


const defaultOption=document.createElement("option");
defaultOption.textContent="Choose a color....."
defaultOption.disabled=true;
defaultOption.selected=true;
select.append(defaultOption);
colours.forEach(element => {
  
const option=document.createElement("option");
option.textContent=element;
select.append(option);

});

const p=document.createElement("p");
dive.append(p);
select.addEventListener("change",(e)=>{
if(e.target.value===""){
p.textContent="";
}else{
  p.textContent=`You have selected: ${e.target.value}`
  p.style.color=e.target.value;
  
}


})

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
