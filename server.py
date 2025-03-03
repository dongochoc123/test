from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/send-message": {"origins": "*"}}, supports_credentials=True)

BOT_TOKEN = "6591392740:AAFusEvzSo-0-VdYJGRBUrPtfp8jGsoNiqw"
CHAT_ID = "@ongochoc123"
TELEGRAM_API_URL = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

@app.route('/send-message', methods=['POST', 'OPTIONS'])
def send_message():
    if request.method == 'OPTIONS':
        return '', 204  # Trả về response trống cho preflight
    try:
        data = request.get_json()
        message = data.get("message", "") if data else ""
        if not message:
            return jsonify({"error": "No message provided"}), 400

        response = requests.post(TELEGRAM_API_URL, json={
            "chat_id": CHAT_ID,
            "text": message,
            "parse_mode": "Markdown"
        })

        return jsonify(response.json()), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)