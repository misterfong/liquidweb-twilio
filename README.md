# liquidweb-twilio

A barebones Node.js app that uses the [LiquidWeb API](https://www.liquidweb.com/storm/api/) and Twilio to get your LiquidWeb server stats sent to via text message to your mobile phone.

Based on Edward Jiang's tutorial on creating a [reddit browser with Node JS and Twilio](https://studentrnd.org/build/tutorial-creating-a-reddit-browser-with-node-js-and-twilio)

## Getting Started

- Create a free [Twilio](https://www.twilio.com/) trial account
- Create a free [Heroku](https://www.heroku.com) account

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ heroku login
$ git clone https://github.com/misterfong/liquidweb-twilio.git
$ cd liquidweb-twilio
$ npm install
```

## Deploying to Heroku

```
$ heroku create
heroku config:set USER=[LiquidWeb Acct Username] PASSWORD=[LiquidWeb Acct Password] SERVER_ID=[Server Id]
$ git push heroku master
```

## How Do I Find My Server Id?

1) Login to your LiquidWeb control panel.
2) Click the + next to your server name
3) Click on the 'Dashboard' button
4) On the top right of the 'Information' box, note down the field 'Unique ID'

## Usage

Currently the app supports texting the message 'bandwidth' to your Twilio phone number to get your LiquidWeb monthly bandwidth stats.

## Documentation

For more information, please take a look at these resources

- [LiquidWeb VPS review](http://vpswebhosting.org/liquidweb-vps-review/) - A review of LiquidWeb by Josh Kotsay which gives an in-depth look at what LiquidWeb web hosting offers.
- [node-stormondemand](https://github.com/liquidweb/node-stormondemand) - Node.js client bindings for the LiquidWeb StormOnDemand API.
- [Twilio API documentation](https://www.twilio.com/docs/api) - Twilio API docs
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

