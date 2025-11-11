//disable

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function (e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
  }
  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();
  }
  // Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
    e.preventDefault();
  }
  // Ctrl+U
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
  }
});

//disble drag
const element = document.querySelectorAll('.shard');
  // Disable dragstart event
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('dragstart', function (e) {
    e.preventDefault(); 
    });
  }


// cursor follow text
document.addEventListener('DOMContentLoaded', () => {

    const shardsElement = document.querySelectorAll('.shard');

    // Show text and track cursor position on hover
    shardsElement.forEach((shardElement) => {
        const followText = shardElement.querySelector('.shard-text');
        if (!followText) return;

        shardElement.addEventListener('mouseenter', () => {
            followText.style.display = 'block';
        });

        shardElement.addEventListener('mousemove', (e) => {
          const rect = followText.getBoundingClientRect();
          const boxWidth = rect.width;

          let x = e.clientX - boxWidth; 
          let y = e.clientY - 25;  

          followText.style.left = `${x}px`;
          followText.style.top = `${y}px`;
          followText.style.position = 'fixed';
        });

        shardElement.addEventListener('mouseleave', () => {
            followText.style.display = 'none';
        });
  });

});


/* TRANSITIONS */

// enables effect at a specific time
const aud = document.getElementById('etherstrike');
const fxbox = document.getElementById('overlay');

const mainImg = document.getElementById('mainimg');
const altImg = document.getElementById('altimg');

let hasSwapped = false;

//autoplay

aud.muted = true;

aud.play().then(() => {

  setTimeout(() => {
    aud.muted = false;
  }, 200);
}).catch(error => {

  console.error('Autoplay failed:', error);

});

function checkViewPort() {
  if (window.innerWidth < 1200) {
    aud.pause();
  } else {
    aud.play();
  }
}

aud.addEventListener('timeupdate', () => {
  if (aud.currentTime >= 85 && !hasSwapped) {
    fxbox.classList.add('active');

    altImg.classList.add('visible');
    
    setTimeout(() => {
      mainImg.classList.remove('visible');
    }, 10000);

    hasSwapped = true;

  } else if (aud.currentTime < 85 && hasSwapped) {
    fxbox.classList.remove('active');

    mainImg.classList.add('visible');

    setTimeout(() => {
      altImg.classList.remove('visible');
    }, 10000);

    hasSwapped = false;
  }
});

// typewriter effect

let typeWriterTimer = null;
let clearTextTimer = null;

function typeWriter(txt, target, speed = 50, delay = 2000) {
  let i = 0;

  // Cancel any previous timers
  if (typeWriterTimer) clearTimeout(typeWriterTimer);
  if (clearTextTimer) clearTimeout(clearTextTimer);

  target.innerHTML = "";

  function write() {
    if (i < txt.length) {
      target.innerHTML += txt.charAt(i);
      i++;
      typeWriterTimer = setTimeout(write, speed);
    } else {
      // After typing finishes, wait before clearing
      clearTextTimer = setTimeout(() => {
        target.innerHTML = "";
      }, delay);
    }
  }

  write();
}

/* SHARD SELECTORS */
const tribbie = document.getElementById('tribbie');
const hyacine = document.getElementById('hyacine');
const mydei = document.getElementById('mydei');
const cipher = document.getElementById('cipher');
const castorice = document.getElementById('castorice');
const anaxa = document.getElementById('anaxa');
const phainon = document.getElementById('phainon');

const tribbie_btn = tribbie.querySelector('button');
const hyacine_btn = hyacine.querySelector('button');
const mydei_btn = mydei.querySelector('button');
const cipher_btn = cipher.querySelector('button');
const castorice_btn = castorice.querySelector('button');
const anaxa_btn = anaxa.querySelector('button');
const phainon_btn = phainon.querySelector('button');

const tribbie_img = tribbie_btn.querySelector('img');
const hyacine_img = hyacine_btn.querySelector('img');
const mydei_img = mydei_btn.querySelector('img');
const cipher_img = cipher_btn.querySelector('img');
const castorice_img = castorice_btn.querySelector('img');
const anaxa_img = anaxa_btn.querySelector('img');
const phainon_img = phainon_btn.querySelector('img');
/* SHARD SELECTORS */

//timer function

let ongoing;

function timer(duration) {
  const timerElement = document.getElementById('countdown');

  if (ongoing) {
    clearTimeout(ongoing);
  }

  function updateTimer() {
    duration--;  
    timerElement.textContent = duration;  

    if (duration > 0) {
      ongoing = setTimeout(updateTimer, 1000);  
    } else {
      timerElement.textContent = "0";  
    }
  }

  updateTimer();  
}

// text content

let ShardText

