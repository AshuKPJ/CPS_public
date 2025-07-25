# backend/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import login  # Ensure this file exists and contains login.router

app = FastAPI()

# CORS setup to allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include login router with correct prefix
app.include_router(login.router, prefix="/api/v1/auth", tags=["auth"])
