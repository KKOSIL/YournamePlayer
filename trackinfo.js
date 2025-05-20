// 트랙 데이터
const tracks = [
    {
        No : "track01 The First track",
        title: "夢灯籠",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 01. 夢灯籠.wav",
        albumArt:
            "./img/track01.jpg",
    },
    {
        No : "track02",
        title: "三葉の通学",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 02. 三葉の通学.wav",
        albumArt:
            "./img/track02.jpg",
    },
    {
        No : "track03",
        title: "糸守高校",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 03. 糸守高校.wav",
        albumArt:
            "./img/track03.jpg",
    },
    {
        No : "track04",
        title: "東京",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 04. はじめての、東京.wav",
        albumArt:
            "./img/track04.jpg",
    },
    {
        No : "track05",
        title: "憧れカフェ",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 05. 憧れカフェ.wav",
        albumArt:
            "./img/track05.jpg",
    },
    {
        No : "track06",
        title: "奥寺先輩のテーマ",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 06. 奥寺先輩のテーマ.wav",
        albumArt:
            "./img/track06.jpg",
    },
    {   No : "track07",
        title: "ふたりの異変",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 07. ふたりの異変.wav",
        albumArt:
            "./img/track07.jpg",
    },
    {
        No : "track08",
        title: "前前前世 (movie ver.)",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 08. 前前前世 (movie ver.).wav",
        albumArt:
            "./img/track08.jpg",
    },
    {
        No : "track09",
        title: "御神体",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 09. 御神体.wav",
        albumArt:
            "./img/track09.jpg",
    },
    {
        No : "track10",
        title: "デート",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 10. デート.wav",
        albumArt:
            "./img/track10.jpg",
    },
    {
        No : "track11",
        title: "秋祭り",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 11. 秋祭り.wav",
        albumArt:
            "./img/track11.jpg",
    },
    {
        No : "track12",
        title: "記憶を呼び起こす瀧",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 12. 記憶を呼び起こす瀧.wav",
        albumArt:
            "./img/track12.jpg",
    },
    {
        No : "track13",
        title: "飛騨探訪",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 13. 飛騨探訪.wav",
        albumArt:
            "./img/track13.jpg",
    },
    {
        No : "track14",
        title: "消えた町",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 14. 消えた町.wav",
        albumArt:
            "./img/track14.jpg",
    },
    {
        No : "track15",
        title: "図書館",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 15. 図書館.wav",
        albumArt:
            "./img/track15.jpg",
    },
    {
        No : "track16",
        title: "旅館の夜",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 16. 旅館の夜.wav",
        albumArt:
            "./img/track16.jpg",
    },
    {
        No : "track17",
        title: "御神体へ再び",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 17. 御神体へ再び.wav",
        albumArt:
            "./img/track17.jpg",
    },
    {
        No : "track18",
        title: "口噛み酒トリップ",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 18. 口噛み酒トリップ.wav",
        albumArt:
            "./img/track18.jpg",
    },
    {
        No : "track19",
        title: "作戦会議",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 19. 作戦会議.wav",
        albumArt:
            "./img/track19.jpg",
    },
    {
        No : "track20",
        title: "町長説得",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 20. 町長説得.wav",
        albumArt:
            "./img/track20.jpg",
    },
    {
        No : "track21",
        title: "三葉のテーマ",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 21. 三葉のテーマ.wav",
        albumArt:
            "./img/track21.jpg",
    },
    {
        No : "track22",
        title: "見えないふたり",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 22. 見えないふたり.wav",
        albumArt:
            "./img/track22.jpg",
    },
    {
        No : "track23 The Last Track!",
        title: "かたわれ時",
        artist: "RADWIMPS",
        src: "./YourName/RADWIMPS - 君の名は。 - 23. かたわれ時.wav",
        albumArt:
            "./img/track23.jpg",
    },
    ];

const playPauseBtn = document.getElementById("play-pause-btn"); //재생+일시정지
const prevTrackBtn = document.getElementById("prev-track-btn"); //이전트랙
const nextTrackBtn = document.getElementById("next-track-btn"); //다음트랙
const firstTrackBtn = document.getElementById("first-track-btn"); //첫트랙으로
const lastTrackBtn = document.getElementById("last-track-btn");   //마지막트랙으로
const repeatBtn = document.getElementById("repeat-btn");         //반복설정


const progressBar = document.getElementById("progress-bar");
const currentTimeElement = document.getElementById("current-time");
const durationTimeElement = document.getElementById("duration-time");
const trackSelector = document.getElementById("track-selector");
const trackTitleElement = document.getElementById("track-title");
const trackArtistElement = document.getElementById("track-artist");
const trackNoElement = document.getElementById("trackNo");
const volumeSlider = document.getElementById("volume-slider");
const muteBtn = document.getElementById('mute-btn');
const albumArtImg = document.getElementById('pic'); 

let audio = new Audio();
let isPlaying = false;
let currentTrackIndex = 0;
let isMuted = false;
let repeatMode = 0; // 0: 반복 없음 (No Repeat), 1: 전체 반복 (Repeat All), 2: 한 곡 반복 (Repeat One)

