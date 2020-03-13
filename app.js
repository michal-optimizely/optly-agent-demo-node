// documentation for axios package: https://www.npmjs.com/package/axios
const axios = require('axios');

// reference for Optimizely agent APIs: https://github.com/optimizely/agent/blob/master/api/openapi-spec/openapi.yaml

// defining some global vars that are used as part of the API requests
const sdkKeyHeaderObj = { 'x-optimizely-sdk-key': 'WhAG6H19i3ttXTRhjEBgb8' };
const dataObj = { 'userId': 'test-user' }

// GET health (admin)
const getHealth = () => { 
  axios.get('http://localhost:8088/health').then((response) => {
    console.log(`response code: ${response.status}`);
    console.log(response.data);
  });
};

// GET info (admin)
const getInfo = () => { 
  console.log('### Logging Agent info ###');
  axios.get('http://localhost:8088/info').then((response) => {
    console.log(`response code: ${response.status}`);
    console.log(response.data);
    console.log('######');
  }).catch((error) => {
    console.log(error);
    console.log('######');
  });;
};

// GET config (client)
const getConfig = () => { 
  console.log('### Logging config info ###');
  axios({
    method: 'get',
    url: 'http://localhost:8080/v1/config',
    headers: sdkKeyHeaderObj
  }).then((response) => {
    console.log(`response code: ${response.status}`);
    console.log(response.data);
    console.log('######');
  }).catch((error) => {
    console.log(error);
    console.log('######');
  });
};

// POST activate (client)
const activate = (featureKey) => { 
  console.log('### Calling activate ###');
  axios({
    method: 'post',
    url: 'http://localhost:8080/v1/activate',
    data: dataObj,
    headers: sdkKeyHeaderObj,
    params: { 
      "featureKey": featureKey 
    }
  }).then((response) => {
    console.log(`response code: ${response.status}`);
    console.log(response.data);
    console.log('######');
  }).catch((error) => {
    console.log(error);
    console.log('######');
  });;
};

// POST track (client)
const track = (eventKey) => {
  console.log('### Calling track ###'); 
  axios({
    method: 'post',
    url: 'http://localhost:8080/v1/track',
    data: dataObj,
    headers: sdkKeyHeaderObj,
    params: { 
      "eventKey": eventKey 
    }
  }).then((response) => {
    console.log(`response code: ${response.status}`);
    console.log('######');
  }).catch((error) => {
    console.log(error);
    console.log('######');
  });;
};

getHealth();
getInfo();
// getConfig();
// activate('<feature key>');
// track('<event key>');