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