function eraseTextContent() {
  textFloat = document.querySelectorAll('.shard-text');
  textFloat.forEach(content => {
    paragraph = content.querySelector('p');
    paragraph.textContent = ''
  });
}

function addTextContent(btn) {
 if (btn) {
  const shardContainer = btn.closest('.shard');
  const shardId = shardContainer?.id;

  if (shardId) {
    textFloat = shardContainer.querySelector('.shard-text');
    paragraph = textFloat.querySelector('p');
    paragraph.textContent += ShardText + " ";
  }
 }

}


// quiz 

/* POINTS */
let hasAnswered = 0;
let correctAnswers = 0;
/* POINTS */

let correctId
const shard_btns = document.querySelectorAll('button');

function verifyAnswer(clickedObj) {
  const clicked = clickedObj.target.closest('.shard-btn');

  if (clicked.id === correctId) {
    hasAnswered += 1;
    correctAnswers += 1;
  } else {
    hasAnswered += 1;
  }

  addTextContent(clicked);

  shard_btns.forEach(btn => {
    btn.removeEventListener('click', verifyAnswer);
    btn.disabled = true;
  });
}

function acceptAnswers() {
  shard_btns.forEach(btn => {
    btn.disabled = false;
    btn.addEventListener('click', verifyAnswer);
  });
}

function enableQuiz() {
  timer(4);
  acceptAnswers();
}

// ids

function changeTexts(correctid, textinside) {
  correctId = correctid;
  ShardText = textinside;
}



// dialogues & special video effects
const dial = document.getElementById('dialogues');
const vido = document.getElementById('vid');
const altvid = document.getElementById('alt-vid');
const questText = document.getElementById('objective');
const rotateUI = document.getElementById('rotation');
const timeUI = document.getElementById('countdown');
const whiteout = document.getElementById('whiteout');

let lastCue = null;

checkViewPort();

window.addEventListener('resize', checkViewPort);

