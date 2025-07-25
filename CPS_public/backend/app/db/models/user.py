# backend/app/db/models/user.py
import enum
from sqlalchemy import Enum
from sqlalchemy.orm import relationship
from app.db.base_class import Base
from sqlalchemy import Column, String, Boolean, DateTime, Enum
import uuid
from sqlalchemy.dialects.postgresql import UUID

class UserRole(str, enum.Enum):
    admin = "admin"
    user = "user"
    owner = "owner"

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    role = Column(String, default="user")
    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)

    # 👇 Don't directly reference class here unless it's already imported above
    contact_profile = relationship("UserContactProfile", back_populates="user", uselist=False)
