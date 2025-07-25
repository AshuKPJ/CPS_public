import os
from pydantic import BaseSettings
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    # Application
    PROJECT_NAME: str = "Contact Page Submitter"
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    ALGORITHM: str = "HS256"
    API_V1_STR: str = "/api/v1"

    # Database (Single string)
    DATABASE_URL: str

    # Celery & Redis
    REDIS_HOST: str
    REDIS_PORT: int

    # CAPTCHA Encryption Key for DBC credentials
    CAPTCHA_ENCRYPTION_KEY: str

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
