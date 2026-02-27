from sqlalchemy.orm import Session
import models, schemas

def get_industries(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Industry).offset(skip).limit(limit).all()

def get_industry_by_slug(db: Session, slug: str):
    return db.query(models.Industry).filter(models.Industry.slug == slug).first()

def get_capabilities(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Capability).offset(skip).limit(limit).all()

def get_capability_by_slug(db: Session, slug: str):
    return db.query(models.Capability).filter(models.Capability.slug == slug).first()

def get_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Category).offset(skip).limit(limit).all()

def get_insights_by_category(db: Session, category_slug: str, skip: int = 0, limit: int = 100):
    category = db.query(models.Category).filter(models.Category.slug == category_slug).first()
    if not category:
        return []
    return db.query(models.Insight).filter(models.Insight.category_id == category.id).offset(skip).limit(limit).all()

def get_insight_by_slug(db: Session, slug: str):
    return db.query(models.Insight).filter(models.Insight.slug == slug).first()

def get_leadership(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Leadership).offset(skip).limit(limit).all()

def get_page_by_slug(db: Session, slug: str):
    return db.query(models.Page).filter(models.Page.slug == slug).first()
