let arr=JSON.parse(localStorage.getItem("products")) || [];
     justfy(arr)
function justfy(arr){
    arr.forEach(function(el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;

        let type=document.createElement("p")
        
        type.innerText=el.type;
        type.style.marginLeft="100px"
        let des=document.createElement("p");
        des.innerText=el.desc;
        des.style.marginLeft="100px"
        let price=document.createElement("p");
        price.innerText=el.price;
        price.style.marginLeft="100px"
        let btn=document.createElement("button")
        btn.innerText="Remove";
        btn.style.marginLeft="100px"
        btn.style.backgroundColor="grey"
        btn.addEventListener("click",function(){
           remove(el,index)
        })
        div.append(img,type,des,price,btn)

        document.querySelector("#all_products").append(div)
        console.log(arr)


    })
}
     function remove(el,index){
        arr.splice(index,1)
        
        localStorage.setItem("products",JSON.stringify(arr));
        window.location.reload();
     }
     document.getElementById("add_more_product").addEventListener("click",function(){
        window.location.href="index.html";
     })