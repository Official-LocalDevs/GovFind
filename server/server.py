import os
from flask import Flask, jsonify
from flask_cors import CORS # Allow next.js server to fetch flask backend endpoints
from supabase import create_client, Client, ClientOptions # Set up communication with Supabase database


#app instance
app = Flask(__name__)
CORS(app)

URL = os.getenv('SUPABASE_URL')
KEY = os.getenv('SUPABASE_KEY')
supabase: Client = create_client(URL, KEY,
  options=ClientOptions(
    postgrest_client_timeout=10, # Timeout for database requests (sec)
    storage_client_timeout=10
  ))

@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message': "GovFind"
    })

@app.route('/api/test-supabase', methods=['GET'])
def test_supabase_connection():
    try:
        # Perform a query to check the connection
        result = supabase.table("programs").select("*").limit(1).execute()
        
        if result.error:
            raise Exception(result.error.message)
        else:
            return jsonify({'success': True, 'message': 'Successfully connected to Supabase.', 'data': result.data}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': 'Failed to connect to Supabase.', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=8000, debug=True)