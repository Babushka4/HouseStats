from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, APIRouter, Request

from src.parser.parsers import parse_yandex

router = APIRouter(
    prefix='/main',
    tags=['Pages']
)

templates = Jinja2Templates(directory="templates")


@router.get("/")
def get_main_page(request: Request):
    parsed_data = parse_yandex(limit=6)
    return templates.TemplateResponse("index.html", {"request": request, "content": parsed_data})
