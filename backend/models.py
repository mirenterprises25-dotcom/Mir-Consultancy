from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Industry(Base):
    __tablename__ = "industries"
    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    image_url = Column(String, nullable=True)

class Capability(Base):
    __tablename__ = "capabilities"
    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    icon = Column(String, nullable=True)

class Category(Base):
    # E.g., Case Studies, Articles, Blogs, Podcasts
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    slug = Column(String, unique=True)
    insights = relationship("Insight", back_populates="category")

class Insight(Base):
    __tablename__ = "insights"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    slug = Column(String, unique=True, index=True)
    description = Column(Text)
    content = Column(Text) # Markdown or HTML
    image_url = Column(String, nullable=True)
    published_date = Column(DateTime, default=datetime.utcnow)
    category_id = Column(Integer, ForeignKey("categories.id"))
    category = relationship("Category", back_populates="insights")
    
class Leadership(Base):
    __tablename__ = "leadership"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    role = Column(String)
    bio = Column(Text)
    image_url = Column(String, nullable=True)
    linkedin_url = Column(String, nullable=True)

class Page(Base):
    __tablename__ = "pages"
    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True)
    title = Column(String)
    content = Column(Text) # Allows adding arbitrary pages like "Our History", "Company Future"
