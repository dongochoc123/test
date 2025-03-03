from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Thay bằng bot token và chat ID của bạn
BOT_TOKEN = "6591392740:AAFusEvzSo-0-VdYJGRBUrPtfp8jGsoNiqw"
CHAT_ID = "@ongochoc123"  # Nếu là nhóm, cần lấy chat_id thật

TELEGRAM_API_URL = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

@app.route('/send-message', methods=['GET'])
def send_message():
    try:
        # Nhận dữ liệu từ query parameters (cURL gửi lên)
        message = request.args.get("message", "")

        if not message:
            return jsonify({"error": "No message provided"}), 400

        # Gửi tin nhắn đến Telegram
        response = requests.post(TELEGRAM_API_URL, json={
            "chat_id": CHAT_ID,
            "text": message,
            "parse_mode": "Markdown"
        })

        return jsonify(response.json()), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
