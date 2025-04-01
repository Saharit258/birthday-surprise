// เปลี่ยนหน้า
function goToSurprisePage() {
    window.location.href = "surprise.html";
}

function goToGamePage() {
    window.location.href = "game.html";
}

// เล่นเพลงพื้นหลัง
function playMusic() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
        localStorage.setItem("musicStatus", "playing");
    }
}

// 🎈 ลูกโป่งและหัวใจลอยขึ้น 🎈
function createFloatingElement() {
    const element = document.createElement("img");
    const isBalloon = Math.random() > 0.5;

    element.src = isBalloon 
        ? "https://cdn-icons-png.flaticon.com/512/1511/1511321.png" 
        : "https://cdn-icons-png.flaticon.com/512/833/833472.png";

    element.classList.add("floating");
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(element);

    setTimeout(() => element.remove(), 6000);
}

// สร้างลูกโป่งและหัวใจลอยทุกๆ 500 มิลลิวินาที
setInterval(createFloatingElement, 500);

// เก็บสถานะเพลงใน LocalStorage
document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("backgroundMusic");
    if (localStorage.getItem("musicStatus") === "playing") {
        music.play();
    }
});

const questions = [
    {
        question: "เราชอบสีอะไร?",
        answers: ["แดง", "น้ำเงิน", "เขียว"],
        correctAnswer: 0
    },
    {
        question: "เราชอบอาหารอะไร?",
        answers: ["พิซซ่า", "ข้าวผัด", "สเต็ก"],
        correctAnswer: 1
    },
    {
        question: "เราชอบเที่ยวไหน?",
        answers: ["ภูเขา", "ทะเล", "เมือง"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById("question").textContent = q.question;
        const buttons = document.querySelectorAll(".answer");
        buttons.forEach((button, index) => {
            button.textContent = q.answers[index];
        });
    } else {
        displayGift();
    }
}

function checkAnswer(answerIndex) {
    const correct = questions[currentQuestion].correctAnswer;
    if (answerIndex === correct) {
        // ใช้ SweetAlert2 แทน alert
        Swal.fire({
            icon: 'success',
            title: 'ตอบถูก!',
            text: 'คุณตอบคำถามได้ถูกต้อง!',
        }).then(() => {
            currentQuestion++;
            displayQuestion();
        });
    } else {
        // ใช้ SweetAlert2 แทน alert
        Swal.fire({
            icon: 'error',
            title: 'ตอบผิด!',
            text: 'ลองใหม่อีกครั้ง',
        });
    }
}

function displayGift() {
    const giftMessages = [
        "ของขวัญที่คุณได้รับคือ: ทริปสุดพิเศษ!",
        "ของขวัญที่คุณได้รับคือ: แกดเจ็ตใหม่สุดล้ำ!",
        "ของขวัญที่คุณได้รับคือ: การ์ดอวยพรจากเพื่อน!"
    ];
    const randomGift = giftMessages[Math.floor(Math.random() * giftMessages.length)];

    // ใช้ SweetAlert2 แทนการแสดงของขวัญ
    Swal.fire({
        icon: 'success',
        title: 'ขอแสดงความยินดี!',
        text: randomGift,
    });
}

displayQuestion();

