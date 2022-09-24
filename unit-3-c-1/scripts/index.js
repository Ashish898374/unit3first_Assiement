//store the products array in localstorage as "products"
  let data=JSON.parse(localStorage.getItem("products")) ||[];
  function ment(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
  }

  function getdata(e){
    e.preventDefault();
    let from=document.getElementById("products");
    let types=from.type.value;
    let desc=from.desc.value;
    let price=from.price.value;
    let image=from.image.value;
    let put= new ment(types,desc,price,image)
    console.log(put)
    data.push(put)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();
  }
  document.getElementById("show_products").addEventListener("click",function(){
    window.location.href="inventory.html"
  })