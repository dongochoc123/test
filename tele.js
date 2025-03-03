function sendToTelegram(data) {
    const proxyUrl = "http://localhost:5000/send-message"; // Hoặc HTTPS từ ngrok

    fetch(proxyUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: data
        }),
    })
    .then(response => {
        console.log("Status:", response.status); // In mã trạng thái
        if (!response.ok) throw new Error("Request failed with status " + response.status);
        return response.json();
    })
    .then(result => console.log("Gửi thành công:", result))
    .catch(error => console.error("Lỗi chi tiết:", error.message));
}