# backend/app/db/models/__init__.py
from .user import User, UserRole
from .campaign import Campaign, CampaignStatus
from .submission_log import SubmissionLog, SubmissionStatus
# backend/app/db/models/__init__.py

# ✅ Import UserContactProfile before User to satisfy relationship
from .user_contact_profile import UserContactProfile
from .user import User, UserRole
