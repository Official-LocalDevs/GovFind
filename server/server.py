from flask import Flask, jsonify
from flask_cors import CORS #Allow next.js server to fetch flask backend endpoints

#app instance
app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message': "GovFind"
    })

if __name__ == '__main__':
    app.run(port=8000, debug=True)