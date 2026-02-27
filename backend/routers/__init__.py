from fastapi import APIRouter
from routers import industries, capabilities, insights, pages, leadership

api_router = APIRouter()

api_router.include_router(industries.router, prefix="/industries", tags=["industries"])
api_router.include_router(capabilities.router, prefix="/capabilities", tags=["capabilities"])
api_router.include_router(insights.router, prefix="/insights", tags=["insights"])
api_router.include_router(pages.router, prefix="/pages", tags=["pages"])
api_router.include_router(leadership.router, prefix="/leadership", tags=["leadership"])
