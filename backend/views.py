from starlette.responses import JSONResponse
from db import tasks, database


async def list_tasks(request):
    query = tasks.select()
    results = await database.fetch_all(query)
    content = [
        {
            "id": result["id"],
            "title": result["title"],
            "type": result["type"],
            "position": result["position"],
            "url": result["url"]
        }
        for result in results
    ]
    return JSONResponse(content)


async def add_task(request):
    data = await request.json()
    query = tasks.insert().values(
       title=data["title"],
       type=data["type"],
       position=data["position"],
       url=data["url"]
    )
    await database.execute(query)
    return JSONResponse({
        "title": data["title"],
        "type": data["type"],
        "position": data["position"],
        "url": data["url"]
    })
