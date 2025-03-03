from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

BOT_TOKEN = '6591392740:AAFusEvzSo-0-VdYJGRBUrPtfp8jGsoNiqw'
CHAT_ID = '@ongochoc123'
TELEGRAM_API_URL = f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage'

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json.get('message', '')
    if not data:
        return jsonify({'error': 'No message provided'}), 400

    response = requests.post(TELEGRAM_API_URL, json={
        'chat_id': CHAT_ID,
        'text': data,
        'parse_mode': 'Markdown'
    })

    return jsonify(response.json()), response.status_code

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
