# twilio-apaleo

This repo contains everything needed to replicate the Twilio Apaleo blogpost.

The demo outline is: 

1. User connects via WhatsApp with a Twilio Chatbot.
2. User provides their parameters through WhatsApp messages and Twilio makes the API requests to Apaleo, provides the results of the query and allows the user to create / edit / cancel bookings without the help of an agent.
3. If needed the user is forwarded to an agent and the agent is automatically redirected to the booking in Apaleo that the user is interested in.   

## 🛠 Setup

1. Rename the .example.env to .env -> `mv .example.env .env` and substitute the environmental variables in the file as described in the blogpost
2. In your Twilio account go to Twilio Studio, create a new Studio flow and at the import from JSON option upload the `studioFlow.json` 
3. Deploy your functions to your Twilio account with Twilio CLI.
   - `twilio login`
   - `twilio plugins:install @twilio-labs/plugin-serverless`
   - `cd serverless`
   - `twilio serverless:deploy`

## Resources
- Blogpost link
