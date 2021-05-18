#!/bin/bash
webhookServicePort=3000
# Define the path to where this is running eg:
webhookDir=$HOME/Documents/projects/cryptoProject


#Run Ngrok take the HTTPS url and pass to webhook service on startup
ngrok http $webhookServicePort > /dev/null &
export NGROK_URL="$(curl -s http://localhost:4040/api/tunnels/command_line | jq -r '.public_url')"
echo $NGROK_URL
node $webhookDir/index.js 

