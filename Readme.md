## uwu

![uwu owo](https://img.shields.io/badge/uwu-owo-success) [![Docker Image CI](https://github.com/AugusDogus/uwu-bot/actions/workflows/docker-image.yml/badge.svg)](https://github.com/AugusDogus/uwu-bot/actions/workflows/docker-image.yml) [![Docker Pulls](https://img.shields.io/docker/pulls/augusdogus/uwu-bot)](https://hub.docker.com/r/augusdogus/uwu-bot) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/2106fed6cd8d4634a9231972484cada3)](https://www.codacy.com/gh/AugusDogus/uwu-bot/dashboard?utm_source=github.com&utm_medium=referral&utm_content=AugusDogus/uwu-bot&utm_campaign=Badge_Grade) [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) [![ko-fi](https://img.shields.io/badge/Buy%20me%20a-Coffee-brightgreen)](https://ko-fi.com/augusdogus)

---

## Requirements

- Docker
- A [discord bot](https://discordapp.com/developers/applications/) token
- Node.js (for development)

## Running from Docker Hub

    $ docker run --name uwu-bot -e "token=REPLACE_ME" augusdogus/uwu-bot:latest

## Building & Running from source

    $ git clone https://github.com/augusdogus/uwu-bot
    $ cd uwu-bot
    $ docker build -t uwu-bot .
    $ docker run --name uwu-bot -e "token=REPLACE_ME" uwu-bot:latest
