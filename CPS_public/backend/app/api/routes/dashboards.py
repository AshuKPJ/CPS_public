from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_dashboard():
    return {"message": "Dashboard endpoint is active"}
