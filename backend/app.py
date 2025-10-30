from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

db = SQLAlchemy()

app = Flask(__name__)
CORS(app)

# Database config
db_user = os.getenv("DB_USER")
db_pass = os.getenv("DB_PASS")
db_host = os.getenv("DB_HOST")
db_name = os.getenv("DB_NAME")

app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{db_user}:{db_pass}@{db_host}/{db_name}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

# Import models AFTER db.init_app
from models import User


@app.route("/api/test")
def test():
    return jsonify({"message": "Backend running"})


@app.route("/api/advisor", methods=["POST"])
def advisor():
    data = request.get_json()
    q = data.get("query", "")
    response = f"Based on '{q}', explore Data Science or UX Design."
    return jsonify({"response": response})


@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data["email"]
    password = data["password"]

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email exists"}), 409

    hashed = generate_password_hash(password)
    user = User(email=email, password=hashed)

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User added"})


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data["email"]
    password = data["password"]

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid"}), 401

    return jsonify({"message": "Login ok"})


if __name__ == "__main__":
    app.run(debug=True)
