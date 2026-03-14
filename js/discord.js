fetch(`https://discord.com/api/guilds/1435059908935553156/widget.json`)
    .then(response => response.json())
    .then(data => {

        document.getElementById("discord-members").innerText = data.presence_count;

    })
    .catch(error => {
        console.log("Erro ao buscar dados do Discord");
    });