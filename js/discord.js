document.addEventListener("DOMContentLoaded", () => {

    fetch("https://discord.com/api/guilds/1435059908935553156/widget.json")
        .then(response => response.json())
        .then(data => {

            const element = document.getElementById("discord-members");

            if (!element) return;

            element.innerText = data.presence_count;

        })
        .catch(() => {
            console.log("Erro ao buscar dados do Discord");
        });

});
