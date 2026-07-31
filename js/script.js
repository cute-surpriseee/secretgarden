// ==========================================
// 1. START EXPERIENCE (PLAYS MUSIC & SHOWS PASSWORD)
// ==========================================
function startExperience() {
    const welcome = document.getElementById('welcomeOverlay');
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');

    // Hide the initial welcome screen
    if (welcome) {
        welcome.style.display = 'none';
    }

    // 🎵 Play music from 0:00 immediately on click!
    if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play().then(() => {
            console.log("Music playing smoothly!");
            if (musicBtn) musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }).catch(err => console.log("Audio play error:", err));
    }

    // Open password modal automatically right after
    openPasswordModal();
}

function openPasswordModal() {
    const overlay = document.getElementById('passwordOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
    }
}

// ==========================================
// 2. UNLOCK PASSWORD, SMOOTH FADE & REVEAL GARDEN
// ==========================================
function checkPassword(e) {
    if (e) e.preventDefault();

    const passwordInput = document.getElementById('secretPass').value.trim();
    const overlay = document.getElementById('passwordOverlay');
    const garden = document.getElementById('gardenSection');

    // Replace "secret123" with your actual secret password!
    if (passwordInput !== "") { 
        if (overlay) {
            // 1. Add fade-out class to password screen
            overlay.classList.add('fade-out');

            setTimeout(() => {
                // 2. Hide password screen completely after fade finishes
                overlay.style.display = 'none';
                setTimeout(() => {
            // 2. Hide password screen completely after fade finishes
            overlay.style.display = 'none';

            // 3. Show garden and start typewriter! 👈 ADD THESE LINES HERE
            if (garden) {
                garden.style.display = 'block';
            }

        }, 500); // (or whatever your setTimeout time is)
                // 3. Show & smoothly fade in garden section
                if (garden) {
                    garden.style.display = 'block';
                    garden.style.opacity = '0';
                    
                    // Force browser redraw then fade in
                    setTimeout(() => {
                        garden.style.opacity = '1';
                        garden.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                }
            }, 800); // 800ms matches the CSS transition time
        }
    } else {
        alert("Please enter the secret password! 🌷");
    }
}

// ==========================================
// MUSIC TOGGLE BUTTON LISTENER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    console.log("Audio playing successfully!");
                    musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                }).catch(error => {
                    console.error("Audio playback error:", error);
                });
            } else {
                bgMusic.pause();
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            }
        });
    }
});

// ==========================================
// 3. SMOOTH SCROLL TO GARDEN
// ==========================================
function scrollToGarden() {
    const garden = document.getElementById('gardenSection');
    if (garden) {
        garden.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// 4. MEMORIES PHOTO SLIDER DATA & LOGIC
// ==========================================
const photoList = [
    {
        src: "./assets/images/dcss.png",
        caption: "📸 These chats feelss soo goodd bhaii ✨"
    },
    {
        src: "./assets/images/mganga.png",
        caption: "🌸 Ik animated haii but our very first pic togehter! 💕"
    }
];

let currentPhotoIndex = 0;

function changePhoto(direction) {
    currentPhotoIndex += direction;
    
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photoList.length - 1;
    } else if (currentPhotoIndex >= photoList.length) {
        currentPhotoIndex = 0;
    }
    
    updatePhotoViewer();
}

function updatePhotoViewer() {
    const imgEl = document.getElementById('sliderImg');
    const captionEl = document.getElementById('sliderCaption');
    const counterEl = document.getElementById('sliderCounter');
    
    if (imgEl && captionEl) {
        imgEl.src = photoList[currentPhotoIndex].src;
        captionEl.innerText = photoList[currentPhotoIndex].caption;
        if (counterEl) {
            counterEl.innerText = `${currentPhotoIndex + 1} / ${photoList.length}`;
        }
    }
}

// Keyboard Arrow Key Navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('detailModal');
    if (modal && modal.style.display === 'flex') {
        if (e.key === 'ArrowRight') changePhoto(1);
        if (e.key === 'ArrowLeft') changePhoto(-1);
    }
});

