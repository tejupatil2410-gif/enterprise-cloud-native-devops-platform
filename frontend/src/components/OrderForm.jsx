import React,{useState} from "react";

function OrderForm(){

const [product,setProduct] = useState("");
const [quantity,setQuantity] = useState("");

const submit = async () => {

await fetch("http://localhost:8000/orders",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
product,
quantity
})
})

alert("Order Created")

}

return(

<div>

<h2>Create Order</h2>

<input
placeholder="Product"
onChange={(e)=>setProduct(e.target.value)}
/>

<br/>

<input
placeholder="Quantity"
onChange={(e)=>setQuantity(e.target.value)}
/>

<br/>

<button onClick={submit}>Submit</button>

</div>

)

}

export default OrderForm;