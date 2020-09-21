from starlette.routing import Route
from views import list_tasks, add_task

routes = [
    Route('/tasks', endpoint=list_tasks, methods=["GET"]),
    Route("/tasks", endpoint=add_task, methods=["POST"]),
]