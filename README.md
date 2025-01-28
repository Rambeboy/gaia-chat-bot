# GAIA CHAT BOT

Gaia Chat Interaction Bot

**AIRDROP - GAIANET AI**

Earn Points and get positioned for future rewards

**Task Details:**

- Visit [HERE](https://gaianet.ai/)
- Connect New Wallet
- Click Start Earning
- Go to Profile
- Connect All Socials
- Complete All Task
- Done 

**Join Bot Telegram**

[Gaia XP](https://t.me/gaianet_ai_bot/)

- Login bot
- Complete all task
- Claim USDTs
- Done

## PREREQUISITE

- Git
- Node JS (v22)

## BOT FEATURE

- Auto Chat Completion With Your Node
- Proxy Support

## RUN GAIA NODE

System Minimum Requirements
16GB RAM (32GB recommended)
8GB VRAM on GPU
Nvidia T4 GPU Instance

Setup Guide: [HERE](https://docs.gaianet.ai/getting-started/quick-start/?_gl=1*1nj7df9*_ga*MjAxMzM4ODY2OS4xNzM3MDg0MDM1*_ga_V3W2HJ72V0*MTczNzA4NDAzNC4xLjEuMTczNzA4NDU5OC4wLjAuMA)
After sucessfully setup :
- Execute
```
 curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s -- -v 0.13.5 --noavx
```
- Execute 
```
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/qwen2-0.5b-instruct/config.json
gaianet stop
gaianet start
gaianet info
```
- Open [Node Page](https://www.gaianet.ai/setting/nodes)
- Enter Node ID & Device ID
- Open [API Key Page](https://www.gaianet.ai/setting/gaia-api-keys)
- Create API Key
- Done
- Start setup and run bot

## SETUP & CONFIGURE BOT

### LINUX
1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/gaia-chat-bot.git && cd gaia-chat-bot
   ```
2. Install dependencies
   ```
   npm install && npm run setup
   ```
3. Configure config file using `nano` or your `text editor`
   ```
   nano config/config.js
   ```
4. Run the Bot
   ```
   npm run start
   ```
   
## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
2. Start the bot


## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)

DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.


## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
