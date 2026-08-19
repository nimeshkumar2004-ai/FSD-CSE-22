const bookdata=[
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSOJOEN8OCO0sPX1Kv_N7pbFOUxX_r7vrSIyuRWsDcA&s=10",price:234},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqjIwErrmsQFwSkx2DpFrYk3lEn_axGsFgiBXG8Sn4Q&s=10",price:433},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rYQ_y-tRLm3edki7P7CoflK9jrue2CTzn7HOkhPztA&s=10",price:534},

]
function Book(data){
const div=document.createElement("div");
div.setAttribute("class","book");
const image = document.createElement("img");
image.setAttribute("src",data.image);
image.setAttribute("height","100px");
image.setAttribute("width","100px");
const h2=document.createElement("h2");
h2.innerText="Price:"+data.price+"/-";
h2.style.color="blue";
const bt = document.createElement("button");
bt.innerText="AddToCart";
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
return div;
}
// const parent = document.getElementById("book");
// parent.appendChild(div);

const bookstore=bookdata.map((b)=>(
    Book(b)
))
const parent=document.getElementById("bookstore");
for(i of bookstore){
parent.appendChild(i);
}