const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use((req, res, next) => {
    console.log(`📢 REQUÊTE ENTRANTE : ${req.method} ${req.url}`);
    next();
});
app.use(cors()); // Autorise Angular (localhost:4200) à nous parler
app.use(express.json());

// Variable pour stocker le token temporairement (mise en cache simple)
let amadeusToken = null;

// Fonction pour récupérer le token Amadeus
async function getAmadeusToken() {
    const authUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';

    try {
        const response = await axios.post(authUrl,
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.AMADEUS_CLIENT_ID,
                client_secret: process.env.AMADEUS_CLIENT_SECRET
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Erreur d'authentification Amadeus:", error.response?.data || error.message);
        throw error;
    }
}

// Route : Recherche de vols (C'est celle qu'Angular va appeler)
app.get('/api/flights', async (req, res) => {
    try {
        console.log("1. J'essaie d'obtenir le token Amadeus...");
        const token = await getAmadeusToken();
        console.log("2. Token obtenu ! J'interroge l'API vols...");

        const amadeusUrl = 'https://test.api.amadeus.com/v2/shopping/flight-offers';
        const response = await axios.get(amadeusUrl, {
            headers: { Authorization: `Bearer ${token}` },
            params: req.query
        });

        console.log("3. Succès ! Envoi des données à Angular.");
        res.json(response.data);

    } catch (error) {
        console.log("❌ ERREUR DÉTECTÉE !");

        if (error.response) {
            // La requête a été faite et le serveur a répondu avec un code d'erreur (ex: 401, 400)
            console.log("👉 Code erreur Amadeus :", error.response.status);
            console.log("👉 Détail de l'erreur :", JSON.stringify(error.response.data, null, 2));
        } else if (error.request) {
            // La requête a été faite mais pas de réponse
            console.log("👉 Pas de réponse d'Amadeus (Problème Internet ?)");
        } else {
            // Autre erreur
            console.log("👉 Erreur interne :", error.message);
        }

        res.status(500).json({ error: "Erreur communication Amadeus" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur Proxy sécurisé lancé sur http://localhost:${PORT}`);
});