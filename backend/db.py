import databases
import sqlalchemy
from starlette.config import Config


config = Config('.env')
DATABASE_URL = config('DATABASE_URL')

# Database table definitions.
metadata = sqlalchemy.MetaData()

tasks = sqlalchemy.Table(
    "tasks",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("title", sqlalchemy.String),
    sqlalchemy.Column("type", sqlalchemy.String),
    sqlalchemy.Column("position", sqlalchemy.Integer),
    sqlalchemy.Column("url", sqlalchemy.String),
)

database = databases.Database(DATABASE_URL)
