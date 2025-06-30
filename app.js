let btn=document.querySelector("button");
btn.addEventListener("click",function()
{
    let input=document.querySelector("input");
    let ul=document.querySelector("ul");
    let item=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete")
    item.classList.add("lis");

    item.innerText=input.value;
    ul.appendChild(item);
    item.appendChild(delbtn);
    input.value="";
   
    delbtn.addEventListener("click",function()
    {
      let toDelete=this.parentElement;
      toDelete.remove();
      
    })

});

let delBtns = document.querySelectorAll(".delete");

for(delBtn of delBtns)
{
    delBtn.addEventListener("click",function()
{
    let delItem=this.parentElement;
    delItem.remove();
  
})
}

