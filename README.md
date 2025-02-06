# odin-message-board

This is my implementation of The Odin Project's message board app hosted [here](https://message-board-6a538.web.app/messages)

## Features 

You can enter a username, message, select your time zone, and post your comment! Very Straightforward! 

## Usage

Go to the link for the truth, or host locally if you're demented

```console 
$ git clone https://github.com/ryxnseamxn/odin-message-board
```

```console 
$ cd odin-message-board 
```

if you haven't installed the firebase CLI, do so and login

```console 
$ npm install -g firebase-tools
$ firebase login
```

Finally, do 

```console 
$ firebase serve 
```

## Future Plans 

Most importantly, I want to use a db so the messages will persist. 

Secondly, I want a profanity filter, because I don't trust y'all

## Technologies used 

Backend - [Node JS](https://nodejs.org/en) and [Express](https://expressjs.com/)

Frontend - [EJS](https://ejs.co/)

and various packages 
