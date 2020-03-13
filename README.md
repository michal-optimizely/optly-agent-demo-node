## Optimizely Agent demo app (Node)

App that can be used to talk to an instance of Optimizely agent running locally. If you have Docker installed, getting the Agent instance up and running is as simple as:
1. Pull the Docker image:
`docker pull optimizely/agent`
2. Run the docker container from an image([Official docs](https://github.com/optimizely/agent#running-via-docker) for reference):
```bash
docker run -d --name optimizely-agent \
         -p 8080:8080 \
         -p 8088:8088 \
         -p 8085:8085 \
         --env OPTIMIZELY_LOG_PRETTY=true \
         optimizely/agent:latest
```
3. If so inclined, the container can be configured with [a number of options](https://github.com/optimizely/agent#configuration-options).

### How to use the app
1. Verify that an instance of Optimizely agent is running: `curl localhost:8088/health`.
2. Clone the repo and enter the app folder.
3. Instal dependencies: `npm install`.
4. Provide valid SDK key (line 7).
5. Run the `app.js` in the Terminal: `node app.js`.
6. Try calling activate/track with a valid feature-/eventKey.

### Notes
* I didn't figure our how the `config.yaml` file can be used to control configuration of the Agent. If anyone cracks that one, please share.
* The app is set up to use ports 8080 (client) and 8088 (admin) - in accordance with our official docs. This is configurable when starting the instance of the Agent or can be defined in the `config.yaml` file (what doesn't work for me).