// lấy được thẻ <canvas> trong body của html
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//bán kính bóng
var ballRadius = 10;

// góc tọa độ đầu tiên + tốc bộ ban đầu 
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
//khả năng có thể move trái và phải
var rightPressed = false;
var leftPressed = false;

// add event keyup keydowm

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//sự kiện keydown được kích hoạt
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

//sự kiện keyup được kích hoạt
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// beginPath+ closePasth là hướng 
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);// hàm vẽ bóng
    // fillStyle định nghĩa màu sử dụng cho fill
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Xóa Canavas trước khi tạo frame mới
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    
   // bóng di chuyển trái và phải
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) { 
        dx = -dx;
    }
    
    // bóng di chuyển lên và xuống
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    // công thức di chuyển bóng
    if(rightPressed) {
        dx += 4;
    }
    else if(leftPressed) {
        dy -= 4;
    }
    
    x += dx;
    y += dy;
}

// hàm draw thực thi mỗi 10 mili giây.
setInterval(draw, 10);
