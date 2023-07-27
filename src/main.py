from fastapi import FastAPI
from fastapi_users import FastAPIUsers
from starlette.staticfiles import StaticFiles

from src.auth.auth import auth_backend
from src.auth.database import User
from src.auth.manager import get_user_manager
from src.auth.shemas import UserRead, UserCreate

from pages.main_page import router as main_page_router

# config
app = FastAPI()

app.mount("/static", StaticFiles(directory='static'), name='static')

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)


# _____routers_____

# auth router
app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix='/auth',
    tags=['auth']
)

# register router
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix='/register',
    tags=['register']
)

# Создание пути для авторизации




# other routers
app.include_router(main_page_router)


# start server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
