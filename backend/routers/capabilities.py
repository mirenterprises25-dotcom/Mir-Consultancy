from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import crud, schemas
from database import get_db

router = APIRouter()

@router.get("/", response_model=List[schemas.Capability])
def read_capabilities(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    capabilities = crud.get_capabilities(db, skip=skip, limit=limit)
    return capabilities

@router.get("/{slug}", response_model=schemas.Capability)
def read_capability(slug: str, db: Session = Depends(get_db)):
    db_capability = crud.get_capability_by_slug(db, slug=slug)
    if db_capability is None:
        raise HTTPException(status_code=404, detail="Capability not found")
    return db_capability
