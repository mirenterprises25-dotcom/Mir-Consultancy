from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import crud, schemas
from database import get_db

router = APIRouter()

@router.get("/", response_model=List[schemas.Industry])
def read_industries(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    industries = crud.get_industries(db, skip=skip, limit=limit)
    return industries

@router.get("/{slug}", response_model=schemas.Industry)
def read_industry(slug: str, db: Session = Depends(get_db)):
    db_industry = crud.get_industry_by_slug(db, slug=slug)
    if db_industry is None:
        raise HTTPException(status_code=404, detail="Industry not found")
    return db_industry
