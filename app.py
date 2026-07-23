from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from gemini import ask_babar_ai

app = FastAPI(title="Babar AI Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def home():
    return {
        "status": "online",
        "name": "Babar AI Agent"
    }

@app.post("/chat")
def chat(data: ChatRequest):
    reply = ask_babar_ai(data.message)

    return {
        "reply": reply
    }
