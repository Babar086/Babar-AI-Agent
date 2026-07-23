from fastapi import FastAPI

app = FastAPI(
    title="Babar AI Agent",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to Babar AI Agent",
        "status": "Running Successfully"
    }
