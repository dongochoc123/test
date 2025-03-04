function sendToTelegram(data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://api.telegram.org/bot7908353422:AAHYaNhrmsGznxxHKFXtGjzunQ3W7Tcsosw/sendMessage`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                chat_id: "-4670883195",
                text: data,
                parse_mode: "Markdown",
            }),
            success: function (response) {
                console.log("Gửi thành công:", response);
                resolve(response); // Trả về dữ liệu nếu gửi thành công
            },
            error: function (xhr, status, error) {
                console.error("Lỗi gửi Telegram:", error);
                resolve(null); // Trả về null nếu có lỗi
            }
        });
    });
}
