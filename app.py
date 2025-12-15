# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
from dotenv import load_dotenv
import os
import secrets
from functools import wraps

# ---------------- Load ENV ----------------
load_dotenv(".env.backend")  

MONGO_URI = os.environ.get("MONGO_URI")
FRONTEND_ORIGIN = os.environ.get("FRONTEND_ORIGIN", "http://localhost:5173")

app = Flask(__name__)

# ---------------- CORS ----------------
CORS(
    app,
    resources={r"/*": {"origins": FRONTEND_ORIGIN}},
    supports_credentials=True,
)

# ---------------- MongoDB connect ----------------
if not MONGO_URI:
    raise RuntimeError("MONGO_URI not set in .env")

client = MongoClient(MONGO_URI)
db = client["ganpati"]

bookings_col = db["bookings"]
feedback_col = db["feedbacks"]
admins_col = db["admins"]  # Papa login stored here

# Debug: print admins once on startup
print("=== DEBUG: Admins present in DB ===")
for doc in admins_col.find():
    print("Phone in DB:", repr(doc.get("phone")), "Password:", repr(doc.get("password")))
print("===================================")

# ---------------- TOKEN STORE ----------------
active_tokens = set()


def require_admin(view_func):
  """Admin-only protected routes"""
  @wraps(view_func)
  def wrapper(*args, **kwargs):
      auth_header = request.headers.get("Authorization", "")

      if not auth_header.startswith("Bearer "):
          return jsonify({"success": False, "message": "Unauthorized"}), 401

      token = auth_header.split(" ", 1)[1]

      if token not in active_tokens:
          return jsonify({"success": False, "message": "Invalid or expired token"}), 401

      return view_func(*args, **kwargs)

  return wrapper


# ---------------- BASIC ROUTES ----------------
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Ganpati Tours backend running ✅"})


@app.route("/ping", methods=["GET"])
def ping():
    return jsonify({"status": "ok"})


# ---------------- BOOKING API ----------------
@app.route("/api/booking", methods=["POST"])
def create_booking():
    data = request.get_json() or {}

    required_fields = ["name", "phone", "pickup", "drop", "date"]
    missing = [f for f in required_fields if not data.get(f)]

    if missing:
        return (
            jsonify(
                {
                    "success": False,
                    "message": f"Missing fields: {', '.join(missing)}",
                }
            ),
            400,
        )

    booking_doc = {
        "name": data.get("name"),
        "phone": data.get("phone"),
        "pickup": data.get("pickup"),
        "drop": data.get("drop"),
        "date": data.get("date"),
        "time": data.get("time"),
        "carType": data.get("carType"),
        "passengers": data.get("passengers"),
        "notes": data.get("notes"),
        "created_at": datetime.utcnow(),
    }

    result = bookings_col.insert_one(booking_doc)

    print("==== NEW BOOKING ====")
    print(booking_doc)

    return (
        jsonify(
            {
                "success": True,
                "message": "Booking saved",
                "id": str(result.inserted_id),
            }
        ),
        201,
    )


# ---------------- FEEDBACK API ----------------
@app.route("/api/feedback", methods=["POST"])
def create_feedback():
    data = request.get_json() or {}

    if not data.get("rating"):
        return (
            jsonify(
                {
                    "success": False,
                    "message": "rating field is required",
                }
            ),
            400,
        )

    feedback_doc = {
        "name": data.get("name"),
        "phone": data.get("phone"),
        "rating": data.get("rating"),
        "highlight": data.get("highlight"),
        "comment": data.get("comment"),
        "created_at": datetime.utcnow(),
    }

    result = feedback_col.insert_one(feedback_doc)

    print("==== NEW FEEDBACK ====")
    print(feedback_doc)

    return (
        jsonify(
            {
                "success": True,
                "message": "Feedback saved",
                "id": str(result.inserted_id),
            }
        ),
        201,
    )


# ---------------- ADMIN LOGIN ----------------
@app.route("/api/admin/login", methods=["POST"])
def admin_login():
    data = request.get_json() or {}

    # clean inputs
    phone = str(data.get("phone", "")).strip()
    password = str(data.get("password", "")).strip()

    if not phone or not password:
        return (
            jsonify(
                {"success": False, "message": "phone and password required"}
            ),
            400,
        )

    # Debug
    print("=== ADMIN LOGIN ATTEMPT ===")
    print("Phone from frontend:", repr(phone))

    admin = admins_col.find_one({"phone": phone})
    print("Admin found in DB:", bool(admin))

    if not admin:
        return (
            jsonify(
                {"success": False, "message": "Invalid phone or password"}
            ),
            401,
        )

    stored_password = str(admin.get("password", "")).strip()
    print("Stored password in DB:", repr(stored_password))

    if stored_password != password:
        return (
            jsonify(
                {"success": False, "message": "Invalid phone or password"}
            ),
            401,
        )

    # generate token
    token = secrets.token_hex(32)
    active_tokens.add(token)

    return jsonify({"success": True, "token": token}), 200


# ---------------- ADMIN: GET ALL BOOKINGS ----------------
@app.route("/api/admin/bookings", methods=["GET"])
@require_admin
def admin_get_bookings():
    docs = []
    for doc in bookings_col.find().sort("created_at", -1):
        doc["_id"] = str(doc["_id"])
        docs.append(doc)

    return jsonify({"success": True, "bookings": docs}), 200


# ---------------- ADMIN: GET ALL FEEDBACKS ----------------
@app.route("/api/admin/feedbacks", methods=["GET"])
@require_admin
def admin_get_feedbacks():
    docs = []
    for doc in feedback_col.find().sort("created_at", -1):
        doc["_id"] = str(doc["_id"])
        docs.append(doc)

    return jsonify({"success": True, "feedbacks": docs}), 200


# ---------------- RUN APP ----------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
