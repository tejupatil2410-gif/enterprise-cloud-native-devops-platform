from fastapi import APIRouter
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Product

router = APIRouter()

@router.get("/products")
def get_products():

    db: Session = SessionLocal()

    products = db.query(Product).all()

    return products