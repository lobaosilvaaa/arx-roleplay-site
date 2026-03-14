const serverID = "zx5p8p";

fetch(`https://servers-frontend.fivem.net/api/servers/single/${serverID}`)
    .then(res => res.json())
    .then(data => {

        const serverData = data.Data;

        const players = serverData.players.length;
        const maxPlayers = serverData.sv_maxclients;

        document.getElementById("players-count").innerText =
            players + " / " + maxPlayers;

        document.getElementById("server-status").innerText = "Online";

    })
    .catch(() => {

        document.getElementById("server-status").innerText = "Offline";

    });