function loadTrack(index) {
    const track = tracks[index];
    if (!track) return;

    audio.src = track.src;
    audio.load(); 

    trackTitleElement.textContent = track.title;
    trackArtistElement.textContent = track.artist;
    if (trackNoElement) { 
        if (track.No) { 
            trackNoElement.textContent = track.No;
        } else {
            trackNoElement.textContent = ""; 
        }
    }

    if (albumArtImg && track.albumArt) { 
        albumArtImg.src = track.albumArt;
    }


    progressBar.value = 0;
    currentTimeElement.textContent = "00:00";
    durationTimeElement.textContent = "00:00";

    audio.removeEventListener("loadedmetadata", updateDuration); 
    audio.addEventListener("loadedmetadata", updateDuration);

    
    if (trackSelector.options[index + 1]) { 
      trackSelector.selectedIndex = index + 1;
    }
}

function updateDuration() {
    durationTimeElement.textContent = formatTime(audio.duration);
}

function playAudio() {
    audio.play().then(() => {
        isPlaying = true;
        playPauseBtn.textContent = "⏸";
    }).catch(error => {
        console.error("Error playing audio:", error);
        isPlaying = false;
        playPauseBtn.textContent = "▶";
    });
}

function pauseAudio() {
    audio.pause();
    isPlaying = false;
    playPauseBtn.textContent = "▶";
}

function togglePlay() {
    if (!audio.src || audio.src === window.location.href) { 
        if (tracks.length > 0) {
            loadTrack(currentTrackIndex); 
            playAudio();
        }
        return;
    }
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playAudio();
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playAudio();
}

function playFirstTrack() {
    currentTrackIndex = 0;
    loadTrack(currentTrackIndex);
    playAudio();
}

function playLastTrack() {
    currentTrackIndex = tracks.length - 1;
    loadTrack(currentTrackIndex);
    playAudio();
}

function toggleRepeatMode() {
    repeatMode = (repeatMode + 1) % 3;
    switch (repeatMode) {
        case 0: // 반복 없음
            repeatBtn.textContent = "➡️"; 
            break;
        case 1: // 전체 반복
            repeatBtn.textContent = "🔁";
            break;
        case 2: // 한 곡 반복
            repeatBtn.textContent = "🔂";
            break;
    }
}

// 재생바 업데이트
audio.addEventListener("timeupdate", () => {
    if (audio.duration && !isNaN(audio.duration)) {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        progressBar.value = (currentTime / duration) * 100;
        currentTimeElement.textContent = formatTime(currentTime);
    } else if (audio.duration && isNaN(audio.duration) && progressBar.value !== '0') {
    }
});

progressBar.addEventListener('input', (e) => {
    if (!audio.duration || isNaN(audio.duration)) return;
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
});

volumeSlider.addEventListener("input", () => {
    audio.volume = parseFloat(volumeSlider.value);

    if (audio.volume > 0 && isMuted) {
        isMuted = false;
        audio.muted = false;
        muteBtn.textContent = '🔊';
    }
});

trackSelector.addEventListener("change", (e) => {
    currentTrackIndex = parseInt(e.target.value, 10);
    if (!isNaN(currentTrackIndex)) {
        loadTrack(currentTrackIndex);
        playAudio(); 
    }
});

audio.addEventListener("ended", () => {
    switch (repeatMode) {
        case 0: 
            if (currentTrackIndex < tracks.length - 1) {
                playNextTrack();
            } else {
                pauseAudio();
                currentTrackIndex = 0;
                loadTrack(currentTrackIndex);
            }
            break;
        case 1: // 전체 반복
            playNextTrack();
            break;
        case 2: // 한 곡 반복
            audio.currentTime = 0; // 현재 트랙의 처음으로 이동
            playAudio();
            break;
    }
});

// 시간 포맷팅 (MM:SS)
function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
}

// 초기화
document.addEventListener("DOMContentLoaded", () => {
    if (tracks.length > 0) {
        loadTrack(currentTrackIndex); // 첫 번째 트랙 정보 로드 (재생은 안 함)
    }
    
    // 반복 버튼 초기 아이콘 설정
    switch (repeatMode) {
        case 0: repeatBtn.textContent = "➡️"; break;
        case 1: repeatBtn.textContent = "🔁"; break;
        case 2: repeatBtn.textContent = "🔂"; break;
    }

    // 버튼 이벤트 리스너 연결 (ID 변경 및 새 버튼 추가)
    playPauseBtn.addEventListener("click", togglePlay);
    prevTrackBtn.addEventListener("click", playPrevTrack);
    nextTrackBtn.addEventListener("click", playNextTrack);
    firstTrackBtn.addEventListener("click", playFirstTrack);
    lastTrackBtn.addEventListener("click", playLastTrack);
    repeatBtn.addEventListener("click", toggleRepeatMode);

    // 드롭다운 메뉴에 트랙 추가
    tracks.forEach((track, index) => {
        const option = document.createElement("option");
        option.value = index; // option의 value를 트랙의 인덱스로 설정
        option.textContent = `${track.title} - ${track.artist}`;
        trackSelector.appendChild(option);
    });

    // 페이지 로드 시 볼륨 슬라이더 값에 따라 실제 오디오 볼륨 설정
    if (audio) { // audio 객체가 생성된 후
        audio.volume = parseFloat(volumeSlider.value);
    }
});