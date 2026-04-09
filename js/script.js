let player;

// API READY
function onYouTubeIframeAPIReady() {

    player = new YT.Player('youtube-player', {

        height: '0',
        width: '0',

        playerVars: {
            listType: 'playlist',
            list: 'PL1Llof7Y9_EYyDe1Re3YmQzqu2UdG7tFx'
        },

        events: {
            'onReady': onPlayerReady
        }

    });

}

// PLAYER READY
function onPlayerReady() {

    player.mute();
    player.playVideo();

    loadVolume();
    updateSong();

    setInterval(updateProgress, 1000);

}

// ESPERA DOM
document.addEventListener("DOMContentLoaded", () => {

    const playBtn = document.getElementById("radio-play");
    const volume = document.getElementById("radio-volume");
    const radioPlayer = document.getElementById("radio-player");
    const minimizeBtn = document.getElementById("radio-minimize");

    // PLAY / PAUSE
    if (playBtn) {
        playBtn.onclick = () => {

            if (!player) return;

            let state = player.getPlayerState();

            if (state !== 1) {

                player.unMute();
                player.playVideo();
                playBtn.textContent = "⏸";
                toggleEQ(true);

            } else {

                player.pauseVideo();
                playBtn.textContent = "▶";
                toggleEQ(false);

            }

        };
    }

    // VOLUME
    if (volume) {
        volume.addEventListener("input", (e) => {

            if (!player) return;

            player.setVolume(e.target.value);
            localStorage.setItem("arx_radio_volume", e.target.value);

        });
    }

    // MINIMIZAR
    if (minimizeBtn && radioPlayer) {
        minimizeBtn.addEventListener("click", () => {
            radioPlayer.classList.toggle("minimized");
        });
    }

});

// VOLUME SALVO
function loadVolume() {

    const volume = document.getElementById("radio-volume");

    if (!volume || !player) return;

    let saved = localStorage.getItem("arx_radio_volume");

    if (!saved) saved = 50;

    volume.value = saved;
    player.setVolume(saved);

}

// ATUALIZA MÚSICA
function updateSong() {

    if (!player || !player.getVideoData) return;

    const data = player.getVideoData();

    if (data && data.title) {

        const title = document.getElementById("radio-title");
        const cover = document.getElementById("radio-cover");

        if (title) title.textContent = data.title;

        if (cover) {
            cover.src = `https://img.youtube.com/vi/${data.video_id}/hqdefault.jpg`;
        }

    }

    setTimeout(updateSong, 3000);

}

// BARRA DE PROGRESSO
function updateProgress() {

    if (!player || !player.getDuration) return;

    const duration = player.getDuration();

    if (!duration) return;

    const current = player.getCurrentTime();

    const percent = (current / duration) * 100;

    const bar = document.getElementById("radio-progress-bar");

    if (bar) {
        bar.style.width = percent + "%";
    }

}

// EQUALIZER
function toggleEQ(state) {

    const bars = document.querySelectorAll(".radio-eq span");

    bars.forEach(bar => {
        bar.style.animationPlayState = state ? "running" : "paused";
    });

}
