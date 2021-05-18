//Set the webhook name
var webhook_name = 'MyWebhook'
const { updateWebhookConfig } = require("./shared/datadogAPI")


var DEV = true

//This determines if we update the webhook config on the Datadog integration tile
//based on the DEV variable
if (NGROK_URL != null && DEV) {
    console.log(`Updating ngrokURL URL for Webhook with ${NGROK_URL}`)
    let webhookURL = NGROK_URL+ '/hook'
    updateWebhookConfig(webhook_name,webhookURL)
}

// Require express and body-parser
const express = require("express")


// Import routes
const hook = require("./routes/hook");
// Initialize express and define a port
const app = express()
const PORT = process.env.PORT || 3000

// Tell express to use JSON parsing
app.use(express.json());

// Use Api routes in the App
app.use(hook);

// Start express on the defined port
app.listen(PORT, () => console.log(` Webhook listener running on port ${PORT}`))



