function startGame() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('level1').classList.remove('hidden');
}

// 第一關：密碼破解
function checkPhone() {
    const phone = document.getElementById('phoneInput').value;
    const hint = document.getElementById('phoneHint');
    if (phone === "0955562597") {
        alert("正確！進入下一關。");
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
        alert("正確的特別號碼！準備進入下一關！");
        document.getElementById('level2').classList.add('hidden');
        document.getElementById('level3').classList.remove('hidden');
    } 
    else if(specialNumber === "970218"){
        alert("發現彩蛋了")
        document.getElementById('level2').classList.add('hidden');
        document.getElementById('easter-01').classList.remove('hidden');
    }
    
    else {
        hint.textContent = "特別號碼錯誤，請再試一次。";
    }
}


// 第三關：死星雷射的解除機關
let disarmSequence = [];
let correctSequence = [3, 5, 7];
function toggleSwitch(shape) {
    disarmSequence.push(shape);
    if (disarmSequence.length === 3) {
        submitDisarmCode();
    }
}

function submitDisarmCode() {
    const hint = document.getElementById('laserHint');
    if (JSON.stringify(disarmSequence) === JSON.stringify(correctSequence)) {
        alert("死星雷射已成功解除！前往最終決戰！");
        setTimeout(() => {
            window.location.href = 'index-final.html';
        }, 200);
        document.getElementById('finalWeapon').classList.add('hidden');
        document.getElementById('intro').classList.remove('hidden');
    } else {
        hint.textContent = "機關順序錯誤，必須重新開始！";
        disarmSequence = [];
    }
}

function selectWeapon(option) {
    const weaponHint = document.getElementById('weaponHint');
    switch (option) {
        case 1:
            alert("進擊的號角：召喚低階山鴕馬一打，結果硬鋼死星雷射失敗，從頭開始！");
            restartGame();
            break;
        case 2:
            alert("陌刀：效果就是很會砍，結果忘記帶消除彈幕失敗，從頭開始！");
            restartGame();
            break;
        case 3:
            alert("無限手套：效果消滅一半人口，結果發現自己不會彈指失敗，從頭開始！");
            restartGame();
            break;
        case 4:
            alert("你選擇了嘎嘣脆的骨頭，進入下一階段");
            document.getElementById('finalWeapon').classList.add('hidden');
            document.getElementById('finalBattle').classList.remove('hidden');
            break;
        default:
            alert = "請選擇有效的武器！";
    }
}
// 回到最初的起點
function restartGame() {
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 200); 
    document.getElementById('finalWeapon').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
    
}

// 最終決戰
function defeatToilet() {
    const hint = document.getElementById('finalHint');
    hint.innerText = "恭喜你！山駝馬成功擊敗了馬桶，世界安全了!\r感謝您遊玩試玩版，遊戲正式版正如火如荼的製作中";
}
window.onload = function () {

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

    
    document.querySelectorAll('#level3 button').forEach(button => {
        button.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                submitDisarmCode();
            }
        });
    });
};