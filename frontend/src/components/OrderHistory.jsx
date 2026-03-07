import React,{useEffect,useState} from "react";

function OrderHistory(){

const [orders,setOrders] = useState([]);

useEffect(()=>{

fetch("http://localhost:8000/orders")
.then(res=>res.json())
.then(data=>setOrders(data))

},[])

return(

<div>

<h2>Orders</h2>

<table>

<thead>

<tr>
<th>Product</th>
<th>Quantity</th>
</tr>

</thead>

<tbody>

{orders.map((o,i)=>(
<tr key={i}>
<td>{o.product}</td>
<td>{o.quantity}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default OrderHistory;