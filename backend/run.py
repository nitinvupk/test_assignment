from starlette.applications import Starlette
from urls import routes
from middlewares import middleware
# app = Starlette(debug=True, routes=routes)
app = Starlette(debug=True, routes=routes, middleware=middleware)