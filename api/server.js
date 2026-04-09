export default async function handler(req, res) {

    const serverID = "zx5p8p";

    try {

        const response = await fetch(
            `https://servers-frontend.fivem.net/api/servers/single/${serverID}`
        );

        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);

    } catch (error) {

        res.status(500).json({ error: "Erro ao buscar servidor" });

    }

}