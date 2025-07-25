# backend/app/db/models/user_contact_profile.py
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.types import Text
from app.db.database import Base
import uuid


class UserContactProfile(Base):
    __tablename__ = "user_contact_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), unique=True, nullable=False)

    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)
    company_name = Column(String, nullable=True)
    job_title = Column(String, nullable=True)
    email = Column(String, nullable=True)
    phone_number = Column(String, nullable=True)
    website_url = Column(String, nullable=True)
    subject = Column(String, nullable=True)
    referral_source = Column(String, nullable=True)
    message = Column(Text, nullable=True)
    preferred_contact = Column(String, nullable=True)
    city = Column(String, nullable=True)
    state = Column(String, nullable=True)
    industry = Column(String, nullable=True)
    best_time_to_contact = Column(String, nullable=True)
    budget_range = Column(String, nullable=True)
    product_interest = Column(String, nullable=True)
    is_existing_customer = Column(Boolean, nullable=True)
    country = Column(String, nullable=True)
    language = Column(String, nullable=True)
    timezone = Column(String, nullable=True)
    linkedin_url = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    form_custom_field_1 = Column(String, nullable=True)
    form_custom_field_2 = Column(String, nullable=True)
    form_custom_field_3 = Column(String, nullable=True)
    contact_source = Column(String, nullable=True)
    preferred_language = Column(String, nullable=True)
    region = Column(String, nullable=True)
    zip_code = Column(String, nullable=True)

    # Optional: Add relationship to User model if needed
    user = relationship("User", back_populates="contact_profile", uselist=False)
