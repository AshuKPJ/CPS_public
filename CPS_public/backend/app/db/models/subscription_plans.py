from sqlalchemy import Column, String, Integer, Numeric
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
import uuid

from app.db.database import Base


class SubscriptionPlan(Base):
    __tablename__ = "subscription_plans"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(50), nullable=False)
    max_websites = Column(Integer)
    max_submissions_per_day = Column(Integer)
    price = Column(Numeric)
    features = Column(JSONB)

    # Relationship to Subscriptions
    subscriptions = relationship("Subscription", back_populates="plan")
