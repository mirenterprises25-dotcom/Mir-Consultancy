from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class IndustryBase(BaseModel):
    title: str
    slug: str
    description: str
    image_url: Optional[str] = None

class Industry(IndustryBase):
    id: int
    class Config:
        from_attributes = True

class CapabilityBase(BaseModel):
    title: str
    slug: str
    description: str
    icon: Optional[str] = None

class Capability(CapabilityBase):
    id: int
    class Config:
        from_attributes = True

class CategoryBase(BaseModel):
    name: str
    slug: str

class Category(CategoryBase):
    id: int
    class Config:
        from_attributes = True

class InsightBase(BaseModel):
    title: str
    slug: str
    description: str
    content: str
    image_url: Optional[str] = None
    category_id: int

class Insight(InsightBase):
    id: int
    published_date: datetime
    category: Category
    class Config:
        from_attributes = True

class LeadershipBase(BaseModel):
    name: str
    role: str
    bio: str
    image_url: Optional[str] = None
    linkedin_url: Optional[str] = None

class Leadership(LeadershipBase):
    id: int
    class Config:
        from_attributes = True

class PageBase(BaseModel):
    title: str
    slug: str
    content: str

class Page(PageBase):
    id: int
    class Config:
        from_attributes = True
