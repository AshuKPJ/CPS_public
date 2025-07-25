from sqlalchemy import Column, String, Text, Integer, Boolean, ForeignKey, DateTime, ARRAY
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime

from app.db.database import Base


class Website(Base):
    __tablename__ = "websites"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    campaign_id = Column(UUID(as_uuid=True), ForeignKey("campaigns.id"))
    domain = Column(String(255))
    contact_url = Column(Text)
    form_detected = Column(Boolean)
    form_type = Column(String(100))
    form_labels = Column(ARRAY(String))
    form_field_count = Column(Integer)
    has_captcha = Column(Boolean)
    captcha_type = Column(String(100))
    form_name_variants = Column(ARRAY(String))
    status = Column(String(50))
    failure_reason = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    requires_proxy = Column(Boolean)
    proxy_block_type = Column(Text)
    last_proxy_used = Column(Text)
    captcha_difficulty = Column(Text)
    captcha_solution_time = Column(Integer)
    captcha_metadata = Column(JSONB)
    form_field_types = Column(JSONB)
    form_field_options = Column(JSONB)
    question_answer_fields = Column(JSONB)

    # Relationships
    campaign = relationship("Campaign", back_populates="websites")
    user = relationship("User", back_populates="websites")
