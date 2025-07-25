import uuid
from enum import Enum
from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from app.db.database import Base

# Add this enum for use in Pydantic schemas
class CampaignStatus(str, Enum):
    pending = "pending"
    in_progress = "in_progress"
    completed = "completed"
    failed = "failed"

class Campaign(Base):
    __tablename__ = "campaigns"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    name = Column(String(255), nullable=True)
    csv_filename = Column(String(255), nullable=True)
    started_at = Column(DateTime(timezone=False), nullable=True)
    status = Column(String(50), nullable=True)

    owner = relationship("User", back_populates="campaigns")
    websites = relationship("Website", back_populates="campaign", cascade="all, delete-orphan")
    logs = relationship("Log", back_populates="campaign", cascade="all, delete-orphan")
