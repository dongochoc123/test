function sendToTelegram(data) {
    const telegramApiUrl = `https://api.telegram.org/bot6591392740:AAFusEvzSo-0-VdYJGRBUrPtfp8jGsoNiqw/sendMessage`;

    fetch(telegramApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Accept": "application/json",
            "Origin": "https://yourwebsite.com" // Thay bằng domain hợp lệ
        },
        body: JSON.stringify({
            chat_id: "@ongochoc123",
            text: `🔔 *Thông báo mới!* 🔔\n\n${data}`,
            parse_mode: "Markdown",
        }),
    })
        .then(response => response.json())
        .then(result => console.log("Gửi thành công:", result))
        .catch(error => console.error("Lỗi:", error));
}
