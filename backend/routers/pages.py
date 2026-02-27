from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import crud, schemas
from database import get_db

router = APIRouter()

@router.get("/{slug}", response_model=schemas.Page)
def read_page(slug: str, db: Session = Depends(get_db)):
    db_page = crud.get_page_by_slug(db, slug=slug)
    if db_page is None:
        raise HTTPException(status_code=404, detail="Page not found")
    return db_page
