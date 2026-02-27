from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import crud, schemas
from database import get_db

router = APIRouter()

@router.get("/", response_model=List[schemas.Leadership])
def read_leadership(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    leadership = crud.get_leadership(db, skip=skip, limit=limit)
    return leadership
