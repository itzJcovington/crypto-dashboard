import express from "express";
import axios from "axios"; 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const btcResult = axios.get("https://api.coingecko.com/api/v3/coins/bitcoin?x_cg_demo_api_key=CG-6Zq5qVv3wWqGS9sb9vu2viKX");
        const ethResult = axios.get("https://api.coingecko.com/api/v3/coins/ethereum?x_cg_demo_api_key=CG-6Zq5qVv3wWqGS9sb9vu2viKX");
        const xrpResult = axios.get("https://api.coingecko.com/api/v3/coins/ripple?x_cg_demo_api_key=CG-6Zq5qVv3wWqGS9sb9vu2viKX");
        const adaResult = axios.get("https://api.coingecko.com/api/v3/coins/cardano?x_cg_demo_api_key=CG-6Zq5qVv3wWqGS9sb9vu2viKX");

        const [btc, eth, xrp, ada] = await axios.all([
            btcResult,
            ethResult,
            xrpResult,
            adaResult
        ]);

        res.render("index.ejs", {
            btc: btc.data,
            eth: eth.data,
            xrp: xrp.data,
            ada: ada.data
        });

    } catch (error) {
        console.error("Error fetching API data:", error);
        res.status(500).send("Error fetching API data.");
    }
});

app.listen(port, () => {
    console.log(`Port ${port} running`);
});
