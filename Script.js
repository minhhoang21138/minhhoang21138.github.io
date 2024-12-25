function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('vi-VN', options);
    document.getElementById('currentTime').textContent = formattedTime;
}

setInterval(updateTime, 1000); // Cập nhật thời gian mỗi giây

// Thêm sự kiện cho nút đăng xuất (bạn có thể tùy chỉnh hành động khi nhấn nút)
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    // Thực hiện hành động đăng xuất ở đây (ví dụ: chuyển hướng đến trang đăng nhập)
    alert('Bạn đã đăng xuất!');
});

// Trong script.js của trang login.html
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Lấy thông tin đăng nhập và gửi đến server để kiểm tra
    // Nếu đăng nhập thành công, chuyển hướng đến trang chính
    window.location.href = 'index.html';
});

// Trong script.js của trang index.html
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    // Chuyển hướng đến trang đăng nhập
    window.location.href = 'login.html';
});
