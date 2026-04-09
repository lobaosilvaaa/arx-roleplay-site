const serverID = "zx5p8p";

fetch("/api/server")
    .then(res => res.json())
    .then(data => {

        const serverData = data.Data;

        if (!serverData) throw new Error();

        const players = serverData.players.length;
        const maxPlayers = serverData.sv_maxclients;

        const playersEl = document.getElementById("players-count");
        const statusEl = document.getElementById("server-status");

        if (playersEl) {
            playersEl.innerText = players + " / " + maxPlayers;
        }

        if (statusEl) {
            statusEl.innerText = "Online";
        }

    })
    .catch(() => {

        const statusEl = document.getElementById("server-status");

        if (statusEl) {
            statusEl.innerText = "Offline";
        }

    });