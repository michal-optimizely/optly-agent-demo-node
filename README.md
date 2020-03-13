## Optimizely Agent demo app (Node)

App that can be used to talk to an instance of Optimizely agent running locally. To get the Agent instance up and running, refer to [official docs](https://github.com/optimizely/agent).

### notes
* Didn't get the `config.yaml` file to work yet. If anyone cracks that one, please share.
* Note the app is set up to use ports 8080 (client) and 8088 (admin). This is configurable when starting the instance of the Agent or can be defined in the `config.yaml` file (what doesn't work for me).

### How to use
# Clone the repo and enter the app folder.
# Instal dependencies: `npm install`.
# Run the `app.js` in the Terminal: `node app.js`.
