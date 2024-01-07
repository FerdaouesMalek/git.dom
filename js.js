var container=document.getElementById("container")
var box=document.getElementsByClassName("box")
var totalprice=document.getElementById("total-cost")

 let total=0

 for(let i=0;i<box.length;i++){
    let boxes=box[i]
    let btn1=document.getElementsByClassName("btn1")[0]
    let btn2=document.getElementsByClassName("btn2")[0]
    let Delete=document.getElementsByClassName("delete")[0]
    let Like=document.getElementsByClassName("like")[0]
    let quantity=document.getElementsByClassName("quantity")[0]
 }

 btn2.addEventListener("click", () => {
   if (quantityInput.value > 1) {
     quantityInput.value--;
     total -= price;
     totalPrice.innerText = `Total Price: $${total}`;
   }
 });
 btn1.addEventListener("click", () => {
   quantityInput.value++;
   total += price;
   totalPrice.innerText = `Total Price: $${total}`;
 });

 deleteBtn.addEventListener("click", () => {
   item.remove();
   total -= price * quantityInput.value;
   totalPrice.innerText = `Total Price: $${total}`;
 });

       $(".heart.fa").click(function() {
         $(this).toggleClass("fa-heart fa-heart-o");
       });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          