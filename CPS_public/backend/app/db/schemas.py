from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List
from uuid import UUID
from .models.user import UserRole


# --- User Schemas ---
class UserBase(BaseModel):
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None


class UserCreate(UserBase):
    password: str
    role: Optional[UserRole] = UserRole.user


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(UserBase):
    id: UUID
    role: UserRole
    is_active: bool
    created_at: Optional[datetime] = None

    class Config:
        orm_mode = True


# --- Token Schemas ---
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None


# --- UserContactProfile Schemas ---
class UserContactProfileBase(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    company_name: Optional[str]
    job_title: Optional[str]
    email: Optional[EmailStr]
    phone_number: Optional[str]
    website_url: Optional[str]
    subject: Optional[str]
    referral_source: Optional[str]
    message: Optional[str]
    preferred_contact: Optional[str]
    city: Optional[str]
    state: Optional[str]
    industry: Optional[str]
    best_time_to_contact: Optional[str]
    budget_range: Optional[str]
    product_interest: Optional[str]
    is_existing_customer: Optional[bool]
    country: Optional[str]
    language: Optional[str]
    timezone: Optional[str]
    linkedin_url: Optional[str]
    notes: Optional[str]
    form_custom_field_1: Optional[str]
    form_custom_field_2: Optional[str]
    form_custom_field_3: Optional[str]
    contact_source: Optional[str]
    preferred_language: Optional[str]
    region: Optional[str]
    zip_code: Optional[str]


class UserContactProfileCreate(UserContactProfileBase):
    user_id: UUID


class UserContactProfileUpdate(UserContactProfileBase):
    pass


class UserContactProfileOut(UserContactProfileBase):
    id: UUID
    user_id: UUID

    class Config:
        orm_mode = True
