import React from "react";

import ProductList from "../components/ProductList";
import OrderForm from "../components/OrderForm";
import OrderHistory from "../components/OrderHistory";

function Home(){

return(

<div>

<h1>Order Dashboard</h1>

<div className="dashboard-grid">

<div className="card">
<ProductList/>
</div>

<div className="card">
<OrderForm/>
</div>

</div>

<div className="card">
<OrderHistory/>
</div>

</div>

)

}

export default Home;