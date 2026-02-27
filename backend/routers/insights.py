from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import crud, schemas
from database import get_db

router = APIRouter()

@router.get("/categories", response_model=List[schemas.Category])
def read_categories(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    categories = crud.get_categories(db, skip=skip, limit=limit)
    return categories

@router.get("/category/{category_slug}", response_model=List[schemas.Insight])
def read_insights_by_category(category_slug: str, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    insights = crud.get_insights_by_category(db, category_slug=category_slug, skip=skip, limit=limit)
    return insights

@router.get("/{slug}", response_model=schemas.Insight)
def read_insight(slug: str, db: Session = Depends(get_db)):
    db_insight = crud.get_insight_by_slug(db, slug=slug)
    if db_insight is None:
        raise HTTPException(status_code=404, detail="Insight not found")
    return db_insight
