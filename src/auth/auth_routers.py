from fastapi import APIRouter, Request
from fastapi_users import schemas
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates
import fastapi_users

from src.auth.database import User

templates = Jinja2Templates(directory="templates")

