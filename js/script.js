let player;

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

function onPlayerReady() {

    player.mute();

    player.playVideo();

    loadVolume();

    updateSong();

    setInterval(updateProgress, 1000);

}

const playBtn = document.getElementById("radio-play");

playBtn.onclick = () => {

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

const volume = document.getElementById("radio-volume");

volume.addEventListener("input", (e) => {

    player.setVolume(e.target.value);

    localStorage.setItem("arx_radio_volume", e.target.value);

});

function loadVolume() {

    let saved = localStorage.getItem("arx_radio_volume");

    if (!saved) saved = 50;

    volume.value = saved;

    player.setVolume(saved);

}

function updateSong() {

    const data = player.getVideoData();

    if (data && data.title) {

        document.getElementById("radio-title").textContent = data.title;

        document.getElementById("radio-cover").src =
            `https://img.youtube.com/vi/${data.video_id}/hqdefault.jpg`;

    }

    setTimeout(updateSong, 3000);

}

function updateProgress() {

    if (!player.getDuration) return;

    const percent = (player.getCurrentTime() / player.getDuration()) * 100;

    document.getElementById("radio-progress-bar")
        .style.width = percent + "%";

}

const radioPlayer = document.getElementById("radio-player");
const minimizeBtn = document.getElementById("radio-minimize");

minimizeBtn.addEventListener("click", () => {

    radioPlayer.classList.toggle("minimized");

});

function toggleEQ(state) {

    const bars = document.querySelectorAll(".radio-eq span");

    bars.forEach(bar => {
        bar.style.animationPlayState = state ? "running" : "paused";
    });

}