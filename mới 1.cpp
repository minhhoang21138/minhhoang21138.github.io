<!DOCTYPE html>
<html>
<head>
    <title>Trang Thùng Rác</title>
    <style>
        body {
            background-color: lightblue; /* Màu nền xanh nhạt */
            font-family: Arial, sans-serif;
            text-align: center; /* Căn giữa văn bản */
        }
        
        h1 {
            color: darkblue; /* Màu chữ tiêu đề xanh đậm */
        }
        
        p {
            color: navy; /* Màu chữ ngày tháng năm */
        }
    </style>
</head>
<body>
    <h1>Thùng Rác</h1>
    <p>Ngày: <span id="ngay"></span> Tháng: <span id="thang"></span> Năm: <span id="nam"></span></p>

    <script>
        // Lấy ngày, tháng, năm hiện tại
        const today = new Date();
        const ngay = today.getDate();
        const thang = today.getMonth() + 1; // Tháng bắt đầu từ 0
        const nam = today.getFullYear();

        // Hiển thị ngày, tháng, năm vào các thẻ span
        document.getElementById("ngay").textContent = ngay;
        document.getElementById("thang").textContent = thang;
        document.getElementById("nam").textContent = nam;
    </script>
</body>
</html>