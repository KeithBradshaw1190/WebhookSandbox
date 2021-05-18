# WebhookSandbox

This leverages Ngrok to make the make your endpoint public.
1. Download and install ngrok here: https://ngrok.com/
1. Create a base webhook in your datadog account and use that name for the webhook_name variable found in index.js.
1. Update your API and APP key for Datadog in the shared/datadogAPI.js file
1. To start the application, update the devStartup.sh file to reference the directory of where you have this app installed on your system.

1. Then run ./devStartup.sh
