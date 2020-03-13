## Optimizely Agent demo app (Node)

App that can be used to talk to an instance of Optimizely agent running locally. To get the Agent instance up and running, refer to [official docs](https://github.com/optimizely/agent).

### Notes
* I didn't figure our how the `config.yaml` file can be used to control configuration of the Agent. If anyone cracks that one, please share.
* The app is set up to use ports 8080 (client) and 8088 (admin) - in accordance with our official docs. This is configurable when starting the instance of the Agent or can be defined in the `config.yaml` file (what doesn't work for me).

### How to use
1. Verify that an instance of Optimizely agent is running: `curl localhost:8088/health`.
2. Clone the repo and enter the app folder.
3. Instal dependencies: `npm install`.
4. Run the `app.js` in the Terminal: `node app.js`.
