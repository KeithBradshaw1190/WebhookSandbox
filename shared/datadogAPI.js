const axios = require("axios");
let requiredHeaders = {
    'DD-API-KEY': "<YOUR_API_KEY>",
    'DD-APPLICATION-KEY': '<YOUR_APP_KEY>',
    'Content-Type': 'application/json'
}


exports.updateWebhookConfig = (webhookName, webhookURL) => {

    console.log("Update Monitor Webhook ");

    // Send a put request
    axios({
        method: 'put',
        headers: requiredHeaders,
        data: {
            name: webhookName,
            url: webhookURL,

        },
        url: `https://api.datadoghq.com/api/v1/integration/webhooks/configuration/webhooks/${webhookName}`,
    }).then(response => {
        if (response.status == '200') {
            console.log('URL updated correctly, wont update until restart')
            updateWebhook = false;
        }
    })
        .catch(error => console.log('error', error));



}

