from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure database connection
db_user = os.getenv("DB_USER")
db_pass = os.getenv("DB_PASS")
db_host = os.getenv("DB_HOST")
db_name = os.getenv("DB_NAME")

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{db_user}:{db_pass}@{db_host}/{db_name}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

# Basic test route
@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({"message": "Backend is running!"})

# Import models at the end to avoid circular imports
import models

if __name__ == '__main__':
    import models

    app.run(debug=True)

@app.route('/api/advisor', methods=['POST'])
def advisor():
    data = request.get_json()
    query = data.get('query', '')
    # TODO: Replace with actual NLP model call
    response = f"Based on your input '{query}', you might consider exploring Data Science or UX Design."
    return jsonify({"response": response})
