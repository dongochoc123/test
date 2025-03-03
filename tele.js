function sendToTelegram(data) {
    const telegramApiUrl = `https://api.telegram.org/bot6591392740:AAFusEvzSo-0-VdYJGRBUrPtfp8jGsoNiqw/sendMessage`;

    fetch(telegramApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15",
            "Accept": "application/json",
            "Origin": "https://yourwebsite.com" // Thay bằng domain hợp lệ
        },
        body: JSON.stringify({
            chat_id: "@ongochoc123",
            text: data,
            parse_mode: "Markdown",
        }),
    })
        .then(response => response.json())
        .then(result => console.log("Gửi thành công:", result))
        .catch(error => console.error("Lỗi:", error));
}