// ==========================================
// 6. GARDEN CARDS POPUP DATA
// ==========================================
const cardData = {
    memories: {
        title: "Memories 📸",
        content: `
            <div class="photo-slider-wrapper">
                <button class="slider-arrow left" onclick="changePhoto(-1)">&larr;</button>
                
                <div class="slider-card-body">
                    <div class="img-container">
                        <img id="sliderImg" src="${photoList[0].src}" alt="Memory Photo" class="slider-photo">
                    </div>
                    <div class="caption-container">
                        <p id="sliderCaption" class="photo-caption">${photoList[0].caption}</p>
                        <span id="sliderCounter" class="photo-counter">1 / ${photoList.length}</span>
                    </div>
                </div>

                <button class="slider-arrow right" onclick="changePhoto(1)">&rarr;</button>
            </div>
        `
    },
    talks: {
        title: "Late Night Talks 🌙",
        content: `
            <p>The best conversations happen when the world is quiet.</p>
            <ul>
                <li>✨ "Are you still awake?" texts</li>
                <li>✨ Random 2 AM wala deep life talks</li>
                <li>✨ Bina judge me itnaaa sbb we discussed</li>
                <li>✨ Itni durr rehe ke bhi were there for each other 💗</li>
            </ul>
        `
    },
    special: {
        title: "Why You're Special ✨",
        content: `
            <ul>
                <li>💖 You're an incredible listener</li>
                <li>🌸 You make bad days so good just by texting me</li>
                <li>🎧 The vibe we matchh</li>
                <li>📱 You're my favorite notification</li>
                <li>✨ Finallyy the every time US moment we havee 💗</li>
            </ul>
        `
    },
    future: {
        title: "Future Meetup ✈️",
        content: `
            <p style="margin-bottom: 12px;">"The first IRL hug we gonnaa havee bhaii... ⏳"</p>
            <p>"First meet pe cafe date and city exploree ✨"</p>
        `
    }
};

function openModal(cardType) {
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');
    
    if (cardData[cardType] && modal) {
        modalContent.innerHTML = `
            <h2>${cardData[cardType].title}</h2>
            ${cardData[cardType].content}
        `;
        modal.style.display = 'flex';
        
        if (cardType === 'memories') {
            currentPhotoIndex = 0;
            updatePhotoViewer();
        }
    }
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
};
// SPAWN FLOATING HEART / TULIP ON CLICK
document.addEventListener('click', function(e) {
    const emojis = ['🌷', '💖', '🌸', '✨', '💕', '🌷'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const emojiElement = document.createElement('span');
    emojiElement.classList.add('floating-emoji');
    emojiElement.innerText = randomEmoji;

    // Position emoji where the tap/click happened
    emojiElement.style.left = e.clientX + 'px';
    emojiElement.style.top = e.clientY + 'px';

    document.body.appendChild(emojiElement);

    // Remove element after animation finishes
    setTimeout(() => {
        emojiElement.remove();
    }, 1200);
});
// ==========================================
// TYPEWRITER EFFECT FOR FINAL SPECIAL MESSAGE
// ==========================================
const customMessage = `Helloo! Sbse pehele happyyy friendshippp dayyyy !!! 🎉\n\nAnd this could've been done normallyy alsoo but meko laga thoda kuch alag se krta hu for my girll, isiliye made this. Ik utna koi perfect sa webpage nhi bana hai, but I tried to make one for you. 🌸\n\nI'm soo haappyyy to have a bestiiieee likee youu, my bestessttt friieenddd! I reallyy wannaa thank youu for being with me jub bhi needed, for understanding me itnee acheee se. Mai jub bhi achaa feel nhi krta mera mood liftup krti hai, busyy schedule me se bhii youu managee to come to me, reply kr detii hai, mekoo supporrtt krtii har chizz me and smjhaatii bhii haii... 🥹💖`;

let msgIndex = 0;

function startTypewriter() {
    const textElement = document.getElementById("typewriterText");
    if (!textElement) return;

    if (msgIndex < customMessage.length) {
        let char = customMessage.charAt(msgIndex);
        if (char === '\n') {
            textElement.innerHTML += "<br>";
        } else {
            textElement.innerHTML += char;
        }
        msgIndex++;
        setTimeout(startTypewriter, 35); // Speed of typing (lower = faster)
    } else {
        // Show glowing heart when done
        const heartSurprise = document.getElementById("heartSurprise");
        if (heartSurprise) heartSurprise.classList.remove("hidden");
    }
}
let isEnvelopeOpened = false;

    startTypewriter();
}
let isEnvelopeOpened = false;

function openEnvelope(e) {
    if (e) e.stopPropagation();

    const backdrop = document.getElementById('letterBackdrop');
    const letter = document.getElementById('letterPaper');

    if (backdrop) backdrop.classList.remove('hidden');
    if (letter) letter.classList.remove('hidden');

    if (!isEnvelopeOpened) {
        isEnvelopeOpened = true;
        startTypewriter();
    }
}

function closeEnvelope() {
    const backdrop = document.getElementById('letterBackdrop');
    const letter = document.getElementById('letterPaper');

    if (backdrop) backdrop.classList.add('hidden');
    if (letter) letter.classList.add('hidden');
}
