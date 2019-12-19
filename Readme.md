## uwu

![uwu owo](https://img.shields.io/badge/uwu-owo-success) ![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/augusdogus/uwu-bot) ![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/augusdogus/uwu-bot) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/2106fed6cd8d4634a9231972484cada3)](https://www.codacy.com/manual/AugusDogus/uwu-bot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AugusDogus/uwu-bot&amp;utm_campaign=Badge_Grade) [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) ![Beerpay](https://img.shields.io/beerpay/AugusDogus/uwu-bot)

* * *

## Requirements

-   Docker
-   A [discord bot](https://discordapp.com/developers/applications/) token
-   Node.js (for development)

## Running from Docker Hub

    $ docker run --name uwu-bot -e "token=REPLACE_ME" augusdogus/uwu-bot:latest

## Building & Running from source

    $ git clone https://github.com/augusdogus/uwu-bot
    $ cd uwu-bot
    $ docker build -t uwu-bot .
    $ docker run --name uwu-bot -e "token=REPLACE_ME" uwu-bot:latest
