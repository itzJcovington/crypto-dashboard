
# Crypto Dashboard

A dynamic cryptocurrency dashboard that displays real-time data for Bitcoin, Ethereum, Ripple, and Cardano. Data refreshes every 60 seconds, providing up-to-date prices, market caps, and 24-hour changes.

## Features

- Displays cryptocurrency data for Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and Cardano (ADA)
- Real-time data updates every 60 seconds
- Responsive layout for mobile and desktop

## Tech Stack

- **Backend:** Node.js, Express.js
- **API Handling:** Axios
- **Frontend:** EJS for templating, CSS (Flexbox, Grid)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itzJcovington/crypto-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crypto-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000`

## API Usage

This project uses the [CoinGecko API](https://www.coingecko.com/en/api) to fetch data for:

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