aud.addEventListener('timeupdate', () => {
  const t = aud.currentTime;

  if (t >= 7 && t < 8 && lastCue != 7) {
    typeWriter("An intense dissatisfaction of the world", dial, 50, 3500);
    lastCue= 7;

  } else if (t >= 14 && t < 15 && lastCue != 14) {
    typeWriter("and a compulsion to do something about it.", dial, 50, 3000);
    lastCue = 14;

  } else if (t >= 18 && t < 19 && lastCue != 18) {
    typeWriter("Heaven and earth—", dial, 100, 5000);
    lastCue = 18;

  } else if (t >= 24 && t < 25 && lastCue != 24) {
    typeWriter("my guiding star.", dial, 50, 1500);
    lastCue = 24;

  } else if (t >= 55 && t < 56 && lastCue != 55) {
    typeWriter("Heaven and earth—", dial, 100, 5000);
    lastCue = 55;

  } else if (t >= 61 && t < 62 && lastCue != 61) {
    typeWriter("my guiding star.", dial, 50, 1500);
    lastCue = 61;

  } else if (t >= 69 && t < 70 && lastCue != 69) {
    typeWriter("An intense dissatisfaction of the world", dial, 50, 3500);
    lastCue= 69;

  } else if (t >= 75 && t < 76 && lastCue != 75) {
    typeWriter("and a compulsion to do something about it.", dial, 50, 3000);
    lastCue = 75;

  } else if (t >= 79 && t < 80 && lastCue != 79) {
    typeWriter("Heaven and earth—", dial, 100, 5000);
    lastCue = 79;

  } else if (t >= 79.8 && t < 80.5 && lastCue != 798) {
    castorice_img.style.filter = "brightness(0)";
    cipher_img.style.filter = "brightness(0)";
    lastCue = 798;

  } else if (t >= 80.7 && t < 82 && lastCue != 807) {
    castorice_img.style.filter = "brightness(1)";
    cipher_img.style.filter = "brightness(1)";
    tribbie_img.style.filter = "brightness(0)";
    hyacine_img.style.filter = "brightness(0)";
    mydei_img.style.filter = "brightness(0)";
    anaxa_img.style.filter = "brightness(0)";
    phainon_img.style.filter = "brightness(0)";
    lastCue = 807;

  } else if (t >= 85.7 && t < 86.1 && lastCue != 857) {
    dial.style.color = '#000000';
    typeWriter("my guiding star.", dial, 50, 1500);

    tribbie_img.style.filter = "brightness(1)";
    hyacine_img.style.filter = "brightness(1)";
    mydei_img.style.filter = "brightness(1)";
    anaxa_img.style.filter = "brightness(1)";
    phainon_img.style.filter = "brightness(1)";

    vido.classList.add('active');
    vido.play();
    setTimeout(() => {
      vido.classList.remove('active');
    }, 1000);

    questText.textContent = "Reveal the LIGHT. Press the corresponding images.";
    questText.style.color = '#b10000';

    timeUI.classList.add('active');
    eraseTextContent();
    lastCue = 857;
    
  } else if (t >= 87 && t < 88 && lastCue != 87) {
    dial.style.color = '#ff0000';
    changeTexts('tribbie1', 'Fate');
    enableQuiz();
    typeWriter("Fate", dial, 20, 3000);

    lastCue = 87;
    
  } else if (t >= 90 && t < 91 && lastCue != 90) {
    enableQuiz();
    changeTexts('phainon8', 'Relentless');
    typeWriter("Relentless", dial, 20, 3000);

    lastCue = 90;

  } else if (t >= 93 && t < 94 && lastCue != 93) {
    changeTexts('cipher4', 'Execution');
    enableQuiz();
    typeWriter("Execution", dial, 20, 3000);

    lastCue = 93;

  } else if (t >= 96 && t < 97 && lastCue != 96) {
    changeTexts('tribbie1', 'Separation');
    enableQuiz();
    typeWriter("Separation", dial, 20, 3000);

    lastCue = 96;

  } else if (t >= 99 && t < 100 && lastCue != 99) {
    changeTexts('anaxa6', 'Deception');
    enableQuiz();
    typeWriter("Deception", dial, 20, 3000);

    lastCue = 99;

  } else if (t >= 102 && t < 103 && lastCue != 102) {
    changeTexts('hyacine2', 'Burden');
    enableQuiz();
    typeWriter("Burden", dial, 20, 3000);

    lastCue = 102;

  } else if (t >= 105 && t < 106 && lastCue != 105) {
    changeTexts('Hycaine2', 'Enervation');
    enableQuiz();
    typeWriter("Enervation", dial, 20, 3000);

    lastCue = 105;

  } else if (t >= 108 && t < 109 && lastCue != 108) {
    changeTexts('anaxa6', 'Realization');
    enableQuiz();
    typeWriter("Realization", dial, 20, 3000);

    lastCue = 108;

  } else if (t >= 111 && t < 112 && lastCue != 111) {
    changeTexts('phainon8', 'Incompletion');
    enableQuiz();
    typeWriter("Incompletion", dial, 20, 3000);

    lastCue = 111;

  } else if (t >= 114 && t < 115 && lastCue != 114) {
    changeTexts('mydei3', 'Vengeance');
    enableQuiz();
    typeWriter("Vengeance", dial, 20, 3000);

    lastCue = 114;

  } else if (t >= 117 && t < 118 && lastCue != 117) {
    changeTexts('mydei3', 'Hesitate');
    enableQuiz();
    typeWriter("Hesitate", dial, 20, 3000);

    lastCue = 117;

  } else if (t >= 120 && t < 121 && lastCue != 120) {
    changeTexts('castorice5', 'Romantic');
    enableQuiz();
    typeWriter("Romantic", dial, 20, 3000);

    lastCue = 120;

  } else if (t >= 123 && t < 124 && lastCue != 123) {
    changeTexts('castorice5', 'Desolation');
    enableQuiz();
    typeWriter("Desolation", dial, 20, 3000);

    lastCue = 123;

  } else if (t >= 126 && t < 127 && lastCue != 126) {
    changeTexts('cipher4', 'Misdeeds');
    enableQuiz();
    typeWriter("Misdeeds", dial, 20, 3000);

    lastCue = 126;

  } else if (t >= 129 && t < 130 && lastCue != 129) {
    timeUI.classList.remove('active');
    lastCue = 129;

  } else if (t >= 136 && t < 137 && lastCue != 136) {
    altvid.classList.add('active');
    altvid.play();
    rotateUI.classList.add('active')
    lastCue = 136;

  } else if (t >= 148 && t < 149 && lastCue != 148) {
    whiteout.classList.add('active');

  } else if (t >= 149 && t < 150 && lastCue != 149) {
    if (hasAnswered === 0 && correctAnswers === 0) {
      window.location.href = "https://drive.google.com/drive/folders/1Pz1p_4K9H5QBvz2Brl0FlDKsJJ4PqSUF?usp=sharing";
    
    } else if (hasAnswered >= 8 && correctAnswers >= 8) {
      window.location.href = "https://drive.google.com/drive/folders/120GAl1rvC3IiLYG4NQwUi-7rpvtxOSD1?usp=sharing";
    
    } else {
      window.location.href = "https://drive.google.com/drive/folders/1_cveKzPqCpmfdxpeD_Ki5PL5trtWg1ho?usp=sharing";
    }

    lastCue = 149;
  }
});

