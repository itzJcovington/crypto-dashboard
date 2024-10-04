# Crypto Dashboard

A dynamic cryptocurrency dashboard that displays real-time data for Bitcoin, Ethereum, Ripple, and Cardano. Data refreshes every 60 seconds, providing up-to-date prices, market caps, and 24-hour changes.

## Features

- Displays cryptocurrency data for Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and Cardano (ADA)
- Real-time data updates every 60 seconds
- Responsive layout for mobile and desktop

## Tech Stack

- **Backend:** Node.js, Express.js
- **API Handling:** Axios
- **Frontend:** EJS for templating, CSS (Flexbox)
- **Design:** Figma

## Live Website

Visit the live version of the project here: [**Crypto Dashboard**](https://crypto-dashboard-2a76.onrender.com/)

> **Note:** If the site has been inactive for a while, it may take up to a minute to start back up due to how the free hosting on Render.com works. Please be patient as the server spins back up.

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Start the server:
5. Open your browser and go to `http://localhost:3000`

## API Usage

This project uses the CoinGecko API to fetch data for:

- Bitcoin (BTC)
- Ethereum (ETH)
- Ripple (XRP)
- Cardano (ADA)

## How It Works

- The app fetches cryptocurrency data every 60 seconds via Axios from the CoinGecko API.
- Data such as current price, market capitalization, and 24-hour changes are rendered using EJS templates.
- The layout is responsive for different devices.

## License

This project is licensed under the MIT License.
