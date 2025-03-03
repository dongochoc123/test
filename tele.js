function sendToTelegram(data) {
    const botToken = "6591392740:AAFusEvzSo-0-VdYJGRBUrPtfp8jGsoNiqw"; // Thay thế bằng bot token của bạn
    const chatId = "@ongochoc123"; // Thay thế bằng chat ID cần gửi dữ liệu
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `🔔 *Thông báo mới!* 🔔\n\n${data}`;

    fetch(telegramApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: data,
            parse_mode: "Markdown",
        }),
    })
        .then(response => response.json())
        .then(result => {
            console.log("Gửi thành công:", result);
        })
        .catch(error => {
            console.error("Lỗi khi gửi về Telegram:", error);
        });
}
