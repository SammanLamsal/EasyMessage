from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import socketio

class AllowedUsers:
    def __init__(self, user1, user2):
        self.user1 = user1
        self.user2 = user2

allowed_users = AllowedUsers("user1", "user2")
connected_clients = {}

app = FastAPI()
origins = ['https://localhost:3000']
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

sio_server = socketio.AsyncServer(async_mode="asgi", cors_allowed_origins=[])
sio_app = socketio.ASGIApp(socketio_server=sio_server)

app.mount("/", sio_app)

@sio_server.event
async def message(sid, message):
    print(f"Message {message} from {sid}")
    await sio_server.send(message)

if __name__ == "__main__":
    uvicorn.run("index:app", host="127.0.0.1", port = 8000, reload=True)