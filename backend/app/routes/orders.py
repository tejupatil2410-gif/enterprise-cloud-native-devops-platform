from fastapi import APIRouter

router = APIRouter()

orders = []

@router.get("/orders")
def get_orders():
    return orders

@router.post("/orders")
def create_order(order: dict):
    orders.append(order)
    return {"message":"order created"}