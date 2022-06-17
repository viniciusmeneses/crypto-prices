<h1 align="center">
  Yolo Crypto Prices
</h1>

<h4 align="center">
  Yolo Group front-end test assignment
</h4>

## 💲 Project

Front-end app to track cryptocurrencies prices fetched from [Blocktap API](https://www.blocktap.io/). This project was developed using the stack Typescript + React.js + Apollo + Styled Components.

[Click here](https://sprightly-gelato-2213f0.netlify.app/) to view the demo deployed on Netlify.

## 💡 Requirements

- [x] Use React, Apollo, TypeScript and hooks.
- [x] User can add cryptocurrencies to the list by entering their codes ("BTC", "XRP", BNB" etc.)
- [x] User can see the list of added currencies together with their EUR prices.
- [x] User can remove the cryptocurrencies from the list.
- [x] The EUR price is fetched from an API service.

## 🎲 Running

In order to run the front-end in development environment, you must have at least the following tools installed: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

```bash
# Clone repository
$ git clone git@github.com:viniciusmeneses/yolo-crypto-prices.git

# Go to project directory
$ cd yolo-crypto-prices

# Make a copy of envs configuration file
$ cp .env.sample .env

# Install dependencies
$ yarn install

# Serve the app
$ yarn start
```

The app will be served on port 3000 by default and it can be accessed by URL http://localhost:3000.
