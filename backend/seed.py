import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database import SessionLocal, engine, Base
import models
from datetime import datetime

# Initialize the DB
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)

def seed():
    db = SessionLocal()

    # 1. Categories
    categories = [
        models.Category(name="Case Studies", slug="case-studies"),
        models.Category(name="Articles", slug="articles"),
        models.Category(name="Blogs", slug="blogs"),
        models.Category(name="Podcasts", slug="podcasts"),
    ]
    db.add_all(categories)
    db.commit()
    
    # 2. Industries
    industries = [
        models.Industry(slug="restaurants-fast-food", title="Restaurants & Fast Food", description="Scaling dining experiences and optimizing kitchen operations for global food brands."),
        models.Industry(slug="hotels-hospitality", title="Hotels & Hospitality", description="Elevating guest experiences and streamlining property management for luxury stays."),
        models.Industry(slug="retail-grocery", title="Retail & Grocery", description="Transforming supply chains and amplifying customer experiences in modern retail."),
        models.Industry(slug="tourism-businesses", title="Tourism Businesses", description="Driving destination growth through strategic planning and digital transformation."),
        models.Industry(slug="future-industry", title="Future Industry", description="Pioneering solutions for tomorrow's emerging markets and disruptive technologies.")
    ]
    db.add_all(industries)
    db.commit()

    # 3. Capabilities
    capabilities = [
        models.Capability(slug="operations-optimization", title="Operations Optimization", description="Streamlining processes to maximize efficiency and reduce operational bottlenecks.", icon="Settings"),
        models.Capability(slug="data-analytics-bi", title="Data Analytics & BI", description="Leveraging data to uncover actionable insights and drive strategic decision-making.", icon="BarChart"),
        models.Capability(slug="business-expansion-strategy", title="Business Expansion Strategy", description="Architecting blueprints for sustainable growth and market penetration.", icon="TrendingUp"),
        models.Capability(slug="digital-transformation", title="Digital Transformation", description="Guiding organizations through comprehensive technological evolution.", icon="Cpu"),
        models.Capability(slug="custom-applications", title="Custom Applications", description="Developing tailored software solutions to meet unique business challenges.", icon="Code")
    ]
    db.add_all(capabilities)
    db.commit()

    # 4. Insights (Mock data)
    case_study_cat = db.query(models.Category).filter(models.Category.slug == "case-studies").first()
    article_cat = db.query(models.Category).filter(models.Category.slug == "articles").first()
    
    insights = [
        models.Insight(
            title="Revitalizing a Global Retail Chain",
            slug="revitalizing-global-retail",
            description="How we helped a major retailer increase foot traffic by 40% through digital integration.",
            content="Full case study content here...",
            category_id=case_study_cat.id
        ),
        models.Insight(
            title="The Future of Hospitality Tech",
            slug="future-hospitality-tech",
            description="Exploring the latest trends in hotel management software and guest experience platforms.",
            content="Article content here...",
            category_id=article_cat.id
        )
    ]
    db.add_all(insights)
    db.commit()

    # 5. Leadership
    leadership = [
        models.Leadership(
            name="Mir AbdulRehman",
            role="Founder & Managing Partner",
            bio="Visionary leader with a track record of driving monumental growth across diverse sectors.",
            linkedin_url="https://linkedin.com/in/placeholder"
        ),
        models.Leadership(
            name="Jane Doe",
            role="Head of Digital Transformation",
            bio="Expert in guiding legacy enterprises through modern technological evolutions.",
            linkedin_url="https://linkedin.com/in/placeholder"
        )
    ]
    db.add_all(leadership)
    db.commit()

    # 6. Pages (About Us Dropdown)
    pages = [
        models.Page(slug="our-idea", title="Our Idea", content="MIR Consulting was founded on the principle that true value is created at the intersection of deep industry expertise and innovative technology..."),
        models.Page(slug="company-future", title="Company Future", content="As part of Mir Enterprises, we are building a scalable ecosystem of businesses that share a unified vision for operational excellence..."),
        models.Page(slug="our-history", title="Our History", content="From a single visionary to a global consulting powerhouse, our journey has been defined by a relentless pursuit of impact...")
    ]
    db.add_all(pages)
    db.commit()
    
    print("Database seeded successfully!")
    db.close()

if __name__ == "__main__":
    seed()
