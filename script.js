function startGame() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('level1').classList.remove('hidden');
}

// 第一關：密碼破解
function checkPhone() {
    const phone = document.getElementById('phoneInput').value;
    const hint = document.getElementById('phoneHint');
    if (phone === "0955562597") {
        hint.textContent = "正確！進入下一關。";
        document.getElementById('level1').classList.add('hidden');
        document.getElementById('level2').classList.remove('hidden');
    } else {
        hint.textContent = "錯誤的電話號碼，請再試一次！";
    }
}

// 第二關：特別號碼
function checkSpecialNumber() {
    const specialNumber = document.getElementById('specialInput').value;
    const hint = document.getElementById('specialHint');
    if (specialNumber === "114514") {
        hint.textContent = "正確的特別號碼！準備進入下一關！";
        document.getElementById('level2').classList.add('hidden');
        document.getElementById('level3').classList.remove('hidden');
    } else {
        hint.textContent = "特別號碼錯誤，請再試一次。";
    }
}

// 第三關：死星雷射的解除機關
let disarmSequence = [];
let correctSequence = [3, 5, 7]; // 代表三角形、五角形、七角形
function toggleSwitch(shape) {
    disarmSequence.push(shape);
    if (disarmSequence.length === 3) {
        submitDisarmCode();
    }
}

function submitDisarmCode() {
    const hint = document.getElementById('laserHint');
    if (JSON.stringify(disarmSequence) === JSON.stringify(correctSequence)) {
        hint.textContent = "死星雷射已成功解除！前往最終決戰！";
        document.getElementById('level3').classList.add('hidden');
        document.getElementById('finalBattle').classList.remove('hidden');
    } else {
        hint.textContent = "機關順序錯誤，必須重新開始！";
        disarmSequence = [];
    }
}

// 最終決戰
function defeatToilet() {
    const hint = document.getElementById('finalHint');
    hint.innerText = "恭喜你！山駝馬成功擊敗了馬桶，世界安全了!\r感謝您遊玩試玩版，遊戲正式版正如火如荼的製作中";
}
window.onload = function () {
    // 新增事件監聽器以支持 Enter 鍵提交
    document.getElementById('phoneInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            checkPhone();
        }
    });

    document.getElementById('specialInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            checkSpecialNumber();
        }
    });

    // 將這段程式碼新增到死亡星雷射解除機關按鈕中
    document.querySelectorAll('#level3 button').forEach(button => {
        button.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                submitDisarmCode();
            }
        });
    });
};